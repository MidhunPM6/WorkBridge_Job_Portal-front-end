import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidation } from '../Authentication/Validation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import logo from '../../../assets/lightlogo.png'
import GoogleButton from '../../common/GoogleAuth/GoogleButton'
import useAuth from '../../../hooks/candidate/useAuth'
import loadingImg from '../../../assets/rotate.png'
import Input from '../../ui/Input'
import Button from '../../ui/Button'


axios.defaults.withCredentials = true

const Login = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { handleLogin } = useAuth()

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

  const submitLogin = async e => {
    e.preventDefault()

    if (!handleValidation(e)) return
    setLoading(true)

    const { success, response, error } = await handleLogin(loginForm)
    if (success) {
      toast.success(response.data.message, {
        onClose: () => navigate('/')
      })
    
    }else{
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='lg:flex lg:flex-row flex flex-col  min-h-screen  justify-center     '>
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
        <div className='  lg:w-full flex flex-col justify-around items-center p-7  bg-gradient-to-b from-violet-950 to-black shadow-2xl'>
          <div className='flex flex-col items-center'>
            <img src={logo} alt='' className='w-24' />
            <h1 className='text-white lg:text-3xl text-3xl lg:tracking-[5px]'>
              WorkBridge
            </h1>
          </div>

          <p className='flex flex-col lg:mt-0 m-3 justify-center items-center   text-gray-400 tracking-wider leading-7 text-center  '>
            <span>Log in to continue your job search.</span>
            Create an account to discover new job opportunities and grow your
            career.
          </p>
        </div>

        <div className='  lg:w-1/3 md:w-full lg:flex flex-col justify-center items-center lg:pt-0 pt-4 bg-slate-50 '>
          <div className='flex flex-col w-full h-full lg:mt-0 mt-5 items-center justify-center bg-white m-2 p-4 lg:p-8   shadow-md'>
            <h1 className='text-2xl lg:text-3xl font-bold text-gray-600 '>Welcome Back</h1>
            <form
              action=''
              className='flex flex-col place-items-center w-full p-10 lg:pt-6 gap-4  '
              onSubmit={submitLogin}
            >
              <Input
                handleOnchange={handleOnchange}
                name='email'
                placeholder='Enter your email'
                className={`${error.email ? `border-red-600` : ''}`}
              ></Input>
              {error.email && (
                <p className='text-red-600 ml-2 text-sm'>{error.email}</p>
              )}

              <Input
                handleOnchange={handleOnchange}
                name='password'
                type='password'
                placeholder='Enter your password'
                className={`${error.password ? `border-red-600` : ''}`}
              ></Input>
              {error.password && (
                <p className='text-red-600 ml-2 text-sm'>{error.password}</p>
              )}

              <div className='flex justify-end text-sm text-blue-800 cursor-pointer hover:underline m-2'>
                <h2>Forgotten password?</h2>
              </div>

              <div className=' w-full mt-4'>
                <Button
                  type='submit'
                  className='w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white'
                >
                  {loading ? (
                    <img
                      src={loadingImg}
                      alt='loading'
                      className='w-6 h-6 mx-auto animate-spin'
                    />
                  ) : (
                    'Login'
                  )}
                </Button>
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

              <div className='flex justify-center items-center  w-full mt-4'>
                <GoogleButton
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
