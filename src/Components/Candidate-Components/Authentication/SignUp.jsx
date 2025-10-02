import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../../assets/lightlogo.png'
import GoogleButton from '../../common/GoogleAuth/GoogleButton'
import useAuth from '../../../hooks/candidate/useAuth'
import loadingImg from '../../../assets/rotate.png'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const SignUp = () => {
  const [error, setError] = useState({})
  const navigate = useNavigate()
  const { handleSignup, loading } = useAuth()

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
    const { success, response, error } = await handleSignup(formData)
    if (success) {
      toast.success('Sign Up Successful', {
        onClose: () => {
          navigate('/login')
        },
        autoClose: 1000
      })
    } else {
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className=' lg:flex-row  flex flex-col justify-center min-h-screen '>
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
        <div className='lg:w-full flex flex-col justify-around p-7 w-full bg-gradient-to-b from-violet-950 to-black shadow-2xl'>
          <div className='flex flex-col items-center'>
            <img src={logo} alt='' className='w-24' />
            <h1 className='text-white  lg:text-3xl text-3xl lg:tracking-[5px]'>
              WorkBridge
            </h1>
          </div>
          <p className='lg:flex lg:flex-col lg:mt-0 m-3  items-center text-center text-gray-400 tracking-wider leading-7  '>
            <span className=''>Join WorkBridge Today!</span>
            Create an account to discover new job opportunities and grow your
            career.
          </p>
        </div>

        <div className=' lg:w-1/3 lg:flex flex-col justify-center items-center  lg:pt-0 pt-4'>
          <div className='flex flex-col w-full h-full lg:mt-0 mt-5 items-center justify-center bg-white m-2 p-4 lg:p-8   shadow-md'>
            <h1 className='text-2xl lg:text-3xl font-bold text-gray-600 '>Sign Up </h1>
            <form
              action=''
              className='flex flex-col place-items-center w-full p-10 lg:pt-6 gap-3  '
              onSubmit={handleSubmit}
            >
              <Input
                type='text'
                name='name'
                placeholder='Enter your name'
                handleOnchange={handleChange}
                className={`  w-full ${error.email ? `border-red-600` : ''}`}
              />
              {error.name && (
                <p className='text-red-600 ml-2 text-sm'>{error.name}</p>
              )}

              <Input
                type='email'
                name='email'
                placeholder='Enter your email'
                handleOnchange={handleChange}
                className={`   w-full ${
                  error.password ? `border-red-600` : ''
                }`}
              />
              {error.email && (
                <p className='text-red-600 ml-2 text-sm'>{error.email}</p>
              )}

              <Input
                type='password'
                name='password'
                placeholder='Enter a new password'
                handleOnchange={handleChange}
                className={`  w-full  ${
                  error.password ? `border-red-600` : ''
                }`}
              />
              {error.password && (
                <p className='text-red-600 ml-2 text-sm'>{error.password}</p>
              )}

              <div className='w-full mt-4'>
                <Button
                  type='submit'
                  className='w-full py-3  
             bg-indigo-500 text-white hover:bg-indigo-600'
                >
                  {loading ? (
                    <img
                      src={loadingImg}
                      alt='loading'
                      className='w-6 h-6 mx-auto'
                    />
                  ) : (
                    'Sign Up'
                  )}
                </Button>
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
              <div className='w-full  mt-4 '>
                <GoogleButton role='candidate' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
