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
      <div className='flex flex-col   items-center lg:w-full  rounded-sm'>
        <div className='flex flex-col  items-center justify-center '>

        <h1 className='text-2xl   font-semibold '>Candidate Applications</h1>
        <p className='text-sm mt-2 text-gray-700 '>Review all applications submitted to your job listings. View resumes, shortlist top candidates,<span className='lg:flex lg:justify-center'>and take the next step in your hiring process.</span> </p>
        </div>


        <div className='flex flex-col  mt-8 items-center   lg:w-[40vw] w-[80vw]  p-4 border-[0.100rem] border-slate-200    transition-all duration-500   rounded   '>
          <div className='flex   gap-6'>
          <div className='flex-col flex  mt-1 gap-6 rounded-md'>
            <h1 className='  flex flex-col font-semibold  decoration-gray-300      rounded-sm'>
                Applicant Name
              <span className=' text-gray-600 outline-none'>
              Midhun
              </span>{' '}
            </h1>
            <p className='  flex flex-col font-semibold decoration-gray-300   rounded  '>
              Email ID
              <span className=' text-gray-600'>midhun@gmailpdjgkg.com</span>
              
            </p>
            <h1 className=' flex flex-col font-semibold decoration-gray-300   rounded '>
              Mob Number
              <span className=' text-gray-600'>858544446</span>

            </h1>
          </div>
        
          <div className='mt-2 flex flex-col gap-6 rounded-md max-width-32 '>
            <h1 className=' flex flex-col decoration-gray-300     rounded '>
              <span className=' font-semibold outline-none'>Resume Link</span>
              <span className=' text-sky-700 font-semibold hover:underline hover:underline-offset-4 break-all cursor-pointer'>dcfbvjvcAdNIpKBIJaEYfSWi7wSu4A__dcfbvjvcAdNIpKBIJaEYfSWi7wSu4A__dcfbvjv.pdf</span>
            </h1>
            <h1 className=' flex flex-col decoration-gray-300   rounded '>
              <span className=' font-semibold outline-none'>Job title</span>
              <span className=' text-gray-600'>Web Developer</span>
            </h1>
            <h1 className=' flex flex-col  decoration-gray-300   rounded '>
              <span className=' font-semibold outline-none'>Location</span>
              <span className=' text-gray-600'>bangalore</span>
            </h1>
          </div>
          </div>
          <div className='   mt-4  gap-6'>
            <h1 className='w-auto text-sm '>
              <span className=' font-bold outline-none'>
                Applied Date and time
              </span>{' '}
              : 20/02/2025 10:00 AM
            </h1>
          </div>
          <div className=' flex   m-3 gap-4  text-base mt-6 '>
            <button className='bg-green-100   text-green-500 p-2 group font-semibold bg transition-all duration-500 rounded-md shadow-sm '>
              Profile
            </button>
            <button className='bg-orange-100  text-orange-500 p-2 group font-semibold bg transition-all duration-500 rounded-md shadow-sm'>
              Shortlist
            </button>
            <button className='bg-blue-100 text-blue-500 p-2 group font-semibold bg transition-all duration-500 rounded-md shadow-sm '>
              Send Email
            </button>
            <button className='bg-red-100 text-red-500 p-2 group font-semibold bg transition-all duration-500 rounded-md shadow-sm '>
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecAppliction
