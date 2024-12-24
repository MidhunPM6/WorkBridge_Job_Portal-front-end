import { useContext, useEffect } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { jobDetailsContext } from '../../Context/JobpostContext'
import { axiosJobApplication, axiosJobDetails } from '../../Axios/Axios-instance'
import { UserContext } from '../../Context/UserDetailsContext'
import { Selectedjob } from '../../Context/SeletedJobContext'



const JobMain = () => {
  const navigate = useNavigate()
  const { jobDetails, setJobDetails } = useContext(jobDetailsContext)
  const {selectedJob,setSelectedJob} =useContext(Selectedjob)
  
  const handleApply=(job)=>{
    setSelectedJob(job)
    console.log(selectedJob)
    console.log(job._id)
    
  
    navigate('/applyjob')

  }


  useEffect(() => {
    const fetchJobDetails = async () => {
      
      try {
        const jobDetailsResponse = await axiosJobDetails.get(
          '/storedjobdetails'
        )
       

        console.log(jobDetailsResponse.data)
        if (jobDetailsResponse.status === 200) {
          setJobDetails(jobDetailsResponse.data)  
        }
      } catch (error) {
        alert(error + 'ERROR')
      }
    }
    fetchJobDetails()
  },[])

  return (
    <>
      <div className='flex flex-col items-center py-6 h-screen overflow-auto bg-gray-100 font-poppins   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 '>
        
        {jobDetails.map((jobObj, index) => (
          <div
            key={jobObj._id}
            className='flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mt-6 w-[90%] md:w-[68vw] bg-white rounded-lg shadow-md p-6'
          >
            <div className='flex flex-col flex-1'>
              <h1 className='text-xl font-semibold'>{jobObj.tittle}</h1>
              <h2 className='mt-2 text-sm'>
                {jobObj.comapany_name}{' '}
                <span className='font-light'>- {jobObj.location}</span>
              </h2>
              <span className='mt-2 font-medium text-gray-600'>
                ₹{jobObj.salary}
              </span>
              <p className='mt-2 font-medium'>Job Description</p>
              <p className='text-sm mt-2 w-full max-h-20 overflow-hidden text-ellipsis overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:rounded-full'>
                {jobObj.job_description}
              </p>
            </div>

            <div className='flex flex-col items-start md:items-end gap-2'>
              <button
                onClick={()=>handleApply(jobObj)}
                className='bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700'
              >
                Apply now
              </button>
            </div>
          </div>

        
        ))}
      </div>
    </>
  )
}
export default JobMain
