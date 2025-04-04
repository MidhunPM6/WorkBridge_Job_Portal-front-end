import { set } from 'date-fns'
import React, { useState } from 'react'
import ExperiencePopup from './ExperiencePopup'
import Modal from 'react-modal'
import { useEffect } from 'react'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useDispatch, useSelector } from 'react-redux'
import { setExperience } from '../../../../Redux/UserSlice'

const ExperienceComp = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const experience = useSelector(state => state.user.experience)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [expID ,setExpID] = useState(false)

  //  Custom style for the Modal
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

  const handleDeleteExperience = async()=>{
    try {
      console.log(expID);
      
      const response =  await axiosInstance.delete(`/api/candidate/experience/${expID}`,{
        withCredentials : true
      })
      console.log(response);
      
    } catch (error) {
      console.error(error);
      
    }
    
  }


  return (
    <>
      <div className='flex flex-col w-full h-auto ' id='experience'>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-20  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full  '>
          <div className='flex justify-between p-2 items-center  bg-violet-100 text-violet-500   h-16 rounded-sm'>
            <h1 className='text-2xl font-semibold'>Experience</h1>
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
            {experience ? (
              experience.map((expObj, index) => (
                <div
                  key={index}
                  className='flex flex-col  text-[14px] gap-3 shadow-[0px_0px_5px_1px_rgba(212,188,241,0.6)] p-4 rounded-sm  '
                >
                  <h1 className='font-semibold'>{expObj.position}</h1>
                  <div className='flex'>
                    <h1 className='bg-blue-100  text-blue-500 rounded-full  px-3'>
                      {expObj.company}
                    </h1>
                  </div>
                  <div className='flex gap-2'>
                    <h1>{expObj.StartDate}</h1>
                    <span> - </span>
                    <h1>{expObj.EndDate}</h1>
                  </div>
                  <div className='  lg:flex-row flex flex-col'>
                    <h1 className='lg:w-[45vw] w-full tracking-wide text-gray-700 '>
                      <span className='font-semibold text-lg text-black '>
                        Description <br />
                      </span>{' '}
                      {expObj.tasks}
                    </h1>
                    <div className='flex lg:justify-end lg:items-end lg:ml-auto justify-center mt-3 lg:mt-0 text-red-600 hover:text-red-500 hover:scale-105 transition-all duration-300'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-6 cursor-pointer'
                        onClick={()=>selectExperience(expObj.id)}
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
            ) : (
              <div className='text-red-600 flex justify-center'>
                <h1 className='text'>not found</h1>
              </div>
            )}
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
                <button className='border border-gray-300 rounded-sm p-2 px-6 hover:bg-gray-50' onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button className='bg-red-700 text-white rounded-sm p-2 px-6 hover:bg-red-800' onClick={handleDeleteExperience}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

     // This is the modal for adding Experience Details
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <ExperiencePopup></ExperiencePopup>
      </Modal>
    </>
  )
}

export default ExperienceComp
