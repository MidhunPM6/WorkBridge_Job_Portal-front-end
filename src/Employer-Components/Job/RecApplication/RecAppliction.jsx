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
      <div className='flex flex-col    items-center lg:w-full  rounded-sm'>
        <div className='flex flex-col  items-center justify-center '>

        <h1 className='text-2xl   font-semibold '>Candidate Applications</h1>
        <p className='text-sm mt-2 text-gray-700 '>Review all applications submitted to your job listings. View resumes, shortlist top candidates,<span className='lg:flex lg:justify-center'>and take the next step in your hiring process.</span> </p>
        </div>


        <div className='flex flex-col  mt-8    lg:w-full  w-[80vw]  p-4 border border-slate-300   bg-gray-100 bg-opacity-0   transition-all duration-500   rounded   '>
          <div className='flex  mt-1 gap-6 rounded-md'>
            <h1 className='w-72  flex flex-col font-semibold  decoration-gray-300  cursor-pointer    rounded-sm'>
                Applicant Name
              <span className=' text-gray-600 outline-none'>
              Midhun
              </span>{' '}
            </h1>
            <p className='ml-8 w-72 flex flex-col font-semibold decoration-gray-300 cursor-pointer  rounded  '>
              Email ID
              <span className=' text-gray-600'>midhun@gmail.com</span>
              
            </p>
          </div>
          <div className='mt-2 flex gap-6  rounded-md'>
            <h1 className='w-72 flex flex-col font-semibold decoration-gray-300 cursor-pointer  rounded '>
              Mob Number
              <span className=' text-gray-600'>858544446</span>

            </h1>
            <h1 className='w-72 flex flex-col decoration-gray-300 cursor-pointer  ml-8  rounded '>
              <span className=' font-semibold outline-none'>Resume Link</span>
              <span className=' text-gray-600'>mmdnkvcn</span>
            </h1>
          </div>
          <div className='mt-2 flex gap-6 rounded-md'>
            <h1 className='w-72 flex flex-col decoration-gray-300 cursor-pointer  rounded '>
              <span className=' font-semibold outline-none'>Job title</span>
              <span className=' text-gray-600'>Web Developer</span>
            </h1>
            <h1 className='w-72 flex flex-col  decoration-gray-300 cursor-pointer  ml-8  rounded '>
              <span className=' font-semibold outline-none'>Location</span>
              <span className=' text-gray-600'>bangalore</span>
            </h1>
          </div>
          <div className='flex  mt-4 rounded-md gap-6'>
            <h1 className='w-auto text-sm    cursor-pointer     rounded'>
              <span className=' font-bold outline-none'>
                Applied Date and time
              </span>{' '}
              : 20/02/2025 10:00 AM
            </h1>
          </div>
          <div className=' flex lg:justify-end justify-center  m-3 gap-4  text-sm mt-6 '>
            <button className='bg-green-100 hover:bg-green-200  text-green-700 p-2 group font-semibold bg transition-all duration-500 rounded-sm'>
              Profile
            </button>
            <button className='bg-violet-100 hover:bg-violet-200 text-violet-700 p-2 group font-semibold bg transition-all duration-500 rounded-sm'>
              Shortlist
            </button>
            <button className='bg-red-100 hover:bg-red-200 text-red-700 p-2 group font-semibold bg transition-all duration-500 rounded-sm'>
              Reject
            </button>
            <button className='bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 group font-semibold bg transition-all duration-500 rounded-sm'>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecAppliction
