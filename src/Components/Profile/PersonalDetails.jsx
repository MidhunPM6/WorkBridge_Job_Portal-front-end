import React, { useState } from 'react'

const PersonalDetails = () => {
  const [file, setfile] = useState('')

  return (
    <>
      <div className='ml-64 h-[89.8vh] w-[82.2vw] font-poppins text-md'>
        <div className='flex flex-col'>
          <form action='' className='mt-8 ml-32'>
            <h1 className='mb-3 text-2xl font-light text-violet-500'>
              Enter Your Personal Details
            </h1>

            <div className='flex text-gray-600'>
              <div className='flex flex-col '>
                <label htmlFor=''>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Firstname'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm  mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
                />
              </div>
              <div className='ml-12 flex flex-col'>
                <label htmlFor=''>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Lastname'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
                />
              </div>
              <div className='flex place-content-center items-center w-36 h-36 bg-black -mt-10 ml-20 rounded-full overflow-hidden '>
                {file ? (
                  
                    <div>
                      {' '}
                      <img
                        src={file && URL.createObjectURL(file)}
                        alt=''
                        className='w-auto '
                      />
                        <button className='absolute  px-4 py-2 text-xs ml-3 '>Change photo</button>
                        
                    </div>
                  
                ) : (
                  <label
                    for='uploadFile1'
                    class='bg-white text-gray-500 font-semibold text-base rounded-full h-36 w-36 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300  mx-auto font-[sans-serif]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-11 mb-2 fill-gray-500'
                      viewBox='0 0 32 32'
                    >
                      <path
                        d='M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z'
                        data-original='#000000'
                      />
                      <path
                        d='M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z'
                        data-original='#000000'
                      />
                    </svg>
                    Upload file
                    <input
                      type='file'
                      id='uploadFile1'
                      class='hidden'
                      onChange={e => setfile(e.target.files[0])}
                    />
                    <p class='text-xs font-normal text-gray-400 mt-2'>
                      PNG, JPG,and GIF
                    </p>
                  </label>
                  
                )}
                
            </div>
            
              </div>
            <div className='flex text-gray-600'>
              <div className='flex flex-col'>
                <label htmlFor=''>Job Title </label>
                <input
                  type='text'
                  placeholder='Enter your position'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md '
                />
              </div>
              <div className='ml-12 flex flex-col'>
                <label htmlFor=''>Years of experience</label>
                <input
                  type='number'
                  placeholder='Enter your experience'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
                />
              </div>
            </div>
            <div className='flex mt-7 text-gray-600'>
              <div className='flex flex-col'>
                <label htmlFor=''>Mobile</label>
                <input
                  type='text'
                  placeholder='Enter Mobile'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md '
                />
              </div>
              <div className='ml-12 flex flex-col '>
                <label htmlFor=''>Email ID</label>
                <input
                  type='email'
                  placeholder='Enter your email id'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
                />
              </div>
            </div>
            <div className='flex mt-7 text-gray-600'>
              <div className='flex flex-col'>
                <label htmlFor=''>Location</label>
                <input
                  type='text'
                  placeholder='Current location'
                  className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md '
                />
              </div>
              <div className='ml-12 flex flex-col '>
                <label htmlFor='gender'>Gender</label>
                <div className='flex mt-3'>
                  <label htmlFor='male' className='pr-2'>
                    Male
                  </label>
                  <input type='radio' name='gender' id='male' />
                  <label htmlFor='female' className='pl-2 pr-2'>
                    {' '}
                    Female
                  </label>
                  <input type='radio' name='gender' id='female' />
                </div>
              </div>
            </div>

            <div className='flex flex-col mt-5'>
              <label htmlFor=''>About yourself</label>
              <textarea
                name=''
                id=''
                placeholder='Tell us about yourself...'
                className='mt-2 outline-none border border-gray-400 rounded-sm py-5 text-sm mr-12 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
              ></textarea>
            </div>
            <div>
              <button
                type='button'
                className=' mt-4 bg-violet-600 text-white py-2 p-3 rounded-md hover:bg-violet-700 '
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
