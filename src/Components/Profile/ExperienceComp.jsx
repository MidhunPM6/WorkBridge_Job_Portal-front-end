import React from 'react'

const ExperienceComp = () => {
  return (
    <div className='ml-64 h-[89.8vh] w-[82.2vw] font-poppins text-md'>
      <div className='flex flex-col'>
        <form action='' className='mt-8 ml-32'>
          <div>
            <h1 className='mb-3 text-2xl font-light text-violet-500'>
              Experience
            </h1>
          </div>
          <div className='flex text-gray-600'>
            <div className='flex flex-col '>
              <label htmlFor=''>Company Name</label>
              <input
                type='text'
                placeholder='Your company'
                className=' outline-none border border-gray-400 py-1 px-12 rounded-sm  mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
              />
            </div>
            <div className='ml-12 flex flex-col'>
              <label htmlFor=''>Designation</label>
              <input
                type='text'
                placeholder='Enter your designation'
                className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
              />
            </div>
          </div>

          <div className='flex text-gray-600 mt-7'>
            <div className='flex flex-col '>
              <label htmlFor=''>Start Date</label>
              <input
                type='date'
                placeholder='Your company'
                className=' outline-none border border-gray-400 py-1 px-12 rounded-sm  mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
              />
            </div>
            <div className='ml-[7vw] flex flex-col'>
              <label htmlFor=''>End date</label>
              <input
                type='date'
                placeholder='Enter your designation'
                className=' outline-none border border-gray-400 py-1 px-12 rounded-sm mt-2 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
              />
            </div>
          </div>
          <div className='flex flex-col mt-7 text-gray-600'>
            <label htmlFor=''>Description</label>
            <textarea
              name=''
              id=''
              className='w-[47.8vw] outline-none border border-gray-400 mt-2 py-4 hover:border-violet-600 focus:border-violet-800 focus:shadow-md'
            ></textarea>
          </div>
          <div>
            <button
              type='button'
              className=' flex mt-2 pt-2 text-md text-sky-600 hover:text-sky-700'
            >
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                  clipRule='evenodd'
                />
              </svg>
              Add More
            </button>
          </div>
          <div>
            <button
              type='button'
              className=' mt-4 bg-violet-600 text-white py-2 p-3 rounded-md hover:bg-violet-700'
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExperienceComp
