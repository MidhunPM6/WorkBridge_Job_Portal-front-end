import { useEffect, useState } from 'react'
import React from 'react'
import { setSelectedJob } from '../../../Redux/SelectedJobSlice'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import logo from '../../../assets/lightlogo.png'
import SearchBar from '../LandingPage/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../../../Axios/Axios-instance'
import toast, { Toaster } from 'react-hot-toast'

const JobMain = () => {
  const [jobDetails, setJobDetails] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [jobData, setJobData] = useState({})
  const [jobs, setJobs] = useState([])
  const selectedJob = useSelector(state => state.selectedjob.jobSelected)
  const dispatch = useDispatch()

  const options = [
    'Software Engineer',
    'IT Support',
    'Teacher',
    'Marketing Executive',
    'Sales',
    'Service'
  ]

  // Modal Styles
  const customStyles = {
    overlay: {
      opacity: '100%',
      transition: 'opacity 3000ms ease-in-out',
      'overflow-y': 'auto',
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      'max-height': '90vh',
      transition: '.9s',
      overflow: 'auto'
    }
  }

  const handleDropdownChange = selectedOption => {
    console.log(selectedOption)
    setIsDropdownOpen(false)
  }

  const handleApply = job => {
    console.log(job)

    dispatch(setSelectedJob(job))

    setIsOpen(true)
  }

  const handleConfirmation = async () => {
    try {
      const job = {
        employerId: selectedJob.userID,
        jobId: selectedJob.id
      }

      const response = await axiosInstance.post('api/candidate/applyJob', job, {
        withCredentials: true
      })

      toast.success('Application submitted successfully', {
        duration: 1200
      })
      setTimeout(() => {
        setIsOpen(false)
      }, 1300)
    } catch (error) {
      toast.error(error.response.data.message || 'Failed to submit application')
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsResponse = await axiosInstance.get('api/common/jobs', {
          withCredentials: true
        })
        setJobs(jobDetailsResponse.data.jobs)
        console.log(selectedJob)
      } catch (error) {
        toast.error('Failed to fetch job details')
      }
    }
    fetchJobDetails()
  }, [])

  useEffect(() => {
    const checkDropdownOpen = () => {
      const dropdownMenu = document.querySelector('.Dropdown-menu')
      setIsDropdownOpen(dropdownMenu !== null)
    }

    document.addEventListener('click', checkDropdownOpen)
    return () => {
      document.removeEventListener('click', checkDropdownOpen)
    }
  }, [])

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <>
      <div className='min-h-screen bg-gray-50 p-6  '>
        <Toaster position='top-center' reverseOrder={false} />
        <div className='mb-8'>
          <SearchBar />
        </div>

        <div className='flex flex-col lg:flex-row gap-6 justify-center items-start'>
          <div className='w-full lg:w-80 bg-white rounded-xl shadow-md overflow-hidden'>
            <div className='p-6'>
              <div className='flex flex-col items-center mb-6'>
                <img src={logo} alt='Company Logo' className='w-20 mb-4' />
                <h2 className='text-xl font-semibold text-gray-800'>
                  Find Your Dream Job
                </h2>
              </div>

              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Select your position
                </label>
                <Dropdown
                  options={options}
                  placeholder='Select Category'
                  onChange={handleDropdownChange}
                  className='w-full text-sm border border-gray-300 rounded-lg p-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  menuClassName='max-h-64 overflow-auto'
                />
              </div>

              <div className='mb-6'>
                <h3 className='text-sm font-medium text-gray-700 mb-2'>
                  Skills
                </h3>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Enter skills'
                />
              </div>

              <div className='mb-6'>
                <h3 className='text-sm font-medium text-gray-700 mb-2'>
                  Job Type
                </h3>
                <div className='space-y-2'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id='fulltime'
                      className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                    />
                    <label
                      htmlFor='fulltime'
                      className='ml-2 text-sm text-gray-700'
                    >
                      Full time
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id='parttime'
                      className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                    />
                    <label
                      htmlFor='parttime'
                      className='ml-2 text-sm text-gray-700'
                    >
                      Part time
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id='remote'
                      className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                    />
                    <label
                      htmlFor='remote'
                      className='ml-2 text-sm text-gray-700'
                    >
                      Remote
                    </label>
                  </div>
                </div>
              </div>

              <button className='w-full py-2 px-4 bg-violet-900 hover:bg-violet-800 text-white font-medium rounded-lg shadow-sm transition-colors duration-200'>
                Find Jobs
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center min-h-screen overflow-auto bg-gray-50  lg:w-[70vw] w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-10'>
            {jobs && jobs.length > 0 ? (
              jobs.map(jobObj => (
                <div
                  key={jobObj._id}
                  className='flex flex-col   justify-between gap-4 items-start  mt-6 w-[90%] md:w-[80%] bg-white rounded-lg shadow-md p-10 hover:shadow-lg transition-shadow duration-200'
                >
                  <div className='flex flex-col'>
                    <div className='flex  mb-4 w-full md:w-auto'>
                      <div className=' rounded-sm bg-gray-100 shadow-sm overflow-hidden w-16 h-16'>
                        <img
                          src={
                            jobObj.company_logo ||
                            'https://cdn.dribbble.com/userupload/16364997/file/original-8a26f0cf7237b32d4a7c9a2851d7a3b9.jpg'
                          }
                          alt={jobObj.company_name || 'Company logo'}
                          className='object-contain w-full h-full p-1 '
                          onError={e => {
                            e.target.src =
                              'https://cdn.dribbble.com/userupload/16364997/file/original-8a26f0cf7237b32d4a7c9a2851d7a3b9.jpg'
                          }}
                        />
                      </div>
                      <div className='ml-4 flex'>
                        <h2 className='mt-2  text-gray-600 flex items-end cursor-pointer font-semibold text-lg hover:underline underline-offset-4'>
                          {jobObj.company_name}
                        </h2>
                      </div>
                    </div>

                    <h1 className='text-xl font-semibold text-gray-800'>
                      {jobObj.title}
                    </h1>

                    <h2 className='font-light'>
                      {' '}
                      {jobObj.location} - <span>{jobObj.job_type}</span>
                    </h2>

                    <span className='mt-2 font-medium text-gray-700 '>
                      <span className=' font-semibold'>Salary - ₹</span>
                      {jobObj.salary}
                    </span>
                    <p className='mt-2 text-lg font-semibold text-gray-800'>
                      Job Description
                    </p>
                    <div
                      className='prose max-h-96 w-full max-w-none overflow-auto lg:text-base mt-2'
                      dangerouslySetInnerHTML={{
                        __html: jobObj.job_description
                      }}
                    />
                  </div>

                  <div className='flex flex-col  items-end p-4  gap-3 w-full  '>
                    <button
                      onClick={() => handleApply(jobObj)}
                      className='bg-blue-100 flex  gap-1 text-blue-700   p-3  rounded-md hover:bg-blue-200 font-semibold   w-full md:w-auto shadow-md hover:shadow-lg transition-all duration-300'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
                        />
                      </svg>
                      Apply now
                    </button>
                    <button className='bg-white flex gap-1  justify-center text-black  p-3  hover:bg-gray-100  rounded-md hover:shadow-lg font-semibold  w-full md:w-auto shadow-md  transition-all duration-300'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='size-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                        />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center  w-full h-full'>
                <div className='bg-white rounded-xl shadow-sm p-8 max-w-md w-full text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-16 w-16 mx-auto text-gray-400 mb-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <h2 className='text-xl font-semibold text-gray-700 mb-2'>
                    No Jobs Found
                  </h2>
                  <p className='text-gray-500 mb-4'>
                    Try adjusting your search filters
                  </p>
                  <button className='px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors'>
                    Refresh Jobs
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {modalIsOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden'>
              <div className='border-b px-6 py-4 flex justify-between items-center'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Confirm Application
                </h3>
                <button
                  onClick={closeModal}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <div className='p-6 space-y-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 h-auto w-auto p-2 text-xs  bg-blue-100 rounded-md flex items-center justify-center'>
                    <span className='text-blue-600 font-bold'>
                      {selectedJob.company_name}
                    </span>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-gray-900'>
                      {selectedJob.title}
                    </h4>
                    <p className='text-gray-600'>
                      {selectedJob.company_name} • {selectedJob.location}
                    </p>
                  </div>
                </div>

                <div className='border-t border-b border-gray-200 py-4 space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Employment Type</span>
                    <span className='font-medium'>{selectedJob.job_type}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Salary Range</span>
                    <span className='font-medium'>{selectedJob.salary}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Posted</span>
                    <span className='font-medium'>
                      {' '}
                      {new Date(selectedJob.updatedAt).toLocaleDateString(
                        'en-GB',
                        {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        }
                      )}
                    </span>
                  </div>
                </div>

                <div className='pt-2'>
                  <p className='text-gray-700'>
                    Are you sure you want to apply for this position?
                  </p>
                </div>
              </div>

              <div className='bg-gray-50 px-6 py-4 flex justify-end space-x-3'>
                <button
                  onClick={closeModal}
                  className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmation}
                  className='px-4 py-2 bg-green-600 shadow-lg text-white rounded-md hover:bg-green-700'
                >
                  Confirm Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default JobMain
