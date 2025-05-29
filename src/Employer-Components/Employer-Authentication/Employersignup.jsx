import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import authPoster from '../../assets/authimg.png'
import logo from '../../assets/lightlogo.png'
import { axiosInstance } from '../../Axios/Axios-instance'
import GoogleButton from '../../Components/GoogleAuth/GoogleButton'
import { authRedirect } from '../../Components/GoogleAuth/googleAuth'

const Employersignup = () => {
  const navigate = useNavigate()
  const [empSignupform, setEmpLoginData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employer'
  })

  const [error, setError] = useState('')

  const handleOnchage = e => {
    const changeData = { ...empSignupform, [e.target.name]: e.target.value }
    setEmpLoginData(changeData)
  }

  // Sign up form data
  const handleSubmit = async e => {
    e.preventDefault()

    if (!handleValidation(e)) return
    try {
      const response = await axiosInstance.post(
        '/api/auth/signup',
        empSignupform
      )

      toast.success(response.data.message, {
        autoClose: 1300,
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
      <ToastContainer position='top-right'></ToastContainer>
      <div className='flex flex-col lg:flex-row h-screen w-full'>
        <div className='w-full lg:w-2/3 h-full '>
          <img
            src={authPoster}
            alt='Signup Visual'
            className='w-full h-full object-cover opacity-'
          />
        </div>
        <div className='flex flex-col justify-center mt-10 lg:mt-0   items-center w-full lg:w-1/3 px-6 sm:px-10 md:px-16 lg:px-20'>
          <form
            className='lg:w-full lg:max-w-md  p-6 rounded-md  m-10 lg:m-0   '
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
              className={`lg:w-full w-full py-2  p-4  transition-all duration-300 border rounded-md  ${
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
              className={`lg:w-full w-full py-2 mt-4  p-4  transition-all duration-300 border rounded-md ${
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
              className={`lg:w-full w-full py-2  p-4 mt-4 transition-all duration-300 border rounded-md ${
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
              className='w-full mt-4 text-sm bg-violet-900 text-white py-2 rounded-sm hover:bg-violet-950 transition-all duration-300'
              onClick={handleSubmit}
            >
              Sign Up
            </button>

            <div className='flex  items-center justify-center  gap-3 mt-3  '>
              <hr class='h-px my-2 lg:w-20 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
              <h1 className='text-gray-500'>or</h1>
              <hr class='h-px my-2 lg:w-20 w-full  bg-gray-200 border-0 dark:bg-gray-700'></hr>
            </div>

            <div className='mt-4 w-full'>
              <GoogleButton
                onClick={authRedirect}
                role='employer'
              ></GoogleButton>
            </div>

            <div className=' flex justify-center items-center mt-10 text-sm w-full'>
              <p className='text-gray-600'>
                By Signing in, you agree to our{' '}
                <a href='##' className='font-bold leading-loose text-blue-600 flex justify-center'>
                  Terms & Conditions.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Employersignup
