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
      <div className='flex flex-col font-poppins bg-violet-500 text-white  items-center rounded shadow-xl'>
        <h1 className='text-2xl m-4 underline underline-offset-8 font-semibold'>
          Applications
        </h1>
        {applications &&
          applications.map((application, index) => (
            <div
              key={application._id}
              className='flex flex-col bg-gray-100 w-auto m-3 p-4 shadow-2xl text-base rounded text-black '
            >
              <div className='flex shadow-sm p-2 rounded-md'>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px]  cursor-pointer '>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Applicant Name
                  </span>{' '}
                  : {application.userid.name}{' '}
                </h1>
                <p className='ml-8 w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer '>
                  <span className='text-violet-500 font-semibold'>Email ID</span>{' '}
                  : {application.userid.email}
                </p>
              </div>
              <div className='mt-4 flex shadow-sm p-2 rounded-md'>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer '>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Mob Number
                  </span>{' '}
                  : {application.userid.mobile}
                </h1>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer  ml-8 '>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Resume Link
                  </span>{' '}
                  : mmdnkvcn
                </h1>
              </div>
              <div className='mt-4 flex shadow-sm p-2 rounded-md'>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer '>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Job title
                  </span>{' '}
                  : Web Developer
                </h1>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer  ml-8 '>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Location
                  </span>{' '}
                  : {application.jobid.location}
                </h1>
              </div>
              <div className='mt-4 flex justify-between '>
                <h1 className='w-72 hover:underline decoration-gray-300 underline-offset-[5px] cursor-pointer shadow  rounded-md text-sm p-2'>
                  <span className='text-violet-500 font-semibold outline-none'>
                    Applied Date and time
                  </span>{' '}
                  : {application.AppliedDate} {application.AppliedTime}
                </h1>
                <button className='group text-sm font-semibold'>
                View Profile
                <div class="bg-violet-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                  
                 
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default RecAppliction
