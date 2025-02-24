import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Model from 'react-modal'
import RecApplication from '../../Employer-Components/RecApplication/RecAppliction'
import logo from '../../assets/employer-mainpage/logo.png'
import { EmpAuth } from '../../Context/EmployerUserDetails'
import { motion } from 'framer-motion'

const Navbar = () => {
  const navigate = useNavigate()
  const { EmpUserDetails, setEmpUserDetails } = useContext(EmpAuth)
  const [visible, setVisible] = useState(false)

  const customStyles = {
    overlay: {
      opacity: '100%',
      transition: 'opacity 500ms ease-in-out',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      maxHeight: '90vh',
      transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
      overflow: 'auto',
      scrollbarWidth: 'thin',
      opacity: 1
    }
  }

  const modelOpen = () => {
    setVisible(true)
  }

  const modelClose = () => {
    setVisible(false)
  }

  const handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem('userdata')
    setEmpUserDetails('')
  }

  return (
    <>
      <div className='lg:flex lg:justify-around lg:h-[10vh] text-white p-4 shadow-md'>
        <div className='lg:flex-row flex flex-col items-center text-black gap-6  '>
          <div className='flex justify-center items-center gap-2'>
            <img src={logo} alt='' className='w-20 lg:ml-10 ' />
            <h1 className='font-semibold text-lg tracking-widest'>EMPLOYER</h1>
          </div>
          <div className='  lg:ml-auto lg:mr-8 '>
            <div className=' flex '>
              <input
                type='text'
                placeholder='Search'
                className=' w-64 py-1 pl-2 rounded bg-gray-100 focus:bg-gray-50 text-gray-700  border border-gray-200 outline-none focus:border-gray-300 focus:w-80 transition-all duration-200'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 -ml-10 text-gray-500  cursor-pointer '
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4 mt-4 lg:mt-0 flex-wrap  transition-all duration-300'>
          {EmpUserDetails ? (
            <>
              <button
                onClick={() => navigate('/postjob')}
                className='px-4 py-2 rounded-full  text-black text-sm font-semibold hover:underline underline-offset-4 hover:scale-105 hover:text-gray-600 transition-all duration-300'
              >
                Post Job
              </button>
              <button
                onClick={() => navigate('/postjob')}
                className='px-4 py-2 rounded-full  text-black text-sm font-semibold hover:underline underline-offset-4 hover:scale-105 hover:text-gray-600 transition-all duration-300'
              >
                All Jobs
              </button>

              <button
                onClick={modelOpen}
                className='px-4 py-2 rounded-full  text-black text-sm font-semibold hover:underline underline-offset-4 hover:scale-105 hover:text-gray-600 transition-all duration-300'
              >
                Recived Applications
              </button>
              <Model
                isOpen={visible}
                onRequestClose={modelClose}
                style={customStyles}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <RecApplication />
                </motion.div>
              </Model>

              <button
                onClick={() => navigate('/employerprofile')}
                className='px-4 py-2 rounded-full text-black  transition  text-lg font-semibold hover:scale-105   hover:underline underline-offset-4 hover:text-gray-600'
              >
                <span className='hover:text-gray-600 font-semibold text-lg'>
                  Profile:{' '}
                </span>{' '}
                {EmpUserDetails.name}
              </button>

              <button
                onClick={handleLogout}
                className='px-4 py-2 rounded-full bg-violet-900 hover:bg-violet-800 text-white text-sm shadow-lg'
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/employerlogin')}
              className='px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition text-white text-sm shadow-lg'
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
