import React, { useContext, useEffect, useState } from 'react'
import { EmpAuth } from '../../Context/EmployerUserDetails'
import { axiosRecivedApllication } from '../../Axios/Axios-instance'

const RecAppliction = () => {
  const { EmpUserDetails } = useContext(EmpAuth)
  const [applications, setApplications] = useState('')

  useEffect(() => {
    const fetchRecivedApplication = async () => {
      try {
        const response = await axiosRecivedApllication.post(
          '/recivedapplication',
          {
            currentEmpID: EmpUserDetails._id
          }
        )
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
    
      <div className='flex flex-col    items-center rounded shadow-xl'>
        <h1 className='text-2xl m-4  font-semibold '>
          Applications Received
        </h1>
        {applications &&
          applications.map((application, index) => (
            <div
              key={application._id}
              className='flex flex-col  mt-5  w-auto m-3 p-4 border border-slate-200   bg-gray-100 bg-opacity-0 hover:bg-opacity-90  transition-all duration-500 hover:scale-105  text-sm rounded shadow-[0px_0px_22px_2px_rgba(148,148,148,1)]  '
            >
              <div className='flex  mt-1 rounded-md'>
                <h1 className='w-72  decoration-gray-300  cursor-pointer border p-2 bg-gray-50 text-sm rounded-sm'>
                  <span className=' font-semibold outline-none'>
                    Applicant Name
                  </span>{' '}
                  : {application.userid.name}{' '}
                </h1>
                <p className='ml-8 w-72  decoration-gray-300 cursor-pointer border border-grey-200 p-2 bg-gray-50 rounded  '>
                  <span className=' font-semibold'>Email ID</span>{' '}
                  : {application.userid.email}
                </p>
              </div>
              <div className='mt-4 flex   rounded-md'>
                <h1 className='w-72  decoration-gray-300 cursor-pointer border border-grey-200 p-2 bg-gray-50 rounded '>
                  <span className=' font-semibold outline-none'>
                    Mob Number
                  </span>{' '}
                  : {application.userid.mobile}
                </h1>
                <h1 className='w-72  decoration-gray-300 cursor-pointer  ml-8 border border-grey-200 p-2 bg-gray-50 rounded '>
                  <span className=' font-semibold outline-none'>
                    Resume Link
                  </span>{' '}
                  : mmdnkvcn
                </h1>
              </div>
              <div className='mt-4 flex  rounded-md'>
                <h1 className='w-72  decoration-gray-300 cursor-pointer border border-grey-200 p-2 bg-gray-50 rounded '>
                  <span className=' font-semibold outline-none'>
                    Job title
                  </span>{' '}
                  : Web Developer
                </h1>
                <h1 className='w-72  decoration-gray-300 cursor-pointer  ml-8 border border-grey-200 p-2 bg-gray-50 rounded '>
                  <span className=' font-semibold outline-none'>
                    Location
                  </span>{' '}
                  : {application.jobid.location}
                </h1>
              </div>
              <div className='flex  mt-4 rounded-md'>
                <h1 className='w-auto text-xs    cursor-pointer  p-2 border border-grey-200 bg-gray-50 rounded'>
                  <span className=' font-bold outline-none'>
                    Applied Date and time
                  </span>{' '}
                  : {application.AppliedDate} {application.AppliedTime}
                </h1>
              </div>
              <div className='mt-4 flex justify-end m-3  '>
                <button className='group font-semibold hover:text-gray-600 hover:scale-110 transition-all duration-500'>
                View Profile
                <div class="bg-violet-900 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>

                  
                 
                </button>
              </div>
            </div>
          ))}
      </div>

    </>
  )
}

export default RecAppliction
