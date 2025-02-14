import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidation } from '../Authentication/Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'
import { useContext } from 'react'
import { ContextSeekerName } from '../../Context/SeekerContext'
import { UserContext } from '../../Context/UserDetailsContext'
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { axiosgGoogleAuth } from '../../Axios/Axios-instance'

axios.defaults.withCredentials = true

const Login = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const { setSavedUsername } = useContext(ContextSeekerName)
  const { setUserDetails } = useContext(UserContext)

  // Login form data
  const [loginForm, SetLoginForm] = useState({
    email: '',
    password: ''
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
      const response = await axiosAuth.post('/login', loginForm, {
        withCredentials: true
      })

      setSavedUsername(response.data.username)
      setUserDetails(response.data.user)

      console.log(response.data.user)

      if (response.status === 200) {
        toast.success('Login Success', {
          autoClose: 1000,
          onClose: () => navigate('/')
        })
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Server Error', {
        autoClose: 1000
      })
    }
  }

  // Google Authentication

  const handleGoogleAuth = async response => {
    try {
      const res = await axiosgGoogleAuth.post(
        '/google',
        { token: response.credential },
        { withCredentials: true }
      )
      setSavedUsername(res.data.Username)
      setUserDetails(res.data.User)
      toast.success('Logged In', {
        onClose: () => {
          navigate('/')
        },
        autoClose: 1000
      })
    } catch (error) {
      console.log('error' + error)
      alert('Invalid user')
    }
  }

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <div className='lg:flex font-poppinn  m-10 flex justify-center  md:pt-10 h-[80vh]  '>
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
          <div className='flex flex-col justify-around items-center h-full p-7 lg:w-[35vw] bg-gradient-to-b from-violet-950 to-black shadow-2xl'>
            <h1 className='text-white lg:text-3xl text-3xl lg:tracking-[5px]'>
              WorkBridge
            </h1>
            <p className='flex flex-col items-center text-sm text-gray-200 tracking-wider  '>
              <span>Log in to continue your job search.</span>
              Find the right job faster with personalized recommendations.
            </p>
          </div>

          <div className='lg:w-[35vw]  lg: flex flex-col justify-center items-center lg:pt-0 pt-4 bg-slate-50 '>
            <div className='flex flex-col items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-md'>
              <h1 className='text-2xl lg:text-2xl font-bold  '>Login</h1>
              <form
                action=''
                className='flex flex-col place-items-center p-4 lg:pt-6 '
                onSubmit={handlelogin}
              >
                <div className='flex flex-col'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    onChange={handleOnchange}
                    className={`  m-2 py-1 px-8 rounded flex text-start outline-none border focus:border-gray-500 focus:border  hover:border-gray-30 bg-gray-50  ${
                      error.email ? `border-red-600` : ''
                    }`}
                  />
                  {error.email && (
                    <p className='text-red-600 ml-2 text-sm'>{error.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter new password'
                    onChange={handleOnchange}
                    className={`  m-2 py-1 px-8 rounded flex text-start outline-none border focus:border-gray-500 focus:border  hover:border-gray-30 bg-gray-50  ${
                      error.password ? `border-red-600` : ''
                    }`}
                  />
                  {error.password && (
                    <p className='text-red-600 ml-2 text-sm'>
                      {error.password}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  className='m-2 py-1 px-5 bg-violet-600 rounded-md text-white mt-6 hover:bg-violet-700 shadow'
                >
                  Login
                </button>
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

                <div className='mt-4'>
                  <GoogleLogin
                    ux_mode='popup'
                    usefqdn={true}
                    onSuccess={handleGoogleAuth}
                    onError={() => {
                      console.log('Login Failed')
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default Login
