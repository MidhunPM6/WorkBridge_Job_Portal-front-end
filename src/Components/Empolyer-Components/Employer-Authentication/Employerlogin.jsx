import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginValidation } from './Validation'
import authPoster from '../../../assets/authimg.png'
import logo from '../../../assets/lightlogo.png'
import { setEmployerDetails } from '../../../Redux/EmployerSlice'
import { useDispatch } from 'react-redux'
import GoogleButton from '../../../Components/GoogleAuth/GoogleButton'
import { authRedirect } from '../../../Components/GoogleAuth/googleAuth'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import useAuth from '../../../hooks/employer/useAuth'

const Employerlogin = () => {
  const [empLoginForm, setEmpLoginForm] = useState({
    email: '',
    password: '',
    role: 'employer'
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { login } = useAuth()

  const handleOnchange = e => {
    const changeData = { ...empLoginForm, [e.target.name]: e.target.value }
    setEmpLoginForm(changeData)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!handleValidation(e)) return
    const { success, response } = await login(empLoginForm)
  
    if (success) {
      toast.success('Login Success', {
        autoClose: 1000,
        onClose: () => navigate('/employer')
      })
      dispatch(setEmployerDetails(response.data.account))
    }
  }

  const handleValidation = e => {
    e.preventDefault()
    const errors = loginValidation(empLoginForm)
    setError(errors)
    return Object.keys(errors).length === 0
  }
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:min-h-screen w-full '>
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
        />

        <div className='lg:w-full lg:flex-row lg:block hidden   '>
          <img
            src={authPoster}
            alt='Signup Visual'
            className='w-full h-screen object-cover opacity-'
          />
        </div>
        <div className='lg:w-1/3 md:w-full lg:flex flex-col justify-center items-center lg:pt-0 pt-4   '>
          <form
            className='lg:w-full lg:max-w-md  bg-white p-6 rounded-md m-10 lg:m-0  '
            onSubmit={handleValidation}
          >
            <div className='w-full flex justify-center'>
              <img src={logo} alt='' className='w-28 ' />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-6 text-gray-600 '>
              Welcome Back
            </h2>

            {error.name && (
              <p className='text-red-500 text-sm mt-1'>{error.name}</p>
            )}

            <Input
              type='email'
              name='email'
              handleOnchange={handleOnchange}
              placeholder='Enter Your Email'
              className={`w-full py-3 ${
                error.email ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.email && (
              <p className='text-red-500 text-sm mt-1'>{error.email}</p>
            )}

            <Input
              type='password'
              name='password'
              handleOnchange={handleOnchange}
              placeholder='Enter Your Password'
              className={`w-full py-3 mt-4 ${
                error.password ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.password && (
              <p className='text-red-500 text-sm mt-1'>{error.password}</p>
            )}

            <p
              onClick={() => navigate('/employersignup')}
              className='mt-4 text-sm text-blue-600 cursor-pointer hover:underline hover:underline-offset-4 text-center'
            >
              Click here to Sign Up
            </p>

            <Button
              type='submit'
              className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 mt-6'
              handleClick={handleSubmit}
            >
              Login
            </Button>

            <div className='flex  items-center justify-center  gap-3 mt-3  '>
              <hr class='h-px my-2 lg:w-20 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
              <h1 className='text-gray-500'>or</h1>
              <hr class='h-px my-2 lg:w-20 w-full  bg-gray-200 border-0 dark:bg-gray-700'></hr>
            </div>

            <div className='flex justify-center mt-4 w-full'>
              <GoogleButton
                onClick={authRedirect}
                role='employer'
              ></GoogleButton>
            </div>
            <div className=' flex justify-center mt-10 text-sm'>
              <p className='text-gray-600'>
                Need help? Contact support{' '}
                <a href='' className='font-bold leading-loose text-blue-600'>
                  here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Employerlogin
