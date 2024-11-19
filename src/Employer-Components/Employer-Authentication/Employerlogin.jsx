import React from 'react'
import googleimg from '../../assets/google.png'
const Employerlogin = () => {
  return (
    <>
      <div className=' flex flex-col items-center pt-10 h-[100vh] bg-violet-500 font-poppins  text-white '>
        <h1 className='text-3xl lg:text-4xl font-poppins font-semibold'>
          WorkBridge<span className='text-lg'>.employer</span>
        </h1>
        <div className='mt-20 place-items-center h-[55vh] w-[25vw] bg-violet-600 rounded-md shadow-2xl'>
          <h1 className='text-3xl mb-10 mt-10 '>Login</h1>
          <form action='' className='flex flex-col mt-5 items-center   text-black'>
            <input
              type='email'
              placeholder='Enter Your Email'
              className='py-1 px-8 outline-none rounded-sm  focus: border-2 border-gray-200'
            />
            <input
              type='Password'
              placeholder='Enter Your Password'
              className='mt-4 py-1 px-8 outline-none rounded-sm  focus: border-2 border-gray-200'
            />
          
          <div className='mb-4'>
          <button
            type='submit'
            className='bg-violet-800 items-center mt-10 py-2 px-7 rounded-md hover:bg-violet-900 text-white '
          >
            Login
          </button>
              
              
          </div>
          <h1 className='text-gray-300 mb-2'>or continue with google</h1>
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
