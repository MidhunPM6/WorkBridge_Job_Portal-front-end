import React, { useState } from 'react'

const PersonalDetails = () => {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
      <div className=' h-auto w-auto flex flex-col justify-center items-center '>
        <div className='flex justify-center'>
          <h1 className='text-xl font-semibold'>Personal Details</h1>
        </div>
        <div className='flex flex-col text-sm pt-3'>
          <form action=''>
            <div className='flex justify-start items-center mt-4 gap-6 text-xs '>
              {
                preview ?
                <div className='w-32 h-32  overflow-hidden rounded-md shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)] border-4 border-gray-100'>
                <img src={preview} alt='' className=' object-cover ' />
              </div>
                 :
             
                 <div className=' w-32 h-32 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.3)] rounded-md flex justify-center items-center border-4 border-gray-100'>
                   <h1>Profile Picture</h1>
                 </div>
              }
              <div>
                <div >
                
                <label
                  for='uploadFile1'
                  class='flex items-center gap-1 text-xm bg-gray-800 hover:bg-gray-700 text-white px-1 h-7 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-4  fill-white inline'
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
                  Upload Photo
                  <input type='file' id='uploadFile1' class='hidden' onChange={handleFileChange} />
                </label>
                {
                  preview &&
                <button className='mt-3 w-full p-1 rounded shadow-xl border border-gray-600 hover:bg-slate-100'>
                   Save
                </button>
                }
                </div>
              </div>
            </div>
            <div className='flex gap-5 mt-4 '>
              <input
                type='text'
                placeholder='Enter your name'
                className='py-2 px-3  border border-gray-200  outline-none rounded  bg-gray-50 shadow-md' 
              />
              <input
                type='text'
                placeholder='Mobile number'
                className='py-2 px-3  border border-gray-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex gap-5 mt-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='py-2 px-3  border border-gray-200 outline-none rounded  bg-gray-50 shadow-md'
              />
              <input
                type='text'
                placeholder='Enter current location'
                className='py-2 px-3  border border-gray-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex gap-5 mt-4'>
              <input
                type='text'
                placeholder='Enter Designation'
                className='py-2 px-3  border border-gray-200  outline-none rounded  bg-gray-50 shadow-md'
              />
              <input
                type='text'
                placeholder='LinkedIn Profile (optional)'
                className='py-2 px-3  border border-gray-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex gap-5 mt-4'>
              <input
                type='text'
                placeholder='Portfolio Website (optional)'
                className='py-2 px-3  border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>

            <div className='flex flex-col gap-5 mt-4'>
              <textarea
                type='text'
                placeholder='Briefly describe your background, skills, and career goals...'
                className=' w-full border h-20 max-h-32 border-slate-200  outline-none rounded shadow-md p-2'
              />
            </div>
            <div className='flex flex-col justify-center  items-center mt-3'>
              
              <button
                type='button'
                className=' bg-violet-900 text-white mt-2 text-md px-6 p-1 rounded shadow-xl hover:bg-violet-800  '
              >
                Save
              </button>
              <div>
                <p className='text-xs mt-2 text-gray-600'>Make sure all your details are accurate before saving</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PersonalDetails
