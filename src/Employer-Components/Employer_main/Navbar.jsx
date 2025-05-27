import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Model from 'react-modal'
import RecApplication from '../Job/RecApplication/RecAppliction'
import logo from '../../assets/employer-mainpage/logo.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/EmployerSlice'

const Navbar = () => {
  const navigate = useNavigate()

  const [visible, setVisible] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const employer = useSelector(state => state.employer.employer)
  const dispatch = useDispatch()
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
    dispatch(logout())
    toast.success('Logout Success', {
      autoClose: 1300,
      onClose: () => {
        navigate('/employerlogin')
      }
    })
    

  
  }

  let timeoutId

  const handleMouseEnter = () => {
    clearTimeout(timeoutId) // Prevent premature closing
    setProfileOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setProfileOpen(false)
    }, 200) // Add slight delay to allow smooth transition
  }

  return (
    <>
      <div className='lg:flex lg:justify-around lg:h-[12vh] text-white p-4 shadow-md'>
        <ToastContainer
          position='top-right'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className='lg:flex-row flex flex-col items-center text-black gap-6'>
          <div className='flex justify-center items-center gap-2'>
            <img src={logo} alt='' className='w-20 lg:ml-10' />
            <h1 className='font-semibold text-lg tracking-widest'>EMPLOYER</h1>
          </div>
          <div className='lg:ml-auto lg:mr-8'>
            <input
              type='text'
              placeholder='Search'
              className='w-72 py-2 pl-2 rounded bg-gray-100 text-gray-700 border border-gray-200 '
            />
          </div>
        </div>

        <div className='flex items-center lg:justify-normal justify-center gap-4 mt-4 lg:mt-0 flex-wrap transition-all duration-300'>
          {employer ? (
            <>
              <div className=' flex  font-semibold gap-6 lg:mr-10 text-gray-700'>
                <button className='hover:text-gray-900'>Home</button>
                <button className='hover:text-gray-900'>About</button>
                <button className='hover:text-gray-900'>Pricing</button>
                <button className='hover:text-gray-900'>Contact Us</button>
                <button className='hover:text-gray-900'>FAQs</button>
              </div>
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

              <div
                className='relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className='px-8 flex gap-2 bg-black hover:bg-opacity-90  py-2  text-violet-600 transition-all duration-300 font-semibold rounded'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                      clipRule='evenodd'
                    />
                  </svg>

                  {employer.name}
                </button>
                {profileOpen && (
                  <div className='absolute  flex flex-col left-0 mt-2  w-full bg-neutral-100 shadow-lg border rounded z-50'>
                    <button
                      className='rounded-sm transition-all duration-300 text-black text-base p-2 hover:bg-neutral-200'
                      onClick={() => navigate('/employerprofile')}
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => navigate('/profile/jobmenu')}
                      className='rounded-sm transition-all duration-300 text-black  p-2 hover:bg-neutral-200'
                    >
                      Manage Job
                    </button>
                    <button
                      onClick={() => navigate('/profile/accountsetting')}
                      className='rounded-sm transition-all duration-300 text-black  p-2 hover:bg-neutral-200'
                    >
                      Account setting
                    </button>
                    <button
                      onClick={handleLogout}
                      className='rounded-sm p-2 mt-3 bg-red-700 hover:bg-red-800 text-white  shadow-lg'
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={() => navigate('/employerlogin')}
              className='px-4 py-2 rounded-sm bg-green-100 hover:bg-green-200 font-semibold text-green-700 text-sm shadow-lg transition-all duration-500'
            >
              Employer Login
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
