import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import useAccountSettings from '../../../../hooks/candidate/useAccountSettting'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { useTimer } from '../../../../hooks/usetimer'

const ChangePasswordModal = ({ setIsVisible }) => {
  const [verificationInput, setVerificationInput] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: ''
  })
  const user = useSelector(state => state.user.user)

  const { passwordOtpVerification, otpVerifiy } = useAccountSettings()

  const { showResend, startTimer, resetTimer, forceResend, formatTime } =
    useTimer(60)

  // Handle submit change username
  const handleChangePassword = e => {
    const changeData = { ...changePassword, [e.target.name]: e.target.value }
    setChangePassword(changeData)
  }

  const handleVerification = () => {
    otpVerificationPassword()
    startTimer()
  }
  const otpVerificationPassword = async () => {
    if (
      !changePassword.currentPassword ||
      !changePassword.newPassword ||
      changePassword.currentPassword.length < 6 ||
      changePassword.newPassword.length < 6
    ) {
      toast.error('Fill all the fileds with minimum 6 characters', {
        duration: 2000
      })
      setVerificationInput(false)
      return
    }
    const { success, response, error } = await passwordOtpVerification(
      changePassword,
      user.email
    )
    if (success) {
      setVerificationInput(true)
      toast.success(response.data.message, {
        duration: 2000
      })
    } else {
      error && setVerificationCode(false)
    }
  }

  const handleResendOTP = () => {
    forceResend()
    otpVerificationPassword()
  }
  const handleCancel = () => {
    setIsVisible(false)
    setVerificationInput(false)
    resetTimer()
    setChangePassword({ currentPassword: '', newPassword: '' })
  }

  // Method to use change password

  //   API to manage otp verification
  const verifyOtp = async () => {
    if (!verificationCode) {
      return alert('Enter the verification code ')
    }
    const { success, response } = await otpVerifiy(
      user.email,
      verificationCode,
      changePassword
    )
    if (success) {
      setTimeout(() => {
        setIsVisible(false)
      }, 1300)
      setIsVisible(false)
      setVerificationInput(false)
      forceResend()
      setChangePassword({ currentPassword: '', newPassword: '' })

      toast.success(response.data.message, {
        duration: 1200
      })
    }
  }

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg shadow-md flex flex-col gap-3 items-center '>
          <form className='flex flex-col justify-center items-center w-full'>
            <h1 className='w-full text-xl font-semibold items-center flex flex-col'>
              Time for a New Password? <br />
              <span className='flex items-center justify-center text-blue-500'>
                Update It Here
              </span>
            </h1>
            <h2 className='mt-4 text-gray-600'> Change the password</h2>
            <Input
              type='text'
              className='py-2'
              placeholder='Enter old password  '
              name='currentPassword'
              handleOnchange={handleChangePassword}
            />
            <Input
              type='password'
              className='py-2'
              placeholder='Enter a new  password '
              name='newPassword'
              handleOnchange={handleChangePassword}
            />
          </form>

          <div className='lg:flex lg:flex-row flex flex-col gap-4 mt-4 text-sm w-full items-center justify-center'>
            <Button
              className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3'
              handleClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              handleClick={handleVerification}
              disabled={verificationInput}
              className={`  rounded-md bg-green-500  hover:bg-green-600 text-white w-full py-3 ${
                verificationInput && 'cursor-not-allowed hover:bg-gray-300'
              } `}
            >
              Confirm
            </Button>
          </div>

          {verificationInput && (
            <div className='flex flex-col justify-center items-center w-full '>
              <label htmlFor='' className='mt-3 text-xs text-gray-600'>
                OTP has been sent to your registered email ID.
              </label>
              <p className='text-xs mt-3 text-gray-600'>
                Resend otp in : {formatTime()}
              </p>

              {showResend && (
                <button
                  onClick={handleResendOTP}
                  className='text-sm mt-1 mb-2 text-blue-500'
                >
                  Resend OTP
                </button>
              )}
              <Input
                type='password'
                name='code'
                className='py-2'
                placeholder='Enter the OTP '
                handleOnchange={e => setVerificationCode(e.target.value)}
              />
              <Button
                handleClick={verifyOtp}
                className=' p-2 mt-2 text-sm bg-slate-600  hover:bg-slate-700 '
              >
                Verify and update{' '}
              </Button>
            </div>
          )}

          <div className='flex flex-col text-xs mt-8 text-gray-500 w-full items-center'>
            <p>
              Usernames must be 3–20 characters long and can only be <br />
              <span className='w-full flex flex-col items-center mt-1'>
                changed once every 30 days.{' '}
              </span>{' '}
              .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ChangePasswordModal
