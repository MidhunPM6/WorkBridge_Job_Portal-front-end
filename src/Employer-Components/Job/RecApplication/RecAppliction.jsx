import React, { useContext, useEffect, useState } from 'react'
import { EmpAuth } from '../../../Context/EmployerUserDetails'
import axios from 'axios'

const RecAppliction = () => {
  const { EmpUserDetails } = useContext(EmpAuth)
  const [applications, setApplications] = useState('')

  useEffect(() => {
    const fetchRecivedApplication = async () => {
      try {
        const response = await axios.post('/recivedapplication', {
          currentEmpID: EmpUserDetails._id
        })
        console.log(response.data.Application)
        setApplications(response.data.Application)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRecivedApplication()
  }, [EmpUserDetails])

  return (
    <>
      <div className="flex flex-col items-center w-full p-4 lg:p-8">

  <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mb-8">
    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">Candidate Applications</h1>
    <p className="text-sm lg:text-base mt-2 text-gray-600 max-w-2xl">
      Review all applications submitted to your job listings. View resumes, shortlist top candidates, and take the next step in your hiring process.
    </p>
  </div>

 
  <div className="flex flex-col w-full lg:w-[40vw] max-w-4xl p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
   
    <div className="flex flex-col lg:flex-row gap-6 w-full">
    
      <div className="flex-1 space-y-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Applicant Name</span>
          <span className="text-gray-800 font-medium">Midhun</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Email ID</span>
          <span className="text-gray-800 break-all">midhun@gmailpdjgkg.com</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Mobile Number</span>
          <span className="text-gray-800">858544446</span>
        </div>
      </div>

   
      <div className="flex-1 space-y-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Resume Link</span>
          <a href="#" className="text-blue-600 hover:underline hover:text-blue-800 text-sm break-all">
            dcfbvjvcAdNIpKBIJaEYfSWi7wSu4A__dcfbvjvcAdNIpKBIJaEYfSWi7wSu4A__dcfbvjv.pdf
          </a>
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Job Title</span>
          <span className="text-gray-800">Web Developer</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Location</span>
          <span className="text-gray-800">Bangalore</span>
        </div>
      </div>
    </div>
    
    <div className="mt-6 border-t border-gray-100 pt-4">
      <p className="text-sm text-gray-600">
        <span className="font-medium">Applied Date and time:</span> 20/02/2025 10:00 AM
      </p>
    </div>


    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <button className="px-4 py-2 text-sm font-medium rounded-md bg-green-100 text-green-600 hover:bg-green-200 transition-colors shadow-sm">
        Profile
      </button>
      <button className="px-4 py-2 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors shadow-sm">
        Shortlist
      </button>
      <button className="px-4 py-2 text-sm font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors shadow-sm">
        Send Email
      </button>
      <button className="px-4 py-2 text-sm font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors shadow-sm">
        Reject
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default RecAppliction
