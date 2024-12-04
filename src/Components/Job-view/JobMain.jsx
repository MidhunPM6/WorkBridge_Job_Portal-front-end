import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { jobDetailsContext } from '../../Context/JobpostContext'
import { axiosJobDetails } from '../../Axios/Axios-instance'




const JobMain = () => {
 
  const navigate =useNavigate()
  const {jobDetails,setJobDetails}=useContext(jobDetailsContext)

  useEffect(()=>{
    const fetchJobDetails=async()=>{

   try {
    const jobDetailsResponse= await axiosJobDetails.get('/storedjobdetails')
    console.log(jobDetailsResponse.data[0].tittle)
    if(jobDetailsResponse.status===200){
      setJobDetails(jobDetailsResponse.data)
    }
    

   } catch (error) {
    alert(error+"ERROR")
   }
  }
  fetchJobDetails()
  },[])



  return (
    <>
      <div className="flex flex-col items-center py-6 h-screen overflow-auto bg-gray-100 font-poppins">
  {jobDetails.map((jobObj, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mt-6 w-[90%] md:w-[68vw] bg-white rounded-lg shadow-md p-6"
    >
     
      <div className="flex flex-col flex-1">
        <h1 className="text-xl font-semibold">{jobObj.tittle}</h1>
        <h2 className="mt-2 text-sm">
          {jobObj.comapany_name} <span className="font-light">- {jobObj.location}</span>
        </h2>
        <span className="mt-2 font-medium text-gray-600">₹{jobObj.salary}</span>
        <p className="mt-2 font-medium">Job Description</p>
        <p className="text-sm mt-2 w-full max-h-20 overflow-hidden text-ellipsis overflow-y-auto">
          {jobObj.job_description}
        </p>
      </div>

      
      <div className="flex flex-col items-start md:items-end gap-2">
        <button
          onClick={() => navigate("/applyjob")}
          className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
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
