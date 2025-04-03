import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from '../../../assets/Heroimg.png'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'

const HomeMain = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  return (
    <>
      <div
        className='relative flex items-center lg:h-[85vh] w-full overflow-hidden lg:min-h-screen'
        id='home'
      >
        <img
          src={heroimg}
          alt='Hero'
          className='absolute inset-0 w-full min-h-[400px] h-full object-cover  transition-all duration-300 brightness-90 '
        />

        <div className='relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col items-start h-auto '>
          
          <p className='text-sm text-gray-700 lg:text-[13px] tracking-wider leading-loose mt-20 lg:mt-2 lg:w-[41vw] w-[50%] font-poppins font-medium '>
            {' '}
            <span className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-violet-600 bg-clip-text text-transparent'>
              WorkBridge Connecting opportunities with talent
            </span>
            <br />our platform bridges dreams
            and possibilities, helping job seekers find their path and companies
            build their future.
          </p>

          <div className='flex  gap-4 mb-10 mt-6'>
            {user?.name ? (
              <button
                onClick={() => navigate('/jobview')}
                className='group px-4 p-2 bg-white text-violet-900 rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
              >
                Find Jobs
                <div className='bg-violet-900 h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate('/employer')}
                  className='px-6 py-2 bg-violet-900 text-white rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                >
                  Employer
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className='group px-6 py-2 bg-white text-violet-900 rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                >
                  Job Seeker Login
                  <div className='bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500'></div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeMain
