import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import logo from '../../../assets/logo.png'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const user = useSelector(state => state.user.user)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-around items-center p-6 shadow-md h-auto lg:h-20 lg:sticky top-0 z-50 bg-white '>
        <div className='flex flex-col lg:flex-row  items-center w-full lg:w-auto'>
          <div className=' flex items-center '>
            <img src={logo} alt='' className='w-28 ' />
          </div>

          <div className='hidden lg:flex space-x-10 ml-0 lg:ml-6 mt-4 lg:mt-0 text-gray-500 text-sm '>
            <NavHashLink
              to='/#home'
              className='group  hover:text-gray-700 place-content-center  '
              smooth
            >
              Home
              <div className='bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500'></div>
            </NavHashLink>
            <NavHashLink
              to='/#service'
              className='group hover:text-gray-700 place-content-center  '
              smooth
            >
              Service
              <div className='bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500'></div>

              
            </NavHashLink>
            <NavHashLink
              to='/#about'
              className=' group hover:text-gray-700 place-content-center  '
              smooth
            >
              About Us
              <div className='bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500'></div>

            </NavHashLink>
            <NavHashLink
              to='/#contact'
              className='group hover:text-gray-700 place-content-center  '
              smooth
            >
              Contact Us
              <div className='bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500'></div>

            </NavHashLink>
          </div>
        </div>

        <div className='flex justify-around w-full lg:w-auto mt-4 lg:mt-0'>
          <div className='  flex flex-row  mr-4 justify-center items-center '>
            {user?.name && (
              <div>
                <button
                  onClick={() => navigate('/profile')}
                  className='flex  h-8 justify-center items-center  rounded-sm  text-sm px-3 bg-blue-50 text-blue-500 hover:bg-blue-100 gap-2 transition-all duration-300'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-6 '
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {user.name}
                </button>
              </div>
            )}
          </div>
          <div className='pr-0 lg:pr-3 font-poppins flex items-center'>
            <button className='text-lg lg:p-2 p-4 text-black py-6 lg:px-4 rounded-full '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 '
              >
                <path d='M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z' />
                <path d='M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z' />
              </svg>
            </button>
          </div>
          <div className='flex justify-center items-center'>
            <svg
              className='cursor-pointer'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              id='Headphones-1--Streamline-Ultimate'
              height='24'
              width='24'
            >
              <desc>
                Headphones 1 Streamline Icon: https://streamlinehq.com
              </desc>
              <g id='Headphones-1--Streamline-Ultimate.svg'>
                <path
                  d='M6.69 13.69c-0.29 -0.18 -0.59 -0.37 -0.89 -0.59a0.5 0.5 0 0 0 -0.8 0.4v10a0.5 0.5 0 0 0 0.85 0.35c0.43 -0.43 0.82 -0.76 1.16 -1.05 0.83 -0.7 1.49 -1.25 1.49 -2.3V16c0 -1.17 -0.92 -1.75 -1.81 -2.31Z'
                  fill='#000000'
                  stroke-width='1'
                ></path>
                <path
                  d='M22.18 13.09a0.25 0.25 0 0 1 -0.18 -0.24V10a10 10 0 0 0 -20 0v2.85a0.25 0.25 0 0 1 -0.18 0.24A2.51 2.51 0 0 0 0 15.5v6A2.5 2.5 0 0 0 2.5 24h1a0.5 0.5 0 0 0 0.5 -0.5V10a8 8 0 0 1 16 0v13.5a0.5 0.5 0 0 0 0.5 0.5h1a2.5 2.5 0 0 0 2.5 -2.5v-6a2.51 2.51 0 0 0 -1.82 -2.41Z'
                  fill='#000000'
                  stroke-width='1'
                ></path>
                <path
                  d='M18.2 13.1c-0.3 0.22 -0.6 0.41 -0.89 0.59 -0.89 0.56 -1.81 1.14 -1.81 2.31v4.5c0 1.05 0.66 1.6 1.49 2.3 0.34 0.29 0.73 0.62 1.16 1.05a0.5 0.5 0 0 0 0.85 -0.35v-10a0.5 0.5 0 0 0 -0.8 -0.4Z'
                  fill='#000000'
                  stroke-width='1'
                ></path>
              </g>
            </svg>
          </div>

          <div className='lg:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-violet-600 text-3xl focus:outline-none'
            >
              &#9776;
            </button>
          </div>
        </div>

        <div
          className={`flex gap-4 mt-6 lg:hidden  ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <NavHashLink
            to='/#home'
            className='text-sm hover:text-violet-600 place-content-center'
            smooth
          >
            Home
          </NavHashLink>
          <NavHashLink
            to='/#service'
            className='text-sm hover:text-violet-600 place-content-center'
            smooth
          >
            Service
          </NavHashLink>
          <NavHashLink
            to='/#about'
            className='text-sm hover:text-violet-600 place-content-center'
            smooth
          >
            About Us
          </NavHashLink>
          <NavHashLink
            to='/#contact'
            className='text-sm hover:text-violet-600 place-content-center'
            smooth
          >
            Contact Us
          </NavHashLink>
        </div>
      </div>
    </>
  )
}

export default NavBar
