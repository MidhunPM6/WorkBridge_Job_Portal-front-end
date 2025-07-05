import { set } from 'date-fns'
import React, { useState } from 'react'
import ExperiencePopup from './ExperiencePopup'
import Modal from 'react-modal'
import { useEffect } from 'react'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useDispatch, useSelector } from 'react-redux'
import { setExperience } from '../../../../Redux/UserSlice'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { customStyles } from '../ModalStyles'

const ExperienceComp = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const experience = useSelector(state => state.user.experience)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [expID, setExpID] = useState(false)
  const navigate = useNavigate()

  // Fucntion to open and close modals
  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }
  function closeModal () {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }

  //  Fetching experience details from database
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axiosInstance.get('/api/candidate/experience', {
          withCredentials: true
        })
        dispatch(setExperience(response.data.data))
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching experience:', error)
      }
    }

    fetchExperience()
  }, [])

  // Handler to delete Experience details
  const selectExperience = ID => {
    setExpID(ID)

    setOpen(true)
  }

  const handleDeleteExperience = async () => {
    try {
      console.log(expID)

      const response = await axiosInstance.delete(
        `/api/candidate/experience/${expID}`,
        {
          withCredentials: true
        }
      )
      console.log(response)

      toast.success(response.data.message, {
        duration: 1000
      })
      setTimeout(() => {
        dispatch(setExperience(experience.filter(item => item.id !== expID)))
        setOpen(false)
      }, 1100)
      console.log(response)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }

  return (
    <>
      <div className='flex flex-col w-full h-auto' id='experience'>
  <div className='relative flex-col lg:justify-normal justify-center lg:p-8 p-8 lg:h-auto rounded-t-sm shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)] w-full'>
    <Toaster />
   
    <div className='flex justify-between p-4 items-center bg-violet-50 text-violet-700  rounded-md'>
      <h1 className='text-2xl font-semibold'>Experience</h1>
      <button 
        onClick={openModal}
        className="p-2 text-violet-600 hover:text-violet-800 hover:bg-violet-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
        aria-label="Add education"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    {/* Experience List */}
    <div className='mt-8 flex flex-col gap-5'>
      {experience?.length > 0 ? (
        experience.map((expObj, index) => (
          <div
            key={index}
            className='flex flex-col   gap-3 border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow'
          >
            <div className='flex justify-between items-start'>
              <div className='space-y-2'>
                <h1 className='font-bold text-lg text-gray-900'>{expObj.position}</h1>
                <div className='flex'>
                  <span className='bg-lime-100 text-lime-800 rounded-full px-3 py-1 text-sm font-medium'>
                    {expObj.company}
                  </span>
                </div>
                <div className='flex gap-2 text-gray-600'>
                  <h1>{expObj.StartDate}</h1>
                  <span>—</span>
                  <h1>{expObj.EndDate}</h1>
                </div>
              </div>

              {/* Delete button with confirmation */}
              <button
                onClick={()=>setOpen(true) || selectExperience(expObj.id)}
                aria-label={`Delete experience at ${expObj.company}`}
                className='text-red-500 hover:text-red-700 hover:scale-105 transition-all duration-200 p-1'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>

            {/* Description with better readability */}
            <div className='mt-2'>
              <h2 className='font-semibold text-gray-900 mb-1'>Description</h2>
              <p className='text-gray-800 leading-relaxed whitespace-pre-line'>
                {expObj.tasks}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-12'>
          <div className='mx-auto max-w-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-12 h-12 mx-auto text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
              />
            </svg>
            <h3 className='mt-4 text-xl font-medium text-gray-500'>No experience added</h3>
            <p className='mt-2 text-gray-400'>
              Add your work history to showcase your professional journey.
            </p>
            <button
              onClick={openModal}
              className='mt-4 gap-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
              </svg>
              Add First Experience
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
      {/* The modal for delete item */}
      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
                <svg
                  class='text-red-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='70'
                  height='70'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <h1 className='text-2xl text-gray-700 '>Are you sure ?</h1>
                <p className='text-xs text-gray-500 leading-5 tracking-wide'>
                  Do you really want to delete these records? <br />
                  <span className='flex w-full justify-center '>
                    This process cannot be undone
                  </span>
                </p>
                <div className='text-black text-sm flex gap-3'>
                  <button
                    onClick={() => setOpen(false)}
                    className='bg-gray-200 py-2 px-6 mt-10  rounded-sm hover:bg-gray-300 '
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteExperience}
                    className='bg-red-600 bg-opacity-95 py-2 px-6 mt-10 text-white rounded-sm hover:bg-red-700'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* // This is the modal for adding Experience Details */}
      <AnimatePresence>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <ExperiencePopup></ExperiencePopup>
          </motion.div>
        </Modal>
      </AnimatePresence>
    </>
  )
}

export default ExperienceComp
