import React, { use, useEffect, useState } from 'react'
import Modal from 'react-modal'
import EducationPopup from './EducationPopup'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { setEducation, setExperience } from '../../../../Redux/UserSlice'
import { customStyles } from '../ModalStyles'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EducationDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [eduID, setEduID] = useState('')
  const education = useSelector(state => state.user.education)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  
  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  function closeModal () {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }

  //  Fetching education details from database
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axiosInstance.get('/api/candidate/education', {
          withCredentials: true
        })

        dispatch(setEducation(response.data.data))
      } catch (error) {
        console.error(error)
      }
    }

    fetchEducation()
  }, [])

  //  Fetching the ID from selected Education
  const selectEducation = ID => {
    setEduID(ID)
    console.log(eduID)
    setOpen(true)
  }

  // Handler for deleting data
  const handleDeleteEducation = async () => {
    try {
      console.log(eduID)

      const response = await axiosInstance.delete(
        `/api/candidate/education/${eduID}`,
        {
          withCredentials: true
        }
      )
      console.log(response)
      toast.success(response.data.message, {
        duration: 1000,
        onClose: () => {
          
          setOpen(false)
        }
      })
      setTimeout(() => {
       
        dispatch(setEducation(education.filter(item => item.id !== eduID)))
        setOpen(false)
      }, 1000)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }

  

  return (
    <>
      <div className='flex flex-col  w-full h-auto'>
        <Toaster></Toaster>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-20  p-10 lg:h-auto  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] rounded-t-sm   w-full  '>
          <div className='flex justify-between p-2 items-center  bg-violet-50 text-violet-500   rounded-sm  h-16'>
            <h1 className='text-2xl font-semibold'>Education</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-8 cursor-pointer'
              onClick={openModal}
            >
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='mt-10 flex flex-col gap-4'>
            {education ?
               education.map(educationObj => (
                  <div className='flex flex-col gap-2    text-[14px]  border border-gray-300   p-4 rounded-md '>
                    <h1 className='flex font-semibold '>
                      {educationObj.college}
                    </h1>
                    <h1>{educationObj.field}</h1>
                    <div className='flex gap-2 text-gray-700'>
                      <h1>{educationObj.StartDate}</h1>
                      <span>-</span>
                      <h1>{educationObj.Passed}</h1>

                      <div className='flex lg:justify-end lg:items-end lg:ml-auto justify-center mt-3 lg:mt-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='size-6 cursor-pointer text-red-600 hover:text-red-500 hover:scale-105 transition-all duration-300 '
                          onClick={() => selectEducation(educationObj.id)}
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>

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
                    onClick={handleDeleteEducation}
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
      {/* Modal to add new education data */}
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
            <EducationPopup setIsOpen ={setIsOpen}></EducationPopup>
          </motion.div>
        </Modal>
      </AnimatePresence>
    </>
  )
}

export default EducationDetails
