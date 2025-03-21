import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { setUserDetails } from '../../../Redux/UserSlice'
import logo from '../../../assets/lightlogo.png'
import { useDispatch } from 'react-redux'
import {axiosInstance} from '../../../Axios/Axios-instance'

const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
   
  })

  // Onchange event
  const handleChange = e => {
    const newobj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newobj)
  }

  //Vallidation of input feild
  const handleValidation = e => {
    e.preventDefault()
    const errors = registerValidation(formData)
    setError(errors)
    return Object.keys(errors).length === 0
  }

  // Subimition of form data to the back-end
  const handleSubmit = async e => {
    e.preventDefault()

    if (!handleValidation(e)) return
    try {
      const response = await axiosInstance.post('/api/auth/signup', formData)
      console.log(response)

      toast.success('Login Successful', {
        onClose: () => {
          navigate('/login')
        },
        autoClose: 1000
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Server Error')
    }
  }

  // Google authentication
  const handleGoogleAuth = async response => {
    try {
      const res = await axiosInstance.post(
        '/google',
        { token: response.credential },
        { withCredentials: true }
      ) 
      dispatch(setUserDetails(res.data.User))

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
            <div className='flex flex-col items-center'>
              <img src={logo} alt='' className='w-24' />
              <h1 className='text-white lg:text-3xl text-3xl lg:tracking-[5px]'>
                WorkBridge
              </h1>
            </div>
            <p className='flex flex-col items-center text-sm  text-gray-200 tracking-wider '>
              <span className=''>Join WorkBridge Today!</span>
              Create an account to discover new job opportunities and grow your
              career.
            </p>
          </div>

          <div className='lg:w-[35vw]  lg: flex flex-col justify-center items-center lg:pt-0 pt-4 bg-slate-50 '>
            <div className='flex flex-col items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-md'>
              <h1 className='text-2xl lg:text-2xl font-bold  '>Sign In </h1>
              <form
                action=''
                className='flex flex-col place-items-center p-4 lg:pt-6 '
                onSubmit={handleSubmit}
              >
                <div className='flex flex-col'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    onChange={handleChange}
                    className={`  m-2 py-1 px-8 rounded-sm flex text-start outline-none border focus:border-gray-500 focus:border  hover:border-gray-30 bg-gray-50 transition-all duration-300  ${
                      error.email ? `border-red-600` : ''
                    }`}
                  />
                  {error.name && (
                    <p className='text-red-600 ml-2 text-sm'>{error.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    onChange={handleChange}
                    className={`  m-2 py-1 px-8 rounded-sm flex text-start outline-none border focus:border-gray-500 focus:border  hover:border-gray-30 bg-gray-50  transition-all duration-300 ${
                      error.password ? `border-red-600` : ''
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
                    placeholder='Enter a new password'
                    onChange={handleChange}
                    className={`  m-2 py-1 px-8 rounded-sm flex text-start outline-none border focus:border-gray-500 focus:border  hover:border-gray-30 bg-gray-50 transition-all duration-300  ${
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
                  className='m-2 py-1 px-5 bg-violet-900 rounded-md text-white mt-6 hover:bg-violet-800 shadow'
                >
                  SignUp
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className='pt-4 hover:underline hover:underline-offset-2  text-gray-600 hover:text-black text-sm '
                >
                  Already have account ?
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
export default SignUp
