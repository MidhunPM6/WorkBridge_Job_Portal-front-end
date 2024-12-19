import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserDetailsContext'
import { Selectedjob } from '../../Context/SeletedJobContext'
import { axiosJobApplication } from '../../Axios/Axios-instance'



const ApplyJob =() => {
   const {userDetails}=useContext(UserContext)
   const {selectedJob}=useContext(Selectedjob)
  
   const submitApplication=async()=>{
    if (!userDetails || !userDetails._id) {
      console.error('User details or _id is missing');
      return; 
    }
    if (!selectedJob || !selectedJob._id) {
      console.error('Selected job or _id is missing');
      return; 
    }   
     try {
      const response=await axiosJobApplication.post('/appliedjob',{
        UserID:userDetails._id,
        JobID:selectedJob._id
      })
      if(response.status===201){
        alert("Application successfully applied")
      }else{
        alert('An error occured')
      }

      
     } catch (error) {
      alert(error)
      console.log(error);
      
     }
   }

  return (
   <>
   <div className='flex place-content-center  h-[89.7vh] bg-gray-200 font-poppins '>
    <div className=' flex flex-col items-center mt-20 h-[60vh] w-[30vw] bg-gray-50 rounded-lg shadow-md '>
      <div className='pt-14 text-2xl'> 
        <h1 className='text-violet-600 font-semibold underline underline-offset-8'>Confirm the Application </h1>
      </div>
      <div className='flex flex-col items-center mt-14 text-gray-700'>
       <h1 className='font-semibold text-black'>webdeveloper</h1>
       <span className=''>Applying  company : Infosys</span>
       <label htmlFor="" className='mt-2'>Your Designation</label>
       <input type="text" placeholder='Your position' className='mt-4 py-1 px-8 rounded-lg outline-none border border-violet-800'/>
       <button type="button" className='mt-8 bg-violet-600 p-2 rounded-md text-white' onClick={submitApplication}>Submit Application</button>
       </div>
    </div>
   </div>
   </>
  )
}

export default ApplyJob
