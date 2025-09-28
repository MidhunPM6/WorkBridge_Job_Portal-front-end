import { useEffect, useState } from 'react'
import { setSelectedJob } from '../../../Redux/SelectedJobSlice'
import SearchBar from '../LandingPage/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { setAppliedJobs } from '../../../Redux/UserSlice'
import { setCompanyProfile } from '../../../Redux/EmployerSlice'
import { useNavigate } from 'react-router-dom'
import FilterPanel from './FilterPanel'
import ConfirmModal from './ConfirmModal'
import useJobList from '../../../hooks/candidate/useJobList'
import Button from '../../../Components/ui/Button'

const JobMain = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [jobs, setJobs] = useState([])

  const appliedJobs = useSelector(state => state.user.appliedJobs)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { fetchJobsAndAppliedStatus } = useJobList()

  const handleApply = job => {
    dispatch(setSelectedJob(job))
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchJobsAndApplied = async () => {
      const { response, success } = await fetchJobsAndAppliedStatus()
      if (success) {
        const { jobsRes, appliedRes } = response
        setJobs(jobsRes.data.jobs)
        dispatch(setAppliedJobs(appliedRes.data.appliedJobs))
      }
    }
    fetchJobsAndApplied()
  }, [])

  const showCompanyProfile = job => {
    dispatch(setCompanyProfile(job))
    navigate('/companyProfileView')
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
            <FilterPanel />
          </div>

          <div className='flex flex-col items-center min-h-screen overflow-auto bg-gray-50  lg:w-[70vw] w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-10'>
            {jobs && jobs.length > 0 ? (
              jobs.map(jobObj => (
                <div
                  key={jobObj.id}
                  className='flex flex-col   justify-between gap-4 items-start  mt-6 w-full md:w-[80%]  rounded-lg shadow-md p-10 hover:shadow-lg transition-shadow duration-200'
                >
                  <div className='flex flex-col'>
                    <div className='flex  mb-4 w-full md:w-auto'>
                      <div className=' rounded-sm bg-gray-200 shadow-sm overflow-hidden w-16 h-16'>
                        <img
                          src={
                            jobObj.userID.profilePic ||
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
                        <Button
                          handleClick={() => showCompanyProfile(jobObj)}
                          className='mt-2 p-2'
                        >
                          {jobObj.company_name}
                        </Button>
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
                    <Button
                      handleClick={() => handleApply(jobObj)}
                      disabled={
                        appliedJobs.some(
                          item =>
                            item.jobId._id?.toString() === jobObj.id?.toString()
                        ) && true
                      }
                      className={`bg-blue-100 flex  gap-1 text-blue-700 ${
                        appliedJobs.some(
                          item =>
                            item.jobId._id?.toString() === jobObj.id?.toString()
                        ) && 'bg-gray-300 text-gray-600 hover:bg-gray-300  '
                      }  p-3   hover:bg-blue-200 font-semibold   w-full md:w-auto transition-all duration-300`}
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
                      {appliedJobs.some(
                        item =>
                          item.jobId._id?.toString() === jobObj.id?.toString()
                      )
                        ? 'Already Applied'
                        : 'Apply Now'}
                    </Button>
                    <Button className='bg-white flex gap-1 p-3  hover:bg-gray-100   font-semibold  w-full md:w-auto shadow-md'>
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
                    </Button>
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
                  <Button className=' py-2 bg-blue-100 text-blue-600  hover:bg-blue-200 '>
                    Refresh Jobs
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        {modalIsOpen && <ConfirmModal setIsOpen={setIsOpen} />}
      </div>
    </>
  )
}
export default JobMain
