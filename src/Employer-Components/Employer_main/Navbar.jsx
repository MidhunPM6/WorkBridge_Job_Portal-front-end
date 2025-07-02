import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/employer-mainpage/logo.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <div className='bg-white border-b border-gray-200 px-6 py-4 shadow-sm h-20'>
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

        <div className='flex items-center justify-between'>
          {/* Logo and Search */}
          <div className='flex items-center space-x-8'>
            <div className='flex items-center space-x-3'>
              <img src={logo} alt='Company Logo' className='w-10 h-10' />
              <span className='text-xl font-bold text-gray-900 tracking-tight'>
                EMPLOYER
              </span>
            </div>

            <div className='hidden lg:block relative w-72'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                type='text'
                placeholder='Search...'
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700'
              />
            </div>
          </div>

          {/* Navigation and Profile */}
          <div className='lg:flex-row flex flex-col items-end lg:items-center lg:justify-center space-x-6'>
            {employer ? (
              <>
                <nav className='lg:flex-row  hidden lg:block space-x-8 '>
                  <button
                    onClick={() => navigate('/employer')}
                    className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
                  >
                    Home
                  </button>
                  <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
                    About
                  </button>
                  <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
                    Pricing
                  </button>
                  <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
                    Contact
                  </button>
                  <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
                    FAQs
                  </button>
                </nav>

                <div className='flex gap-4 relative'>
                  <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='size-6'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  </button>

                  <button className='' onClick={()=>navigate('/chatWindow',{state:{userType : "employer"}})}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='size-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className='flex items-center space-x-2 focus:outline-none'
                  >
                    <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center'>
                      {employer?.profilePic ? (
                        <img
                          src={employer?.profilePic}
                          alt='Profile'
                          className='w-full h-full rounded-full flex justify-center items-center '
                        />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-6 h-6 text-blue-600'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      )}
                    </div>
                    <span className='hidden lg:inline font-medium text-gray-700'>
                      {employer.name}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        profileOpen ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>

                  {profileOpen && (
                    <div className='absolute right-0  mt-14 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 '>
                      <div className='py-1'>
                        <button
                          onClick={() => navigate('/employerprofile')}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Profile
                        </button>
                        <button
                          onClick={() => navigate('/profile/jobmenu')}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Manage Jobs
                        </button>
                        <button
                          onClick={() => navigate('/profile/accountsetting')}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Account Settings
                        </button>
                        <div className='border-t border-gray-100 my-1'></div>
                        <button
                          onClick={handleLogout}
                          className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={() => navigate('/employerlogin')}
                className='px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm'
              >
                Employer Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search (hidden on desktop) */}
        <div className='flex items-center justify-center mt-10'>
          <nav className='lg:flex-row  block lg:hidden space-x-8 '>
            <button
              onClick={() => navigate('/employer')}
              className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
            >
              Home
            </button>
            <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
              About
            </button>
            <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
              Pricing
            </button>
            <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
              Contact
            </button>
            <button className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>
              FAQs
            </button>
          </nav>
        </div>
        <div className='mt-4 lg:hidden'>
          <input
            type='text'
            placeholder='Search...'
            className='block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700'
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
