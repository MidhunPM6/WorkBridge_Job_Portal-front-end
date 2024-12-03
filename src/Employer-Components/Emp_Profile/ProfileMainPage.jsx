import React from 'react'

const ProfileMainPage = () => {
  return (
    <>
      <div className='flex place-content-center pt-20 font-poppins h-[87vh] bg-gradient-to-r from-violet-600 to-purple-600 '>
        <div className='flex flex-col w-[36vw] h-[69vh]  place-items-center pt-8 shadow-2xl shadow-purple-950 rounded-lg '>
          <h1 className=' text-2xl font-semibold text-white'>
            Company Profile
          </h1>
          <div className='w-32 h-32 mt-2 bg-gray-300 rounded-full'></div>
          <div>
            <span className='text-sm cursor-pointer text-white'>
              Change photo
            </span>
          </div>

          <div className='mt-4'>
            <input
              type='text'
              placeholder='Enter company name'
              className='p-1  outline-none rounded-md    '
            />
            <input
              type='text'
              placeholder='Enter recruiter name '
              className='ml-12 p-1   outline-none rounded-md   '
            />
          </div>
          <div className='mt-6  '>
            <input
              type='text'
              placeholder='Company location '
              className='p-1 outline-none rounded-md   '
            />
            <input
              type='text'
              placeholder='Important links '
              className='ml-12 p-1 outline-none rounded-md  '
            />
          </div>
          <div>
            <textarea
              name=''
              id=''
              placeholder='Description'
              className='w-[31.8vw] mt-4 py-4 p-1 text-black rounded-md outline-none'
            ></textarea>
          </div>
          <button className='mt-6  text-white bg-violet-900 p-3 px-10  hover:bg-violet-700 rounded-md shadow-2xl shadow-violet-500  '>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfileMainPage
