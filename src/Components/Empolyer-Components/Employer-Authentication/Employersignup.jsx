import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import authPoster from '../../../assets/authimg.png'
import logo from '../../../assets/lightlogo.png'
import GoogleButton from '../../common/GoogleAuth/GoogleButton'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import useAuth from '../../../hooks/employer/useAuth'

const Employersignup = () => {
  const navigate = useNavigate()
  const [empSignupform, setEmpLoginData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employer'
  })
  const [error, setError] = useState('')
  const { signup } = useAuth()

  const handleOnchage = e => {
    const changeData = { ...empSignupform, [e.target.name]: e.target.value }
    setEmpLoginData(changeData)
  }

  // Sign up form data
  const handleSubmit = async e => {
    e.preventDefault()
    if (!handleValidation(e)) return

    const { success, response } = await signup(empSignupform)
    if (success) {
      toast.success(response.data.message, {
        autoClose: 1300,
        onClose: () => navigate('/employerlogin')
      })
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
      <div className='flex flex-col lg:flex-row lg:min-h-screen w-full justify-center '>
        <ToastContainer position='top-right' />
        <div className='w-full h-screen lg:flex-row lg:block hidden  '>
          <img
            src={authPoster}
            alt='Signup Visual'
            className='w-full h-screen object-cover opacity-'
          />
        </div>
        <div className='lg:w-1/3 md:w-full lg:flex flex-col justify-center items-center lg:pt-0 pt-4'>
          <form
            className='lg:w-full lg:max-w-md  bg-white p-6 rounded-md m-10 lg:m-0   '
            onSubmit={handleValidation}
          >
            <div className='w-full flex justify-center'>
              <img src={logo} alt='' className='w-28 ' />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-6 text-gray-600 '>
              Sign Up
            </h2>

            <Input
              type='text'
              name='name'
              handleOnchange={handleOnchage}
              placeholder='Enter Your Name'
              className={`w-full py-3  ${
                error.name ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.name && (
              <p className='text-red-500 text-sm mt-1'>{error.name}</p>
            )}

            <Input
              type='email'
              name='email'
              handleOnchange={handleOnchage}
              placeholder='Enter Your Email'
              className={`w-full py-3 mt-4 ${
                error.email ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.email && (
              <p className='text-red-500 text-sm mt-1'>{error.email}</p>
            )}

            <Input
              type='password'
              name='password'
              handleOnchange={handleOnchage}
              placeholder='Enter Your Password'
              className={`w-full py-3 mt-4 ${
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

            <Button
              type='submit'
              className='w-full py-3 mt-6 bg-indigo-500 text-white hover:bg-indigo-600'
              handleClick={handleSubmit}
            >
              Sign Up
            </Button>

            <div className='flex  items-center justify-center  gap-3 mt-3  '>
              <hr class='h-px my-2 lg:w-20 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
              <h1 className='text-gray-500'>or</h1>
              <hr class='h-px my-2 lg:w-20 w-full  bg-gray-200 border-0 dark:bg-gray-700'></hr>
            </div>

            <div className='mt-4 w-full'>
              <GoogleButton
                role='employer'
              ></GoogleButton>
            </div>

            <div className=' flex justify-center items-center mt-10 text-sm w-full'>
              <p className='text-gray-600'>
                By Signing in, you agree to our{' '}
                <a
                  href='##'
                  className='font-bold leading-loose text-blue-600 flex justify-center'
                >
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
