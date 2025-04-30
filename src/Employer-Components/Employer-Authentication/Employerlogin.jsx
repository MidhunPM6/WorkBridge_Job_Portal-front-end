import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginValidation } from './Validation'
import {EmpAuth} from '../../Context/EmployerUserDetails'
import authPoster from '../../assets/authimg.png'
import logo from '../../assets/lightlogo.png'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'




const Employerlogin = () => {

  const navigate=useNavigate()
  const [empLoginForm,setEmpLoginForm]=useState({
    email:"",
    password:"",
  })
  const [error,setError]=useState("")

  const {setEmpUserDetails}=useContext(EmpAuth)



  const handleOnchange=(e)=>{
    const changeData ={...empLoginForm,[e.target.name]: e.target.value}
    setEmpLoginForm(changeData)
  }




  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!handleValidation(e)) return
    try {
      const response=await axios.post('/emplogin',empLoginForm)

      setEmpUserDetails(response.data.user) 
      console.log(response)

      if(response.status===200){
         toast.success("Login successfull",{
          onClose:()=>navigate('/employer')
        
         })
        
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server Error")
    }

  }



  const handleValidation=(e)=>{
    e.preventDefault()
    const errors=loginValidation(empLoginForm)
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
            className='lg:w-full lg:max-w-md  bg-white p-6 rounded-md m-10 lg:m-0  '
            onSubmit={handleValidation}
          >

            <div className='w-full flex justify-center'>

          <img src={logo} alt='' className='w-28 ' />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-6 text-gray-600 '>
              Login
            </h2>

           
            {error.name && (
              <p className='text-red-500 text-sm mt-1'>{error.name}</p>
            )}

            <input
              type='email'
              name='email'
              onChange={handleOnchange}
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
              onChange={handleOnchange}
              placeholder='Enter Your Password'
              className={`lg:w-full w-full py-2 text-sm  mt-4 rounded-sm p-4 focus:border-gray-500 transition-all duration-300 border  outline-none ${
                error.password ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error.password && (
              <p className='text-red-500 text-sm mt-1'>{error.password}</p>
            )}

            <p
              onClick={() => navigate('/employersignup')}
              className='mt-4 text-sm text-blue-600 cursor-pointer hover:underline text-center'
            >
              Click here to Sign Up
            </p>

            <button
              type='submit'
              className='w-full mt-4 text-sm bg-violet-900 text-white py-2 rounded-sm hover:bg-violet-950 transition-all duration-300'
              onClick={handleSubmit}
            >
              Login
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
              <p className='text-gray-600'>Need help? Contact support <a href="" className='font-bold leading-loose text-blue-600'>here</a></p>
            </div>
          </form>
        </div>
      </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default Employerlogin
