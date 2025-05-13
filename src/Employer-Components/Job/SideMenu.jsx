import React from 'react'
import { useState } from 'react'
import PostJob from './PostJob/PostJob'

const SideMenu = () => {
  const [activeComponent, setActiveComponent] = useState('')
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Jobs':
        return 'this is jobs '
      case 'Post Jobs':
        return <PostJob />
      case 'Received Applications':
        return 'this recevided applications'
      case 'Posted Jobs':
        return 'this is posted jobs'
      default:
        return 'this is jobs'
    }
  }

  return (
    <div className=' pt-20 flex flex-col  justify-center items-center  '>
      <h1 className='lg:text-2xl text-xl lg:m-2 m-4 font-semibold'>
        Easily manage your job posts, view all listings, and track applications
        in one place.
      </h1>
      <div className='h-[0.050rem]  bg-slate-300 lg:w-[30vw] w-[60vw]'></div>
      <div>
        <div className='lg:flex-row flex flex-col w-full justify-center items-center '>
          <div className='flex mt-6 gap-6 m-8 text-sm    lg:w-[60vw] '>
            <button
              onClick={() => setActiveComponent(' Jobs')}
              className='flex lg:mt-4 items-center justify-center lg:gap-2 focus:bg-green-300 bg-green-100 hover:bg-green-200  text-green-700 rounded-sm w-full p-2  '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='lg:size-6  size-6 text-green-700'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                  className='fill-green-500 '
                />
              </svg>
              Jobs
            </button>
            <button
              onClick={() => setActiveComponent('Post Jobs')}
              className='flex lg:mt-4 items-center lg:gap-2 focus:bg-green-300 bg-green-100 hover:bg-green-200  text-green-700 rounded-sm w-full p-2  '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='lg:size-6  size-6 text-green-700'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                  className='fill-green-500 '
                />
              </svg>
              Post Jobs
            </button>
            <button
              onClick={() => setActiveComponent(' Posted Jobs')}
              className='flex lg:mt-4 items-center focus:bg-green-300 lg:gap-2 bg-green-100 hover:bg-green-200  text-green-700 rounded-sm w-full p-2  '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='lg:size-6  size-6 text-green-700'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                  className='fill-green-500 '
                />
              </svg>
              Posted Jobs
            </button>
            <button
              onClick={() => setActiveComponent(' Recevided Applications')}
              className='flex lg:mt-4 items-center lg:gap-2 focus:bg-green-300  bg-green-100 hover:bg-green-200  text-green-700 rounded-sm w-full p-2  '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='lg:size-6  size-6 text-green-700'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                  className='fill-green-500 '
                />
              </svg>
              Recevied Applications
            </button>
          </div>
        </div>
        <div className=' p-6 rounded-sm bg-gray-50 pt-10 ml-6 lg:w-[68vw]  lg:h-[85vh] h-auto flex justify-center'>
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default SideMenu
