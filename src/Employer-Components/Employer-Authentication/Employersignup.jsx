import React, { useState } from 'react'
import googleimg from '../../assets/google.png'
import axios from 'axios'
import { axiosAuth } from '../../Axios/Axios-instance'




const Employersignup = () => {
  const [empLoginData, setEmpLoginData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleOnchage=(e)=>{
    const changeData={...empLoginData,[e.target.name]:e.target.value}
    setEmpLoginData(changeData)
  }
   
  const handleSubmit=async(e)=>{
    e.preventDefault()
     await axiosAuth.post

  }


  return (
    <>
      <div className=' flex flex-col items-center pt-10 h-[100vh] bg-violet-500 font-poppins text-white  '>
        <h1 className='text-3xl lg:text-4xl font-poppins font-semibold'>
          WorkBridge<span className='text-lg'>.employer</span>
        </h1>
        <div className='mt-20 place-items-center h-[62vh] w-[25vw] bg-violet-600 rounded-md shadow-2xl'>
          <h1 className='text-3xl mb-10 mt-10'>Sign Up</h1>
          <form action='' className='flex flex-col mt-5 text-black'>
            <input
              type='text'
              name="name"
              onChange={handleOnchage}
              placeholder='Enter Your Name '
              className='py-1 px-8 outline-none rounded-sm  focus: border-2 border-gray-200'
            />
            <input
              type='email'
              name='email'
              onChange={handleOnchage}
              placeholder='Enter Your Email'
              className='mt-6 py-1 px-8 outline-none rounded-sm  focus: border-2 border-gray-200'
            />
            <input
              type='password'
              name='password'
              onChange={handleOnchage}
              placeholder='Enter Your Password'
              className='mt-6 py-1 px-8 outline-none rounded-sm  focus: border-2 border-gray-200'
            />

            <div className='flex place-content-center'>
              <button
            type='submit'
            className='bg-violet-800 items-center mt-10 py-2 px-7 rounded-md hover:bg-violet-900 text-white '
          >
            Sign Up
          </button>
            </div>
          </form>

          <h1 className='text-gray-300 mb-4 mt-4'>or continue with google</h1>
          <div className='flex p-2 mt-2 border-2 border-gray-200 rounded-full  bg-white text-black'>
            <img src={googleimg} alt='' className='w-6 mr-2' />
            <p>Sign in with google</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Employersignup
