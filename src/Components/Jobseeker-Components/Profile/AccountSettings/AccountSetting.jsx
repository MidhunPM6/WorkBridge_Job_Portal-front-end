import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import UserNameChange from './UserNameChange'
import Modal from 'react-modal'
import ChangePassword from './ChangePassword'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../../../Redux/UserSlice' 



axios.defaults.withCredentials = true

const AccountSetting = () => {
  const navigate = useNavigate()
  const user =useSelector((state)=>state.user)

  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const dispatch =useDispatch()
  //Custom Styles for First Modal
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: modalIsOpen ? 1 : 0
    }
  }

  //Custom Styles for Second Modal
  const customStyles2 = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: isVisible ? 1 : 0
    }
  }
  // First Modal
  const openModal = () => {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }

  // Second Modal
  const openmodal2 = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 300)
  }
  const closeModal2 = () => {
    setIsVisible(false)
    setTimeout(() => {}, 300)
  }

  //Logout handling
  const handleLogout = async () => {
    
   dispatch(logout())
   
   navigate('/')
  }

  return (
    <>
      <div className=' flex flex-col justify-start w-full h-auto items-center   shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] pt-16 '>
        <div className=' flex flex-col items-center border-2 p-10 rounded-sm border-gray-100'>
          <div>
            <h1 className=' text-xl font-semibold'>Account Settings</h1>
          </div>
          <div className='flex items-center mt-6 gap-4 text-sm '>
            <div className='flex flex-col  '>
              <label htmlFor=''>Username</label>
              <input
                type='text'
                value={user && user.name}
                className='py-2 px-3 mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex justify-center items-center  text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={openModal}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>
          <div className='flex mt-6 gap-4'>
            <div className='flex flex-col  text-sm '>
              <label htmlFor=''>Password</label>
              <input
                type='text'
                placeholder='**********'
                className='py-2 px-3 text-center mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='  flex justify-center items-center text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={openmodal2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>

          <div className='mt-10'>
            <button
              onClick={handleLogout}
              type='button '
              className=' text-red-600 font-semibold text-sm p-1 rounded-md px-7 shadow-lg hover:bg-gray-100'
            >
              Logout
            </button>
          </div>
          <div>
            <button className='mt-4  hover:bg-red-900 text bg-red-800 py-2 p-2 text-white text-sm rounded-sm'>
              Delete your account
            </button>
          </div>
        </div>
      </div>

      {/* {Model 1} */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <UserNameChange></UserNameChange>
      </Modal>

      {/* Model 2 */}
      <Modal
        isOpen={isVisible}
        onRequestClose={closeModal2}
        style={customStyles2}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <ChangePassword></ChangePassword>
      </Modal>
    </>
  )
}

export default AccountSetting
