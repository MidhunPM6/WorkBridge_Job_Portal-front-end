import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUserDetails } from '../../../../Redux/UserSlice'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { AnimatePresence, motion } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'
import { setClearUser } from '../../../../Redux/UserSlice'

const AccountSetting = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [verificationInput, setVerificationInput] = useState(false)
  const [seconds, setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(false)
  const [showResend, setShowResend] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [usernameFormData, setUsernameFormData] = useState({
    name: '',
    password: '',
    code: ''
  })
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: ''
  })
  const [verificationCode, setVerificationCode] = useState('')
  const dispatch = useDispatch()

  const startTimer = () => {
    setIsActive(true)
    setShowResend(false)
  }
  useEffect(() => {
    let timer
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)
    } else if (seconds === 0) {
      setIsActive(false)
      setShowResend(true)
    }

    return () => clearInterval(timer)
  }, [isActive, seconds])

  const formatTime = () => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min}:${sec < 10 ? '0' + sec : sec}`
  }

  const handleVerification = () => {
    otpVerificationPassword()
    startTimer()
  }

  const handleResendOTP = () => {
    setSeconds(60)
    startTimer()
    otpVerificationPassword()
  }

  const handleCancel = () => {
    setIsVisible(false)
    setIsOpen(false)
    setVerificationInput(false)
    setShowResend(false)
    setSeconds(60)
    setIsActive(false)
    setChangePassword(false)
  }

  //Custom Styles for First Modal
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: modalIsOpen ? 1 : 0
    }
  }

  //Custom Styles for Second Modal
  const customStyles2 = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: isVisible ? 1 : 0
    }
  }

  //Logout handling
  const handleLogout = async e => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post(
        'api/auth/logout',
        {},
        {
          withCredentials: true
        }
      )
      console.log(response)
    } catch (error) {}
    dispatch(logout())

    navigate('/')
  }

  // Method to handle change of candidate username
  const handleChangeUsername = e => {
    const changeData = { ...usernameFormData, [e.target.name]: e.target.value }
    setUsernameFormData(changeData)
  }

  // Handle submit username change
  const usernameSubmit = async () => {
    console.log(usernameFormData)
    setVerificationInput(true)
    try {
      const response = await axiosInstance.post(
        '/api/candidate/changename',
        usernameFormData,
        {
          withCredentials: true
        }
      )
      console.log(response)
      toast.success(response.data.message, {
        duration: 1300
      })
      setTimeout(() => {
        setIsOpen(false)
        setUsernameFormData('')
      }, 1400)
      dispatch(setUserDetails(response.data.data))
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 1300
      })
    }
  }

  const handleChangePassword = e => {
    const changeData = { ...changePassword, [e.target.name]: e.target.value }
    setChangePassword(changeData)
  }

  // Method to use change password
  const otpVerificationPassword = async () => {
    try {
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
      const response = await axiosInstance.post(
        '/api/candidate/changepassword',
        {
          email: user.email,
          password: changePassword.currentPassword
        },
        {
          withCredentials: true
        }
      )
      setVerificationInput(true)
      toast.success(response.data.message, {
        duration: 2000
      })
    } catch (error) {
      console.log(error)

      error && setVerificationCode(false)
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }

  //   API to manage otp verification
  const verifyOtp = async () => {
    try {
      if (!verificationCode) {
        return alert('Enter the verification code ')
      }
      console.log(verificationCode)

      const response = await axiosInstance.post(
        '/api/candidate/verifyOtp',
        {
          email: user.email,
          verificationCode: verificationCode,
          newPassword: changePassword.newPassword
        },
        {
          withCredentials: true
        }
      )
      toast.success(response.data.message, {
        duration: 1200
      })
      setTimeout(() => {
        setIsVisible(false)
      }, 1300)

      setIsVisible(false)
      setIsOpen(false)
      setVerificationInput(false)
      setShowResend(false)
      setSeconds(60)
      setIsActive(false)
      setChangePassword(false)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }
  //  API to Delete candidate entire Account
  const deleteAccount = async () => {
    try {
      const response = await axiosInstance.delete(
        '/api/candidate/deleteAccount',
        {
          withCredentials: true
        }
      )
      console.log(response)
      dispatch(setClearUser())
      toast.success('Your account is deleted permenantly', {
        duration: 1200
      })
      setTimeout(() => {
        navigate('/')
      }, 1300)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }
  return (
    <>
      <div className=' relative flex-col lg:justify-normal justify-center  lg:p-20  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full '>
        <Toaster></Toaster>
        <div className=' flex flex-col items-center border p-10 rounded-md border-gray-300 '>
          <div>
            <h1 className=' w-full flex justify-center text-2xl font-semibold'>
              Account Settings
            </h1>
            <p className='text-sm text-gray-700'>
              Manage your account details and security options below
            </p>
          </div>
          <div className='lg:h-[0.08rem] bg-gray-200 mt-8 w-full '></div>

          <div className='flex justify-around  mt-6 gap-4 text-sm w-full '>
            <div className='flex flex-col w-full gap-1'>
              <label htmlFor='' className='font-semibold'>
                Username
              </label>
              <h1 className='  outline-none   '>{user?.name}</h1>
              <p className='text-xs text-gray-600 '>
                This name will be visible to employers
              </p>
            </div>
            <div className='flex justify-center items-center  text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={() => setIsOpen(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>
          <div className='h-[0.08rem] bg-gray-200 mt-4 w-full'></div>
          <div className='flex mt-4 gap-4 w-full'>
            <div className='flex flex-col  text-sm w-full  '>
              <label htmlFor=''>Password</label>
              <h1 className='  outline-none text-gray-600  '>********</h1>
              <p className='text-xs text-gray-600'>
                Choose a strong password for your account security{' '}
              </p>
            </div>
            <div className='  flex justify-center items-center text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={() => setIsVisible(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>

          <div className='mt-10 '>
            <button
              onClick={handleLogout}
              type='button '
              className=' text-blue-500 font-semibold p-2  lg:w-40 rounded-md text-sm bg-blue-50 hover:bg-blue-100 transition-all duration-300 shadow-md'
            >
              Logout
            </button>
          </div>
          <div>
            <button
              onClick={() => setShowDelete(true)}
              className='mt-4  hover:bg-red-700 lg:w-40  text-sm bg-red-600  p-2  text-white font-semibold rounded-md transition-all duration-300 shadow-md'
            >
              Delete your account
            </button>
          </div>
          <p className=' text-gray-600 mb-4 text-xs mt-2'>
            This action is{' '}
            <span className='font-medium text-red-500'>permanent</span> and
            cannot be undone
          </p>
        </div>
      </div>
      {/*  Username change Modal */}
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
                <form className='flex flex-col justify-center items-center w-full '>
                  <h1 className='w-full text-xl font-semibold items-center flex flex-col'>
                    Spotted a typo or outdated username? <br />
                    <span className='flex items-center justify-center text-blue-500'>
                      You can update it here.
                    </span>
                  </h1>
                  <h2 className='mt-4 text-gray-600'>Change the username</h2>
                  <input
                    type='text'
                    className='bg-gray-50 mt-4 py-2 p-2  lg:w-[90%] border rounded-md shadow-md'
                    placeholder='Enter a new username '
                    name='name'
                    onChange={handleChangeUsername}
                  />
                  <input
                    type='password'
                    className='bg-gray-50 mt-4 py-2 p-2  lg:w-[90%] border rounded-md shadow-md'
                    placeholder='Enter your password '
                    name='password'
                    onChange={handleChangeUsername}
                  />
                </form>

                <div className='lg:flex lg:flex-row flex flex-col gap-4 mt-4 text-sm w-full items-center justify-center'>
                  <button
                    className='bg-gray-100 hover:bg-gray-50 p-2 lg:w-[40%] w-full lg:rounded-md shadow-md'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={usernameSubmit}
                    className=' p-2 px-6 rounded-md bg-violet-900 lg:w-[40%] w-full text-white hover:bg-violet-950 shadow-md  '
                  >
                    Save changes
                  </button>
                </div>
                <div className='flex flex-col text-xs mt-8 text-gray-500 w-full items-center'>
                  <p>
                    Usernames must be 3–20 characters long and can only be{' '}
                    <br />
                    <span className='w-full flex flex-col items-center mt-1'>
                      changed once every 30 days.{' '}
                    </span>{' '}
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Passwor change Modal  */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
                <form className='flex flex-col justify-center items-center w-full'>
                  <h1 className='w-full text-xl font-semibold items-center flex flex-col'>
                    Time for a New Password? <br />
                    <span className='flex items-center justify-center text-blue-500'>
                      Update It Here
                    </span>
                  </h1>
                  <h2 className='mt-4 text-gray-600'> Change the password</h2>
                  <input
                    type='text'
                    className='bg-gray-50 mt-4 py-2 p-2  lg:w-[90%] w-full border rounded-md shadow-md'
                    placeholder='Enter old password  '
                    name='currentPassword'
                    onChange={handleChangePassword}
                  />
                  <input
                    type='password'
                    className='bg-gray-50 mt-4 py-2 p-2  lg:w-[90%] w-full border rounded-md shadow-md'
                    placeholder='Enter a new  password '
                    name='newPassword'
                    onChange={handleChangePassword}
                  />
                </form>
                <div className='lg:flex lg:flex-row flex flex-col gap-4 mt-4 text-sm w-full items-center justify-center'>
                  <button
                    className='bg-gray-100 hover:bg-gray-50 p-2 lg:w-[40%] w-full lg:rounded-md shadow-md'
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleVerification}
                    disabled={verificationInput}
                    className={` p-2 px-6 rounded-md bg-violet-900 lg:w-[40%] w-full text-white hover:bg-violet-950 shadow-md ${
                      verificationInput &&
                      'cursor-not-allowed hover:bg-gray-300'
                    } `}
                  >
                    Confirm
                  </button>
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
                    <input
                      type='password'
                      name='code'
                      className='bg-gray-50 mt-1 py-2 text-sm p-2 lg:w-[90%] w-[70%] border rounded-sm shadow-md'
                      placeholder='Enter the OTP '
                      onChange={e => setVerificationCode(e.target.value)}
                    />
                    <button
                      onClick={verifyOtp}
                      className=' p-2   mt-4 rounded-md text-sm bg-blue-100 text-blue-500 hover:bg-blue-200 shadow-md  '
                    >
                      Verify and update{' '}
                    </button>
                  </div>
                )}

                <div className='flex flex-col text-xs mt-8 text-gray-500 w-full items-center'>
                  <p>
                    Usernames must be 3–20 characters long and can only be{' '}
                    <br />
                    <span className='w-full flex flex-col items-center mt-1'>
                      changed once every 30 days.{' '}
                    </span>{' '}
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showDelete && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
                <svg
                  class='text-red-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='70'
                  height='70'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <h1 className='text-2xl text-gray-700 '>Are you sure ?</h1>
                <p className='text-xs text-gray-500 leading-5 tracking-wide'>
                  Do you really want to delete your Account? <br />
                  <span className='flex w-full justify-center '>
                    This process cannot be undone
                  </span>
                </p>
                <div className='text-black text-sm flex gap-3'>
                  <button
                    onClick={() => setShowDelete(false)}
                    className='bg-gray-200 py-2 px-6 mt-10  rounded-sm hover:bg-gray-300 '
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteAccount}
                    className='bg-red-600 bg-opacity-95 py-2 px-6 mt-10 text-white rounded-sm hover:bg-red-700'
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccountSetting
