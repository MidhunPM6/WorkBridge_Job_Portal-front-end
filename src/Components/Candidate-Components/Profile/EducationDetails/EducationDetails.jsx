import { useEffect, useState } from 'react'
import EducationPopup from './EducationModal'
import { useDispatch, useSelector } from 'react-redux'
import { setEducation } from '../../../../Redux/UserSlice'
import toast, { Toaster } from 'react-hot-toast'
import EducationDelete from './EducationDelete'
import useEducation from '../../../../hooks/candidate/useEducation'

const EducationDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [eduID, setEduID] = useState('')
  const education = useSelector(state => state.user.education)
  const dispatch = useDispatch()
  const { fetchAllEducations, deleteEducation } = useEducation()

  //  Fetching education details from database
  useEffect(() => {
    const fetchEducation = async () => {
      const { success, response } = await fetchAllEducations()
      dispatch(setEducation(response.data.data))
      if (!success) {
        toast.success(response.error.data.message)
      }
    }
    fetchEducation()
  }, [])

  //  Fetching the ID from selected Education
  const selectEducation = ID => {
    setEduID(ID)
    setOpen(true)
  }

  // Handler for deleting data
  const handleDeleteEducation = async () => {
    const { success, response } = await deleteEducation(eduID)

    if (success) {
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
    }
  }

  return (
    <>
      <div className='flex flex-col w-full h-auto'>
        <Toaster />
        <div className='relative flex-col lg:justify-normal justify-center lg:p-8 p-6 lg:h-auto  w-full bg-white'>
          <div className='flex justify-between items-center p-4 bg-violet-50 rounded-lg'>
            <h1 className='text-2xl font-semibold text-violet-800'>
              Education
            </h1>
            <button
              onClick={() => setIsOpen(true)}
              className='p-2 text-violet-600 hover:text-violet-800 hover:bg-violet-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500'
              aria-label='Add education'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          {/* Education List */}
          <div className='mt-6 flex flex-col gap-4'>
            {education && education.length > 0 ? (
              education.map(educationObj => (
                <div
                  key={educationObj.id}
                  className='flex flex-col gap-3 p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200'
                >
                  <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                      <h2 className='text-lg font-semibold text-gray-800'>
                        {educationObj.college || 'Untitled Education'}
                      </h2>
                      <p className='text-gray-600 mt-1'>{educationObj.field}</p>
                      <div className='flex gap-2 text-sm text-gray-500 mt-2'>
                        <span>{educationObj.StartDate}</span>
                        <span>—</span>
                        <span>{educationObj.Passed}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => selectEducation(educationObj.id)}
                      className='p-1 text-gray-400 hover:text-red-500 transition-colors duration-200'
                      aria-label='Delete education'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center justify-center py-12 text-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-16 h-16 text-gray-300 mb-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M9 3v18m6-18v18M4 12h16M3 6h18'
                  />
                </svg>
                <h3 className='text-xl font-medium text-gray-500 mb-2'>
                  No education added yet
                </h3>
                <p className='text-gray-400 mb-4'>
                  Your education history will appear here
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className='flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Add Education
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {open && (
        <EducationDelete
          setOpen={setOpen}
          handleDeleteEducation={handleDeleteEducation}
        />
      )}

      {/* Modal to add new education data */}
      {modalIsOpen && <EducationPopup setIsOpen={setIsOpen}/>}
    </>
  )
}

export default EducationDetails
