import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidation } from '../Authentication/Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { axiosInstance } from '../../../Axios/Axios-instance'
import logo from '../../../assets/lightlogo.png'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../../../Redux/UserSlice'
import GoogleButton from '../../GoogleAuth/GoogleButton'
import { authRedirect } from '../../GoogleAuth/googleAuth'

axios.defaults.withCredentials = true

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [error, setError] = useState('')

  // Login form data
  const [loginForm, SetLoginForm] = useState({
    email: '',
    password: '',
    role: 'candidate'
  })

  const handleOnchange = e => {
    const validationErrors = { ...loginForm, [e.target.name]: e.target.value }
    SetLoginForm(validationErrors)
  }

  //Validation
  const handleValidation = e => {
    e.preventDefault()
    const errors = LoginValidation(loginForm)
    setError(errors)
    return Object.keys(errors).length === 0
  }

  //Login
  const handlelogin = async e => {
    e.preventDefault()
    if (!handleValidation(e)) return
    try {
      const response = await axiosInstance.post('api/auth/login', loginForm, {
        withCredentials: true
      })
      console.log(response)

      dispatch(setUserDetails(response.data.account))

      if (response.status === 200) {
        toast.success('Login Success', {
          autoClose: 1000,
          onClose: () => navigate('/')
        })
      }
    } catch (error) {
      console.log(error)

      toast.error(error.response?.data?.message || 'Server Error', {
        autoClose: 1000
      })
    }
  }

  return (
    <>
      <div className='lg:flex lg:flex-row flex flex-col  min-h-[80dvh] lg:m-10 m-5 justify-center   md:pt-10   '>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <div className='flex flex-col justify-around items-center  p-7 lg:w-[35vw] bg-gradient-to-b from-violet-950 to-black shadow-2xl'>
          <div className='flex flex-col items-center'>
            <img src={logo} alt='' className='w-24' />
            <h1 className='text-white lg:text-3xl text-3xl lg:tracking-[5px]'>
              WorkBridge
            </h1>
          </div>

          <p className='lg:flex lg:flex-col lg:mt-0 m-3 flex flex-row justify-center items-center  text-sm text-gray-200 tracking-wider  '>
            <span>Log in to continue your job search.</span>
            Create an account to discover new job opportunities and grow your
            career.
          </p>
        </div>

        <div className='lg:w-[35vw]  lg:flex flex-col justify-center items-center lg:pt-0 pt-4 bg-slate-50 '>
          <div className='flex flex-col w-full h-full lg:mt-0 mt-5 items-center justify-center bg-white m-2 p-4 lg:p-8   shadow-md'>
            <h1 className='text-2xl lg:text-3xl font-bold  '>LOGIN</h1>
            <form
              action=''
              className='flex flex-col place-items-center w-full p-10 lg:pt-6  '
              onSubmit={handlelogin}
            >
              
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  onChange={handleOnchange}
                  className={`  m-2 p-3 rounded-md lg:w-[20vw] w-full flex text-start border border-gray-300  bg-gray-50 transition-all duration-300  ${
                    error.email ? `border-red-600` : ''
                  }`}
                />
                {error.email && (
                  <p className='text-red-600 ml-2 text-sm'>{error.email}</p>
                )}
             
           
                <input
                  type='password'
                  name='password'
                  placeholder='Enter new password'
                  onChange={handleOnchange}
                  className={`  m-2 p-3 rounded-md lg:w-[20vw] w-full flex text-start border border-gray-300  bg-gray-50 transition-all duration-300  ${
                    error.password ? `border-red-600` : ''
                  }`}
                />
                {error.password && (
                  <p className='text-red-600 ml-2 text-sm'>{error.password}</p>
                )}
                <div className='flex justify-end text-sm text-blue-800 cursor-pointer hover:underline m-2'>
                  <h2>Forgotten password?</h2>
                </div>
             
              <div className='lg:w-[20vw] w-full'>

              <button
                type='submit'
                className='w-full py-3 mt-4 rounded-lg font-medium
             bg-indigo-500 text-white hover:bg-indigo-600
             transition-colors duration-200 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-300'
              >
                Login
              </button>
              </div>
              <button
                onClick={() => navigate('/signup')}
                className='pt-4 hover:underline hover:underline-offset-2  text-gray-600 hover:text-black text-sm '
              >
                Create new account ?
              </button>
              <div className='flex  items-center gap-2  '>
                <hr class='h-px my-2 w-20  bg-gray-200 border-0 dark:bg-gray-700'></hr>
                <h1 className='text-gray-500'>or</h1>
                <hr class='h-px my-2 w-20  bg-gray-200 border-0 dark:bg-gray-700'></hr>
              </div>
            <div className='w-full lg:w-[20vw] mt-4   '>
              <GoogleButton
                onClick={authRedirect}
                role='candidate'
              ></GoogleButton>
            </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
