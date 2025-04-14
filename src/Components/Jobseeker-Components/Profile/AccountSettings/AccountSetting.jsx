import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUserDetails } from '../../../../Redux/UserSlice'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { AnimatePresence, motion } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'

const AccountSetting = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [verificationInput, setVerificationInput] = useState(false)
  const [seconds, setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(false)
  const [showResend, setShowResend] = useState(false)
  const [usernameFormData, setUsernameFormData] = useState({
    name: '',
    password: '',
    code: ''
  })
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: ''
  })
  const [verificationCode,setVerificationCode] = useState('')
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
    setVerificationInput(true)
    console.log(changePassword)

    try {
      if (
        !changePassword.currentPassword ||
        !changePassword.newPassword ||
        changePassword.currentPassword.length < 6 ||
        changePassword.newPassword.length < 6
      ) {
        alert('Fill all the fileds with minimum 6 characters')
        setVerificationInput(false)
        return
      }
      const response = await axiosInstance.post(
        '/api/candidate/changepassword',
        {
          email: user.email,
          password:changePassword.currentPassword,
        },
        {
          withCredentials: true
        }
      )
    } catch (error) {
      console.log(error.response)
    }
  }
//   API to manage otp verification
 const verifyOtp = async()=>{
  try {
    if (!verificationCode) {
      return alert('Enter the verification code ')
    }
    console.log(verificationCode);
    
    const response = await axiosInstance.post('/api/candidate/verifyOtp',{email : user.email,verificationCode:verificationCode,newPassword:changePassword.newPassword},{
      withCredentials : true
    }) 
    console.log(response);   
    
  } catch (error) {
    console.log(error.response);
    
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
              className=' text-blue-500 font-semibold text-xs py-2  w-36 rounded-sm  bg-blue-50 hover:bg-blue-100 transition-all duration-300'
            >
              Logout
            </button>
          </div>
          <div>
            <button className='mt-4  hover:bg-red-700 w-36 text-xs bg-red-600 py-2 p-2  text-white font-semibold rounded-sm transition-all duration-300'>
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
                <form className='flex flex-col justify-center items-center w-full p-10'>
                  <h1 className='w-full text-xl font-semibold items-center flex flex-col'>
                    Spotted a typo or outdated username? <br />
                    <span className='flex items-center justify-center text-blue-500'>
                      You can update it here.
                    </span>
                  </h1>
                  <h2 className='mt-4 text-gray-600'>Change the username</h2>
                  <input
                    type='text'
                    className='bg-gray-50 mt-4 py-2 p-2  text-sm lg:w-[70%] border rounded-sm shadow-md'
                    placeholder='Enter a new username '
                    name='name'
                    onChange={handleChangeUsername}
                  />
                  <input
                    type='password'
                    className='bg-gray-50 mt-4 py-2 text-sm p-2 lg:w-[70%] border rounded-sm shadow-md'
                    placeholder='Enter your password '
                    name='password'
                    onChange={handleChangeUsername}
                  />
                </form>

                <div className='flex gap-4 mt- text-sm'>
                  <button
                    className='bg-gray-200 hover:bg-gray-100 p-2 px-6 rounded-sm shadow-md'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={usernameSubmit}
                    className=' p-2 px-6 rounded-sm bg-violet-900 text-white hover:bg-violet-950 shadow-md  '
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
                    className='bg-gray-50 mt-4 py-2 p-2  text-sm lg:w-[90%] border rounded-sm shadow-md'
                    placeholder='Enter old password  '
                    name='currentPassword'
                    onChange={handleChangePassword}
                  />
                  <input
                    type='text'
                    className='bg-gray-50 mt-4 py-2 text-sm p-2 lg:w-[90%] border rounded-sm shadow-md'
                    placeholder='Enter a new  password '
                    name='newPassword'
                    onChange={handleChangePassword}
                  />
                </form>
                <div className='flex gap-4 mt-4 text-sm'>
                  <button
                    className='bg-gray-100 hover:bg-gray-50 p-2 px-6 rounded-sm shadow-md'
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleVerification}
                    disabled={verificationInput}
                    className={` p-2 px-6 rounded-sm bg-violet-900 text-white hover:bg-violet-950 shadow-md ${
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
                      className='bg-gray-50 mt-1 py-2 text-sm p-2 lg:w-[68%] border rounded-sm shadow-md'
                      placeholder='Enter the OTP '
                      onChange={(e)=>setVerificationCode(e.target.value)}
                    />
                    <button
                      onClick={verifyOtp}
                      className=' p-1 px-6 mt-3 rounded-sm text-sm bg-blue-100 text-blue-500 hover:bg-blue-200 shadow-md  '
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
    </>
  )
}

export default AccountSetting
