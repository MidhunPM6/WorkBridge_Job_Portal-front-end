import React, { use, useEffect, useState } from 'react'
import Modal from 'react-modal'
import EducationPopup from './EducationPopup'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { setEducation, setExperience } from '../../../../Redux/UserSlice'

const EducationDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [eduID, setEduID] = useState('')

  const education = useSelector(state => state.user.education)

  const dispatch = useDispatch()
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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='flex flex-col  w-full h-auto'>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-20  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full  '>
          <div className='flex justify-between p-2 items-center  bg-violet-100 text-violet-500   rounded-sm  h-16'>
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
            {education
              ? education.map(educationObj => (
                  <div className='flex flex-col gap-2    text-[14px]  shadow-[0px_0px_5px_1px_rgba(212,188,241,0.6)] p-4 rounded-sm '>
                    <h1 className='flex font-semibold '>
                      {educationObj.college}
                    </h1>
                    <h1>{educationObj.field}</h1>
                    <div className='flex gap-2 text-gray-700'>
                      <h1>{educationObj.StartDate}</h1>
                      <span>-</span>
                      <h1>{educationObj.Passed}</h1>
                    </div>
                    <div className='  lg:flex-row flex flex-col'>
                      <div className='flex lg:justify-end lg:items-end lg:ml-auto justify-center mt-3 lg:mt-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='size-6 cursor-pointer text-red-600 '
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
      {/* The modal for delete item */}
      {open && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 '>
            <div className='flex justify-between'>
              <h1 className='text-xl'>Delete?</h1>

              <button onClick={() => setOpen(false)} className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-5 text-gray-500'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
            <div className='mt-5 flex flex-col items-center gap-12'>
              <div className='flex flex-col gap-2 m-2'>
                <h1 className='text-gray-600'>
                  Are you sure you want to delete this item?
                </h1>
                <div className='h-[1px] bg-slate-300 w-full '></div>
              </div>

              <div className='flex w-full justify-around'>
                <button
                  className='border border-gray-300 rounded-sm p-2 px-6 hover:bg-gray-50'
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className='bg-red-700 text-white rounded-sm p-2 px-6 hover:bg-red-800'
                  onClick={handleDeleteEducation}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal to add new education data */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <EducationPopup></EducationPopup>
      </Modal>
    </>
  )
}

export default EducationDetails
