import React, { useContext, useState } from 'react'
import googleimg from '../../assets/google.png'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'
import { loginValidation } from './Validation'
import {EmpAuth} from '../../Context/EmployerUsername'





const Employerlogin = () => {

  const navigate=useNavigate()
  const [empLoginForm,setEmpLoginForm]=useState({
    email:"",
    password:"",
  })
  const [error,setError]=useState("")

  const {setEmpUsername}=useContext(EmpAuth)



  const handleOnchange=(e)=>{
    const changeData ={...empLoginForm,[e.target.name]: e.target.value}
    setEmpLoginForm(changeData)
  }




  const handleSbumit=async(e)=>{
    e.preventDefault()
    if (!handleValidation(e)) return
    try {
      const response=await axiosAuth.post('/emplogin',empLoginForm)

      setEmpUsername(response.data.username) 
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
      <div className=' flex flex-col items-center pt-10 h-[100vh] bg-gradient-to-r from-violet-800 to-violet-200 font-poppins  text-white '>
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
        <h1 className='text-3xl lg:text-4xl font-poppins font-semibold'>
          WorkBridge<span className='text-lg'>.employer</span>
        </h1>
        <div className='mt-20 place-items-center h-[62vh] w-[25vw] bg-violet-600 rounded-md shadow-2xl'>
          <h1 className='text-3xl mb-10 mt-10 '>Login</h1>
          <form action='' className='flex flex-col mt-5 items-center   text-black' onSubmit={handleValidation}>
            <input
              type='email'
              name='email'
              onChange={handleOnchange}
              placeholder='Enter Your Email'
              className={`py-1 px-8 outline-none rounded-sm   ${error.email ? "border-2 border-red-400": "border-2 border-gray-200"}`}
              
            />
            {error.email && <p className='text-violet-200'>{error.email}</p>}
            <input
              type='Password'
              name='password'
              onChange={handleOnchange}
              placeholder='Enter Your Password'
              className={`mt-6 py-1 px-8 outline-none rounded-sm   ${error.email ? "border-2 border-red-400": "border-2 border-gray-200"}`}

            />
            {error.password && <p className='text-violet-200'>{error.password}</p>}
          

          <h1 onClick={()=>navigate('/employersignup')} className='mt-8 mb-3 text-white cursor-pointer text-sm'>Create an Account</h1>
          <div className='mb-4'>
            
          <button
            type='submit'
            className='bg-violet-800 items-center py-2 px-7 rounded-md hover:bg-violet-900 text-white '
            onClick={handleSbumit}
          >
            Login
          </button>
              
              
          </div>
          <h1 className='text-gray-300 mb-2 '>or continue with google</h1>
          <div className="flex p-2 mt-2 border-2 border-gray-200 rounded-full  bg-white">
                <img src={googleimg} alt="" className="w-6 mr-2" />
                <p>Sign in with google</p>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Employerlogin
