import React from 'react'
import { axiosJobApplication } from '../../../Axios/Axios-instance'
import { useSelector } from 'react-redux'

const ApplyJob = ({ setIsOpen }) => {
  
  const user = useSelector(state => state.user.user)
  const selectjob = useSelector(state => state.selectedjob?.jobSelected)
  const handleClose = () => {
    setIsOpen(false)
  }

  const submitApplication = async () => {
    if (!user || !user._id) {
      console.error('User details or _id is missing')
      return
    }
    if (!selectjob || !selectjob._id) {
      console.error('Selected job or _id is missing')
      return
    }
    try {
      const response = await axiosJobApplication.post('/appliedjob', {
        UserID: user._id,
        JobID: selectjob._id,
        EmpID: selectjob.EmpID
      })
      if (response.status === 201) {
        alert('Application successfully applied')
      }
    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      <div className='flex place-content-center   font-poppins'>
        <div className=' flex flex-col  items-center max-h-auto w-[30vw] p-6 border  '>
          <div className=' text-2xl w-full h-14  flex justify-center items-center text-white bg-gradient-to-b from-violet-950 to-black rounded-md'>
            <h1 className=' font-semibold '>Confirmation </h1>
          </div>
          <div className='flex flex-col items-center mt-6 text-gray-700'>
            <h1 className='font-semibold text-black text-lg'>
              {selectjob.tittle}
            </h1>
            <label className='text-sm mt-6'>
              <span className='font-semibold '>Applying company :</span>{' '}
              {selectjob.comapany_name}
            </label>
            <label htmlFor='' className='mt-2 text-sm'>
              <span className='font-semibold'>Location : </span>{' '}
              {selectjob.location}
            </label>
            <label htmlFor='' className='mt-2  font-OpenSans text-sm '>
              <span className='font-semibold'>Salary : </span> ₹{' '}
              {selectjob.salary}
            </label>
            <div className='flex  items-center'>
              <button
                type='button'
                className='mt-8 bg-violet-900 hover:bg-violet-800 py-1 px-5 rounded text-white mr-10'
                onClick={submitApplication}
              >
                Submit
              </button>
              <button
                type='button'
                className='mt-8 px-5 bg-white py-1 rounded shadow-xl hover:bg-slate-100'
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyJob
