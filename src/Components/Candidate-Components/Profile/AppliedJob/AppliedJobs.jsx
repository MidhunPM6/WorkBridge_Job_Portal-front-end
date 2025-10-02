import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiSearch, FiBriefcase, FiClock } from 'react-icons/fi'
import { format } from 'date-fns'
import { setAppliedJobs } from '../../../../Redux/UserSlice'

const AppliedJobs = () => {
  const appliedJobs = useSelector(state => state.user.appliedJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAppliedJobs(appliedJobs))
    console.log(appliedJobs);
    
  }, [appliedJobs])

  return (
    <div className=' p-6'>
      <div className='max-w-6xl mx-auto '>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Applied Jobs
          </h1>
          <p className='text-gray-600 mb-4'>
            Here you can see all the jobs you have applied for. Track your
            application status and stay updated.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {appliedJobs.map(job => (
            <div
              key={job.id}
              className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300'
            >
              <div className='p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center'>
                    <img
                      src={job.employerId.profilePic}
                      alt={`${job.company} logo`}
                      className='w-12 h-12 rounded-lg object-cover mr-4'
                    />
                    <div>
                      <h3 className='font-semibold text-lg'>
                        {job.jobId.title}
                      </h3>
                      <p className='text-gray-500 text-sm'>
                        {job.jobId.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      job.status === 'interview'
                        ? 'bg-blue-100 text-blue-800'
                        : job.status === 'review'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    Pending
                  </span>
                </div>

                <h2 className='text-xl font-bold mb-2 text-gray-800'>
                  {job.jobId.company_name}
                </h2>

                <div className='flex items-center text-gray-500 mb-4 text-sm'>
                  <FiBriefcase className='mr-2' />
                  <span className='mr-4'>{job.jobId.job_type}</span>
                  <FiClock className='mr-2' />
                  <span>
                    {' '}
                    {format(new Date(job.jobId.updatedAt), 'MMM dd')}
                  </span>
                </div>

                <div className='bg-gray-50 p-3 rounded-lg'>
                  <p className='text-sm text-gray-600'>
                    <span className='font-medium'>Update:</span>{' '}
                    {job.jobId.update || 'No updates yet'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs
