import React from 'react'
import { useState } from 'react'
import PostJob from './PostJob/PostJob'
import AllJobs from './AllJobs/AllJobs'
import MyJobs from './MyJobs/MyJobs'
import RecAppliction from './RecApplication/RecAppliction'


const SideMenu = () => {
  const [activeComponent, setActiveComponent] = useState('')
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Jobs':
        return <AllJobs />
      case 'Post Jobs':
        return <PostJob />
      case 'Posted Jobs':
        return <MyJobs />
      case 'Received Applications':
        return  <RecAppliction />
      default:
        return <AllJobs></AllJobs>
    }
  }

  return (
    <div className='pt-6 flex flex-col justify-center items-center bg-gray-50'>
  <h1 className='text-xl lg:text-2xl m-4 lg:m-2 font-semibold text-center px-4'>
    Easily manage your job posts, view all listings, and track applications in one place.
  </h1>
  <div className='h-[0.050rem] bg-slate-300 w-[80vw] lg:w-[30vw]'></div>
  
  <div className='w-full max-w-6xl'>
    <div className='flex flex-col  w-full justify-center items-center'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 m-4 lg:m-8 text-sm w-full lg:w-[60vw] '>
        <button
          onClick={() => setActiveComponent('Jobs')}
          className='flex items-center justify-center gap-2 focus:bg-green-200 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg w-full p-2 lg:p-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 lg:size-6 text-green-700'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
              className='fill-green-500'
            />
          </svg>
          <span className='whitespace-nowrap'>Jobs</span>
        </button>
        
        <button
          onClick={() => setActiveComponent('Post Jobs')}
          className='flex items-center justify-center gap-2 focus:bg-green-200 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg w-full p-2 lg:p-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 lg:size-6 text-green-700'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
              className='fill-green-500'
            />
          </svg>
          <span className='whitespace-nowrap'>List a Job</span>
        </button>
        
        <button
          onClick={() => setActiveComponent('Posted Jobs')}
          className='flex items-center justify-center gap-2 focus:bg-green-200 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg w-full p-2 lg:p-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 lg:size-6 text-green-700'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
              className='fill-green-500'
            />
          </svg>
          <span className='whitespace-nowrap'>My Jobs</span>
        </button>
        
        <button
          onClick={() => setActiveComponent('Received Applications')}
          className='flex items-center justify-center gap-2 focus:bg-green-200 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg w-full p-2 lg:p-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 lg:size-6 text-green-700'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
              className='fill-green-500'
            />
          </svg>
          <span className='whitespace-nowrap'>Received Apps</span>
        </button>
      </div>
      
    </div>
    
    <div className='bg-white border mb-10 rounded-md lg:pt-10 lg:min-h-[70dvh] flex flex-col items-center w-full'>
      {renderComponent()}
    </div>
  </div>
</div>
  )
}

export default SideMenu
