import React, { useEffect, useState } from 'react'


import useJob from '../../../../hooks/employer/useJob'

const AllJobs = () => {
  const [jobs, setJobs] = useState([])
  const { getAllJobs } = useJob()

  useEffect(() => {
    const fetchAllJobs = async () => {
        // Handle the response data as needed
        const { success, response,error } = await getAllJobs()
        console.log(response)
        if (success) setJobs(response.data.jobs)
    }
    fetchAllJobs() 
  }, [])

  return (
    <div className='flex flex-col items-center min-h-screen w-full lg:w-[50vw] pb-10 px-4 lg:px-0'>
      <h1 className='text-xl lg:text-2xl font-semibold text-center mb-6 lg:mb-8'>
        Explore All Job Listings
      </h1>

      {jobs && jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div
            key={index}
            className='flex flex-col justify-between gap-4 w-full lg:w-[90%] xl:w-[50vw] bg-white rounded-lg border border-gray-200 p-4 lg:p-6 mb-6 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='flex flex-col w-full'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-2'>
                <div className='flex-1'>
                  <h1 className='text-lg lg:text-xl font-semibold'>
                    {job.title}
                  </h1>
                  <h2 className='mt-1 lg:mt-2 text-base lg:text-md'>
                    {job.company_name} -{' '}
                    <span className='font-light'>{job.location}</span>
                  </h2>

                  <div className='flex flex-wrap gap-3 mt-2'>
                    <span className='font-medium text-gray-600 text-sm lg:text-md'>
                      <span className='font-semibold'>Salary up to:</span> ₹
                      {job.salary}
                    </span>
                    <span className='bg-gray-100 px-2 py-1 rounded-full text-sm'>
                      {job.job_type}
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <p className='text-md lg:text-lg font-semibold'>
                  Job Description
                </p>
                <div
                  className='prose max-h-52 overflow-auto text-sm lg:text-base mt-2'
                  dangerouslySetInnerHTML={{ __html: job.job_description }}
                />
              </div>

              <div className='flex flex-col sm:flex-row justify-end mt-6 gap-3'>
                <button className='px-4 py-3 bg-green-100 hover:bg-green-50 font-semibold text-green-700 rounded-md shadow-sm hover:shadow-md transition-all text-sm '>
                  Connect
                </button>
                <button className='px-4 py-3 bg-violet-800 text-white rounded-md shadow-sm hover:bg-violet-900 hover:shadow-md transition-all text-sm font-semibold'>
                  Company Profile
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='text-gray-500 text-center py-10'>
          No job listings available at the moment.
        </div>
      )}
    </div>
  )
}

export default AllJobs
