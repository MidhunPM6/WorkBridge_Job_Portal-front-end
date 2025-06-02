import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import logo from '../../../assets/logo.png'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 const user = useSelector(state => state?.user?.user ?? null);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className='bg-white border-b border-gray-100 px-6 py-4 shadow-sm  top-0 z-50'>
  <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between'>
    {/* Logo and Navigation */}
    <div className='flex items-center justify-between w-full lg:w-auto'>
      <div className='flex items-center'>
        <img src={logo} alt='Company Logo' className='w-32 lg:w-28' />
      </div>

      {/* Mobile Menu Button */}
      <div className='lg:hidden flex items-center'>
        <button
          onClick={toggleMenu}
          className='text-gray-700 hover:text-violet-600 focus:outline-none transition-colors'
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
    </div>

    {/* Desktop Navigation */}
    <nav className='hidden lg:flex space-x-8 ml-10'>
      <NavHashLink
        to='/#home'
        className='text-gray-600 hover:text-violet-700 font-medium transition-colors relative group'
        smooth
      >
        Home
        <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-700 group-hover:w-full transition-all duration-300'></div>
      </NavHashLink>
      <NavHashLink
        to='/#service'
        className='text-gray-600 hover:text-violet-700 font-medium transition-colors relative group'
        smooth
      >
        Service
        <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-700 group-hover:w-full transition-all duration-300'></div>
      </NavHashLink>
      <NavHashLink
        to='/#about'
        className='text-gray-600 hover:text-violet-700 font-medium transition-colors relative group'
        smooth
      >
        About Us
        <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-700 group-hover:w-full transition-all duration-300'></div>
      </NavHashLink>
      <NavHashLink
        to='/#contact'
        className='text-gray-600 hover:text-violet-700 font-medium transition-colors relative group'
        smooth
      >
        Contact Us
        <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-700 group-hover:w-full transition-all duration-300'></div>
      </NavHashLink>
    </nav>

    {/* Right Side Icons */}
    <div className='flex items-center space-x-6 mt-4 lg:mt-0'>
      {/* User Profile */}
      {user && user.name && (
        <button
          onClick={() => window.location.href = '/profile'}
          className='flex items-center space-x-2 px-4 py-2 rounded-full bg-violet-50 hover:bg-violet-100 transition-colors'
        >
          <div className='w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center'>
            {
              user.profilePic ? (
                <img src={user.profilePic} alt='Profile' className='w-full h-full rounded-full object-cover' />
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 text-violet-600'>
                  <path fillRule='evenodd' d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z' clipRule='evenodd' />
                </svg>
              )
            }
          </div>
          <span className='text-sm font-medium text-violet-700'>{user.name}</span>
        </button>
      )}

      {/* Chat Icon */}
      <button className='p-2 text-gray-600 hover:text-violet-700 transition-colors'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path d='M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z' />
          <path d='M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z' />
        </svg>
      </button>

      {/* Headphones Icon */}
      <button className='p-2 text-gray-600 hover:text-violet-700 transition-colors'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3' />
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`lg:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
      <div className='flex flex-col space-y-4'>
        <NavHashLink
          to='/#home'
          className='px-4 py-2 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors'
          smooth
          onClick={toggleMenu}
        >
          Home
        </NavHashLink>
        <NavHashLink
          to='/#service'
          className='px-4 py-2 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors'
          smooth
          onClick={toggleMenu}
        >
          Service
        </NavHashLink>
        <NavHashLink
          to='/#about'
          className='px-4 py-2 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors'
          smooth
          onClick={toggleMenu}
        >
          About Us
        </NavHashLink>
        <NavHashLink
          to='/#contact'
          className='px-4 py-2 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors'
          smooth
          onClick={toggleMenu}
        >
          Contact Us
        </NavHashLink>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default NavBar
