import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserDetailsContext'
import { Selectedjob } from '../../Context/SeletedJobContext'
import { axiosJobApplication } from '../../Axios/Axios-instance'
import {jobDetailsContext} from '../../Context/JobpostContext'
import { EmpAuth } from '../../Context/EmployerUserDetails'




const ApplyJob = () => {
  const { userDetails } = useContext(UserContext)
  const { selectedJob } = useContext(Selectedjob)




  const submitApplication = async () => {
    if (!userDetails || !userDetails._id) {
      console.error('User details or _id is missing')
      return
    }
    if (!selectedJob || !selectedJob._id) {
      console.error('Selected job or _id is missing')
      return
    }
    try {
      const response = await axiosJobApplication.post('/appliedjob', {
        UserID: userDetails._id,
        JobID: selectedJob._id,
        EmpID:selectedJob.EmpID,
        
        
 
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
      <div className='flex place-content-center  h-[89.7vh] bg-gray-200 font-poppins '>
        <div className=' flex flex-col items-center mt-20 h-[50vh] w-[30vw] bg-gray-50 rounded-lg shadow-md '>
          <div className='pt-14 text-2xl'>
            <h1 className='text-violet-600 font-semibold underline underline-offset-8'>
              Confirm the Application{' '}
            </h1>
          </div>
          <div className='flex flex-col items-center mt-14 text-gray-700'>
            <h1 className='font-semibold text-black'>{selectedJob.tittle}</h1>
            <span className=''>Applying company :{selectedJob.comapany_name}</span>
            <label htmlFor='' className='mt-2'>
              {selectedJob.location}
            </label>
            <label htmlFor='' className='mt-2 font-bold'>
            ₹ {selectedJob.salary}
            </label>
          
            <button
              type='button'
              className='mt-8 bg-violet-600 p-2 rounded-md text-white'
              onClick={submitApplication}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyJob
