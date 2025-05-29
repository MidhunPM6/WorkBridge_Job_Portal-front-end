import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../../assets/lightlogo.png'
import { useDispatch } from 'react-redux'
import { axiosInstance } from '../../../Axios/Axios-instance'
import GoogleButton from '../../GoogleAuth/GoogleButton'
import { authRedirect } from '../../GoogleAuth/googleAuth'

const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'candidate'
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

      toast.success('Sign Up Successful', {
        onClose: () => {
          navigate('/login')
        },
        autoClose: 1
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Server Error')
    }
  }

  return (
    <>
      <div className='lg:flex lg:flex-row  flex-col font-poppinn  lg:m-10 m-5 flex justify-center  md:pt-10 min-h-[80dvh]  '>
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
            <h1 className='text-white  lg:text-3xl text-3xl lg:tracking-[5px]'>
              WorkBridge
            </h1>
          </div>
          <p className='lg:flex lg:flex-col lg:mt-0 m-3  items-center  text-sm text-gray-200 tracking-wider  '>
            <span className=''>Join WorkBridge Today!</span>
            Create an account to discover new job opportunities and grow your
            career.
          </p>
        </div>

        <div className='lg:w-[35vw]  lg:flex flex-col justify-center items-center lg:pt-0 pt-4 bg-slate-50 '>
          <div className='flex flex-col lg:mt-0 mt-5 items-center bg-white m-2 p-4 w-full h-full justify-center rounded-sm  shadow-md'>
            <h1 className='text-2xl lg:text-3xl font-bold  '>SIGN UP </h1>
            <form
              action=''
              className='flex flex-col w-full place-items-center p-10 lg:pt-6  '
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                onChange={handleChange}
                className={`  m-2 p-3  lg:w-[20vw] w-full rounded-md flex text-star  border border-gray-300  hover:border-gray-30 bg-gray-50 transition-all duration-300  ${
                  error.email ? `border-red-600` : ''
                }`}
              />
              {error.name && (
                <p className='text-red-600 ml-2 text-sm'>{error.name}</p>
              )}

              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={handleChange}
                className={`   m-2 p-3  lg:w-[20vw] w-full rounded-md flex text-star  border border-gray-300  hover:border-gray-30 bg-gray-50 transition-all duration-300 ${
                  error.password ? `border-red-600` : ''
                }`}
              />
              {error.email && (
                <p className='text-red-600 ml-2 text-sm'>{error.email}</p>
              )}

              <input
                type='password'
                name='password'
                placeholder='Enter a new password'
                onChange={handleChange}
                className={`  m-2 p-3  lg:w-[20vw] w-full rounded-md flex text-star  border border-gray-300  hover:border-gray-30 bg-gray-50 transition-all duration-300  ${
                  error.password ? `border-red-600` : ''
                }`}
              />
              {error.password && (
                <p className='text-red-600 ml-2 text-sm'>{error.password}</p>
              )}

              <div className='w-full lg:w-[20vw]'>
                <button
                  type='submit'
                  className='w-full py-3  mt-4 rounded-md font-medium
             bg-indigo-500 text-white hover:bg-indigo-600
             transition-colors duration-200 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-300'
                >
                  Sign Up
                </button>
              </div>
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
            <div className='w-full lg:w-[20vw] mt-4 '>
              <GoogleButton
                onClick={() => authRedirect()}
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
export default SignUp
