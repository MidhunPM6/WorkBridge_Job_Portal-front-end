import React from 'react'
import { useState } from 'react'

const SecuritySetting = () => {
    const [first,setFirst]=useState('')
  return (
    <div className='w-full text-black flex flex-col  items-center pt-10 lg:h-auto h-[60vh] lg:m-0 m-16'>
      <div>
        <h1 className='text-2xl font-semibold'>Security Settings</h1>
      </div>
      <div className='mt-10 flex flex-col w-full lg:w-auto'>
        <form action='' className=' '>
          <div className='flex flex-col w-full gap-2 text-sm'>
            <label htmlFor='' className='text-gray-600 '>
              Change the Username
            </label>
            <input
              type='text'
              className=' outline-none bg-gray-50 p-[6px] lg:w-[18vw] border focus:border-gray-400 rounded-smF shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] transition-all duration-300'
              placeholder='Enter a new username'
            />
          </div>

          <div className='flex flex-col gap-2 text-sm mt-4'>
            <label htmlFor='' className='text-gray-600 '>
              Change the Password
            </label>
            <input
              type='text'
              className=' outline-none bg-gray-50 p-[6px] lg:w-[18vw] border focus:border-gray-400 rounded-smF shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] transition-all duration-300'
              placeholder='Enter the current password '
            />
            <input
              type='text'
              className=' outline-none bg-gray-50 mt-2 p-[6px] lg:w-[18vw] border focus:border-gray-400 rounded-smF shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] transition-all duration-300'
              placeholder='Enter a new Password '
            />
          </div>
    
    <p>{first}</p>
          <div className='w-full items-center justify-center mt-8'>
            <button className='bg-violet-900 w-full hover:bg-violet-800 text-white p-1 '>Save changes </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SecuritySetting
