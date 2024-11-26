import React, { useState } from 'react'
import googleimg from '../../assets/google.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'
import { useNavigate } from 'react-router-dom'
import { registerValidation } from './Validation'





const Employersignup = () => {
  const navigate=useNavigate()
  const [empSignupform, setEmpLoginData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const[error,setError]=useState('')

  const handleOnchage=(e)=>{
    const changeData={...empSignupform,[e.target.name]:e.target.value}
    setEmpLoginData(changeData)
  }

   //Connecting Axios
  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    if (!handleValidation(e)) return
    try{
    const response=await axiosAuth.post('/empregister',empSignupform)
      console.log(response);
      
      toast.success('Sign Up Successfull',{
        onClose:()=>navigate('/employerlogin')
      })

       }catch(error){
        toast.error(error.response?.data?.message || "Server Error")
    }


  }

  const handleValidation=(e)=>{
    e.preventDefault()
    const errors=registerValidation(empSignupform)
    setError(errors)
    return Object.keys(errors).length === 0
  }

  


  return (
    <>
      <div className=' flex flex-col items-center pt-10 h-[100vh] bg-violet-500 font-poppins text-white  '>
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
        <div className='mt-20 place-items-center h-[70vh] w-[25vw] bg-violet-600 rounded-md shadow-2xl'>
          <h1 className='text-3xl mb-10 mt-10'>Sign Up</h1>
          <form action='' className='flex flex-col mt-5 text-black items-center' onSubmit={handleValidation}>
            <input
              type='text'
              name="name"
              onChange={handleOnchage}
              placeholder='Enter Your Name '
              className={`py-1 px-8 outline-none rounded-sm  ${error.name ? "border-2 border-red-400" : "border-2 border-gray-200"} ` }
            />
              {error.name && <p className='text-violet-200'>{error.name}</p>}

          
            <input
              type='email'
              name='email'
              onChange={handleOnchage}
              placeholder='Enter Your Email'
              className={`mt-6 py-1 px-8 outline-none rounded-sm  ${error.name ? "border-2 border-red-400" : "border-2 border-gray-200"} ` }

            />
            {error.email && <p className='text-violet-200'>{error.email}</p>}
            <input
              type='password'
              name='password'
              onChange={handleOnchage}
              placeholder='Enter Your Password'
              className={`mt-6 py-1 px-8 outline-none rounded-sm  ${error.name ? "border-2 border-red-400" : "border-2 border-gray-200"} ` }

            />
            {error.password && <p className='text-violet-200'>{error.password}</p>}
            
            <h1 onClick={()=>navigate('/employerlogin')}className='mt-5 mb-3  text-white text-sm cursor-pointer hover:text-gray-200'>Click here to login</h1>
            <div className='flex place-content-center'>
              <button
            type='submit'
            className='bg-violet-800 items-center py-2 px-7 rounded-md hover:bg-violet-900 text-white '
            onClick={handleSubmit}
          >
            Sign Up
          </button>
            </div>
            <h1 className='text-gray-300 mb-4 mt-4'>or continue with google</h1>
          <div className='flex p-2 mt-2 border-2 border-gray-200 rounded-full  bg-white text-black'>
            <img src={googleimg} alt='' className='w-6 mr-2' />
            <p>Sign in with google</p>
            
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Employersignup
