import React from 'react'

const PostJob = () => {
  return (
    <>
      <div className='flex justify-center pt-10 min-h-screen bg-purple-200 bg-opacity-25 font-poppins'>
        <div className=' max-w-xl h-[73vh] p-6 rounded-lg shadow-lg bg-gradient-to-r from-violet-600 to-purple-600'>
          <h1 className='text-3xl font-semibold text-white text-center mb-6'>
            Post a Job
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Job Title'
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                placeholder='Company Name'
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                placeholder='Location (City, State)'
                className='p-3 w-full rounded-md outline-none'
              />
            </div>

            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Salary Range'
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                placeholder='Job Type (e.g., Full-time, Part-time)'
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                placeholder='Application Link or Email'
                className='p-3 w-full rounded-md outline-none'
              />
            </div>
          </div>

          <textarea
            placeholder='Job Description'
            className='w-full mt-6 p-3 rounded-md outline-none'
            rows='5'
          ></textarea>

       
          <div className='flex justify-center mt-6'>
            <button className='px-6 py-2 text-white bg-violet-900 rounded-md hover:bg-violet-800 shadow-lg shadow-violet-500'>
              Post Job
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostJob
