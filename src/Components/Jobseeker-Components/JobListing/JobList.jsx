import { useEffect, useState, useRef } from 'react'
import React from 'react'
import { setSelectedJob } from '../../../Redux/SelectedJobSlice'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import logo from '../../../assets/lightlogo.png'
import Modal from 'react-modal'
import JobSubmittion from '../JobSubmit/JobSubmittion'
import SearchBar from '../LandingPage/SearchBar'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const JobMain = () => {
  const [jobDetails, setJobDetails] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
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

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsResponse = await axios.get('/storedjobdetails')
        console.log(jobDetailsResponse.data)
        if (jobDetailsResponse.status === 200) {
          setJobDetails(jobDetailsResponse.data)
        }
      } catch (error) {
        alert(error + 'ERROR')
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

          <div className='flex flex-col items-center py-6 h-screen overflow-auto bg-gray-50 font-poppins lg:w-[50vw] w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-10'>
            {jobDetails && jobDetails.length > 0 ? (
              jobDetails.map(jobObj => (
                <div
                  key={jobObj._id}
                  className='flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mt-6 w-[90%] md:w-[80%] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200'
                >
                  <div className='flex flex-col flex-1'>
                    <h1 className='text-xl font-semibold text-gray-800'>
                      {jobObj.tittle}
                    </h1>
                    <h2 className='mt-2 text-sm text-gray-600'>
                      {jobObj.comapany_name}
                      <span className='font-light'> • {jobObj.location}</span>
                    </h2>
                    <span className='mt-2 font-medium text-gray-700 text-sm'>
                      <span className='font-Kaushan font-semibold'>₹</span>
                      {jobObj.salary}
                    </span>
                    <p className='mt-3 text-sm font-semibold text-gray-800'>
                      Job Description
                    </p>
                    <div className='text-sm whitespace-pre-line mt-2 w-full max-h-52 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 leading-relaxed pr-2'>
                      {jobObj.job_description}
                    </div>
                  </div>

                  <div className='flex flex-col items-start md:items-end gap-2 w-full md:w-auto'>
                    <button
                      onClick={() => handleApply(jobObj)}
                      className='bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition-colors duration-200 w-full md:w-auto'
                    >
                      Apply now
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
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <JobSubmittion setIsOpen={setIsOpen}></JobSubmittion>
      </Modal>
    </>
  )
}
export default JobMain
