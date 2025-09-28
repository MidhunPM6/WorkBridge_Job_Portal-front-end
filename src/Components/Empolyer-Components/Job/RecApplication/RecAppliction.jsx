import React, { useEffect,useState } from 'react'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserProfile } from '../../../../Redux/EmployerSlice'

const RecAppliction = () => {
  const [applications, setApplications] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchRecivedApplication = async () => {
      try {
        const response = await axiosInstance.get('/api/employer/applications', {
          withCredentials: true
        })
        console.log(response.data)

        setApplications(response.data.data.applicationData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRecivedApplication()
  }, [])

  const viewProfile = application => {
    let data = {
      application,
      role: 'candidate'
    }
    dispatch(setUserProfile(data))
    navigate('/candidateProfile')
  }

  const handleApplicationStatus = async (application,status) => {
   let data ={
    application,
    status
   }
    try {
      const response = await axiosInstance.post('/api/employer/shortList',data)
    } catch (error) {
      alert(error.response.message)
    }
  }


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
                      {application?.candidateData?.name}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Email ID
                    </span>
                    <span className='text-gray-800 break-all'>
                      {application?.candidateData?.email}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Mobile Number
                    </span>
                    <span className='text-gray-800'>
                      {application?.profileData?.mobile}
                    </span>
                  </div>
                </div>

                <div className='flex-1 space-y-4'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Resume Link
                    </span>
                    <a
                      href={application?.profileData?.resume}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`text-blue-600  ${
                        application?.profileData?.resume
                          ? 'hover:text-blue-800 hover:underline'
                          : 'text-gray-900'
                      }  text-sm break-all`}
                    >
                      {application?.profileData?.resume?.split('/').pop() ||
                        'Not Provided'}
                    </a>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Job Title
                    </span>
                    <span className='text-gray-800'>
                      {application?.jobData?.title}
                    </span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-500'>
                      Location
                    </span>
                    <span className='text-gray-800'>
                      {application?.jobData?.location}
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
                <button
                  onClick={() => viewProfile(application)}
                  className='flex gap-1 px-4 py-2 text-sm font-medium rounded-md bg-green-100 text-green-600 hover:bg-green-200 transition-colors shadow-sm items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='size-6'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  Profile
                </button>
                <button  className='flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors shadow-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='size-6'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clip-rule='evenodd'
                    />
                  </svg> 
                  Shortlist
                </button>

                <a
                  href={`mailto:${application?.candidateData?.email}`}
                  target='_blank'
                  className='flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors shadow-sm'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='size-6'
                  >
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                  </svg>
                  Send Email
                </a>

                <button className='flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors shadow-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='size-6'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z'
                      clip-rule='evenodd'
                    />
                  </svg>
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
