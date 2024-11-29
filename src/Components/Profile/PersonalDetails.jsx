import React, { useState } from 'react'

const PersonalDetails = () => {
  
  return (
    <>
      <div className='ml-64 h-[89.8vh] w-[82.2vw] font-poppins text-lg'>
        <div className='flex flex-col'>
          <form action='' className='mt-8 ml-32'>
            <h1 className='mb-3 text-2xl font-light text-violet-500'>
              Enter Your Personal Details
            </h1>
            <div className='flex text-gray-600' >
              <div className='flex flex-col '>
                <label htmlFor=''>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Firstname'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm  mt-2'
                />
              </div>
              <div className='ml-12 flex flex-col'>
                <label htmlFor=''>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Lastname'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2'
                />
              </div>
              
            </div>
            <div className='flex mt-7 text-gray-600'>
              <div className='flex flex-col'>
                <label htmlFor=''>Job Title </label>
                <input
                  type='text'
                  placeholder='Enter your position'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 '
                />
              </div>
              <div className='ml-12 flex flex-col'>
                <label htmlFor=''>Years of experience</label>
                <input
                  type='number'
                  placeholder='Enter your experience'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2'
                />
              </div>
            </div>
            <div className='flex mt-7 text-gray-600' >
              <div className='flex flex-col'>
                <label htmlFor=''>Mobile</label>
                <input
                  type='text'
                  placeholder='Enter Mobile'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 '
                />
              </div>
              <div className='ml-12 flex flex-col '>
                <label htmlFor=''>Email ID</label>
                <input
                  type='email'
                  placeholder='Enter your email id'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2'
                />
              </div>
            </div>
            <div className='flex mt-7 text-gray-600'>
              <div className='flex flex-col'>
                <label htmlFor=''>Location</label>
                <input
                  type='text'
                  placeholder='Current location'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 '
                />
              </div>
              <div className='ml-12 flex flex-col '>
                <label htmlFor='gender'>Gender</label>
                <div className='flex mt-3'>
                <label htmlFor="male" className='pr-2'>Male</label>
                <input type="radio" name="gender" id="male"/>
                <label htmlFor="female" className='pl-2 pr-2'> Female</label>
                <input type="radio" name="gender" id="female" />

                </div>
              </div>
            </div>
            
            <div className='flex flex-col mt-5'>
              <label htmlFor=''>About yourself</label>
              <textarea
                name=''
                id=''
                placeholder='Tell us about yourself...'
                className='mt-2 outline-none border border-gray-400 rounded-sm py-5 text-sm mr-12'
              ></textarea>
            </div>
            <div>
              <button
                type='button'
                className=' mt-4 bg-violet-600 text-white py-2 p-3 rounded-md '
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PersonalDetails
