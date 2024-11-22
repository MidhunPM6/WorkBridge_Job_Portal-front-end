import React, { useState } from 'react'
import googleimg from '../../assets/google.png'
import { useNavigate } from 'react-router-dom'

import { registerValidation } from './Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'

const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({})

  // Craeted State for form data to store
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
       const response = await axiosAuth.post('/register', formData)
       console.log(response);
       
        toast.success('Login Successful', {
            onClose: () => {
                navigate('/login');
            },
            autoClose: 1000,
        });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Server Error')
    }
  }

  return (
    <>
      <div className='lg:flex font-poppins'>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <div className='h-32 lg:w-[40vw] lg:h-[100vh] bg-violet-600 opacity-75 place-content-center lg'>
          <h1 className='lg:flex lg:place-content-center text-white lg:text-6xl lg:mb-32 font-Kaushan text-3xl flex place-content-center'>
            WorkBridge
          </h1>
        </div>
        <div className='lg:w-[60vw] lg:h-[100vh]  lg: flex flex-col items-center lg:pt-36 pt-4 bg-slate-100 '>
          <div className='flex flex-col place-items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-lg'>
            <h1 className='text-2xl lg:text-3xl font-semibold '>Sign Up</h1>
            <form
              action='submit'
              className='flex flex-col place-items-center p-4 lg:pt-6 '
              onSubmit={handleValidation}
            >
              <input
                type='text'
                placeholder='Enter your name'
                name='name'
                onChange={handleChange}
                className='m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300  '
              />
              {error.name && <p className='text-red-800'>{error.name}</p>}
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                onChange={handleChange}
                className='m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300'
              />
              {error.email && <p className='text-red-800'>{error.email}</p>}
              <input
                type='password'
                placeholder='Enter new password'
                name='password'
                onChange={handleChange}
                className='m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300'
              />
              {error.password && (
                <p className='text-red-800'>{error.password}</p>
              )}
              <button
                type='submit'
                className='m-2 py-2 px-7 bg-violet-500 rounded-md text-white mt-3 hover:bg-violet-600'
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate('/login')}
                className='pt-4 lg:hover:underline '
              >
                Already Account ?
              </button>

              <h1>or</h1>
              <div className='flex p-2 mt-2 border-2 border-gray-200 rounded-full '>
                <img src={googleimg} alt='' className='w-6 mr-2' />
                <p>Sign in with google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp
