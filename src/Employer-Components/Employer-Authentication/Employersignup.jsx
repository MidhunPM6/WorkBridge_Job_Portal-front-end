import React, { useState } from 'react'
import googleimg from '../../assets/google.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import authPoster from '../../assets/authimg.png'
import logo from '../../assets/lightlogo.png'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'

const Employersignup = () => {
  const navigate = useNavigate()
  const [empSignupform, setEmpLoginData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleOnchage = e => {
    const changeData = { ...empSignupform, [e.target.name]: e.target.value }
    setEmpLoginData(changeData)
  }

  //Connecting Axios
  const handleSubmit = async e => {
    e.preventDefault()

    if (!handleValidation(e)) return
    try {
      const response = await axiosAuth.post('/empregister', empSignupform)
      console.log(response)

      toast.success('Sign Up Successfull', {
        onClose: () => navigate('/employerlogin')
      })
    } catch (error) {
      toast.error(error.response?.data?.message || 'Server Error')
    }
  }

  const handleValidation = e => {
    e.preventDefault()
    const errors = registerValidation(empSignupform)
    setError(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <>
    <GoogleOAuthProvider>
      <div className='flex flex-col lg:flex-row h-screen w-full'>
        <ToastContainer
          position='top-right'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />

        <div className='w-full lg:w-2/3 h-full '>
          <img
            src={authPoster}
            alt='Signup Visual'
            className='w-full h-full object-cover opacity-'
          />
        </div>
        <div className='flex flex-col justify-center mt-10 lg:mt-0   items-center w-full lg:w-1/3 px-6 sm:px-10 md:px-16 lg:px-20'>
          <form
            className='lg:w-full lg:max-w-md  p-6 rounded-md  m-10 lg:m-0  '
            onSubmit={handleValidation}
          >

            <div className='w-full flex justify-center'>

          <img src={logo} alt='' className='w-28 ' />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-6 text-gray-600 '>
              Sign Up
            </h2>

            <input
              type='text'
              name='name'
              onChange={handleOnchage}
              placeholder='Enter Your Name'
              className={`lg:w-full w-full py-2 text-sm  p-4 focus:border-gray-500 transition-all duration-300 border rounded-sm outline-none ${
                error.name ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.name && (
              <p className='text-red-500 text-sm mt-1'>{error.name}</p>
            )}

            <input
              type='email'
              name='email'
              onChange={handleOnchage}
              placeholder='Enter Your Email'
              className={`lg:w-full w-full py-2 text-sm  mt-4 rounded-sm p-4 focus:border-gray-500 transition-all duration-300 border outline-none ${
                error.email ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.email && (
              <p className='text-red-500 text-sm mt-1'>{error.email}</p>
            )}

            <input
              type='password'
              name='password'
              onChange={handleOnchage}
              placeholder='Enter Your Password'
              className={`lg:w-full w-full py-2 text-sm  mt-4 rounded-sm p-4 focus:border-gray-500 transition-all duration-300 border  outline-none ${
                error.password ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.password && (
              <p className='text-red-500 text-sm mt-1'>{error.password}</p>
            )}

            <p
              onClick={() => navigate('/employerlogin')}
              className='mt-4 text-sm text-blue-600 cursor-pointer hover:underline text-center'
            >
              Click here to login
            </p>

            <button
              type='submit'
              className='w-full mt-4 text-sm bg-violet-700 text-white py-2 rounded-sm hover:bg-violet-800 transition-all duration-300'
              onClick={handleSubmit}
            >
              Sign Up
            </button>

            <div className='flex  items-center justify-center  gap-3 mt-3  '>
              <hr class='h-px my-2 lg:w-20 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
              <h1 className='text-gray-500'>or</h1>
              <hr class='h-px my-2 lg:w-20 w-full  bg-gray-200 border-0 dark:bg-gray-700'></hr>
            </div>


            <div className='mt-4'>
              <GoogleLogin
              
              />
       
            </div>
            <div className=' flex justify-center mt-10 text-sm'>
              <p className='text-gray-600'>By Signing in, you agree to our <a href="" className='font-bold leading-loose text-blue-600'>Terms & Conditions.</a></p>
            </div>
          </form>
        </div>
      </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default Employersignup
