import React, { useContext, useEffect, useState } from 'react'
import { EmpAuth } from '../../../Context/EmployerUserDetails'
import axios from 'axios'
import { axiosInstance } from '../../../Axios/Axios-instance'

const RecAppliction = () => {
  const [applications, setApplications] = useState('')

  useEffect(() => {
    const fetchRecivedApplication = async () => {
      try {
        const response = await axiosInstance.get('/api/employer/applications', {
          withCredentials: true
        })
        console.log(response.data.applications)

        setApplications(response.data.applications)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRecivedApplication()
  }, [])

  return (
    <>
      <div className='flex flex-col items-center w-full p-4 lg:p-8 gap-4'>
        <div className='flex flex-col items-center justify-center text-center w-full max-w-4xl mb-8'>
          <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800'>
            Candidate Applications
          </h1>
          <p className='text-sm lg:text-base mt-2 text-gray-600 max-w-2xl'>
            Review all applications submitted to your job listings. View
            resumes, shortlist top candidates, and take the next step in your
            hiring process.
          </p>
        </div>

        {applications &&
          applications.map(application => (
            <div className='flex flex-col w-full lg:w-[40vw] max-w-4xl p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
              <div className='flex flex-col lg:flex-row gap-6 w-full'>
                <div className='flex-1 space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Applicant Name
                    </span>
                    <span className='text-gray-800 font-medium'>
                      {application.userID.name}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Email ID
                    </span>
                    <span className='text-gray-800 break-all'>
                      {application.userID.email}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Mobile Number
                    </span>
                    <span className='text-gray-800'>
                      {application.profileId?.mobile}
                    </span>
                  </div>
                </div>

                <div className='flex-1 space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Resume Link
                    </span>
                    <a
                      href={application.profileId?.resume}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`text-blue-600  ${
                        application.profileId?.resume
                          ? 'hover:text-blue-800 hover:underline'
                          : 'text-gray-900'
                      }  text-sm break-all`}
                    >
                      {application.profileId?.resume?.split('/').pop() ||
                        'Not Provided'}
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Job Title
                    </span>
                    <span className='text-gray-800'>
                      {application.jobId.title}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Location
                    </span>
                    <span className='text-gray-800'>
                      {application.jobId.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-6 border-t border-gray-100 pt-4'>
                <p className='text-sm text-gray-600'>
                  <span className='font-medium'>Applied Date and time:</span>{' '}
                  {new Date(application.createdAt).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
              </div>

              <div className='flex flex-wrap justify-center gap-3 mt-6'>
                <button className='px-4 py-2 text-sm font-medium rounded-md bg-green-100 text-green-600 hover:bg-green-200 transition-colors shadow-sm'>
                  Profile
                </button>
                <button className='px-4 py-2 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors shadow-sm'>
                  Shortlist
                </button>

                <button className='px-4 py-2 text-sm font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors shadow-sm'>
                  Send Email
                </button>

                <button className='px-4 py-2 text-sm font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors shadow-sm'>
                  Reject
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default RecAppliction
