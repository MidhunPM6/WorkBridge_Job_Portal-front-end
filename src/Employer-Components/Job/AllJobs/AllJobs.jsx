import React, { useEffect,useState } from 'react'
import { axiosInstance } from '../../../Axios/Axios-instance'
import toast, { Toaster } from 'react-hot-toast'



const AllJobs = () => {
const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        // Handle the response data as needed
        const response = await axiosInstance.get('api/employer/alljobs', {
          withCredentials: true
        })
        console.log('Fetched jobs:', response);
        
        setJobs(response.data.jobs)
      } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || 'Failed to fetch jobs', {
          duration: 1500
        })
      }
    }
    fetchAllJobs()
  }, [])


  return (
    <div className='flex flex-col items-center  min-h-screen   bg-gray- font-poppins  lg:w-[50vw] w-full  pb-10 '>
      <h1 className='text-2xl font-semibold  text-center'>
        Explore All Job Listings
      </h1>
      {jobs && jobs.length > 0 && 
        jobs.map((job, index) => (
          <div key={index} className='flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mt-6 w-[90%] md:w-[50vw] bg-white rounded-md border border-gray-200  p-6'>
            <div className='flex flex-col flex-1'>
              <h1 className='text-xl font-semibold'>{job.title}</h1>
              <h2 className='mt-2 text-md'>
                {job.company_name} -<span className='font-light'> {job.location}</span>
              </h2>
              <span className='mt-2 font-medium text-gray-600 text-md'>
                <span className='font-Kaushan font-semibold'>₹</span>
                {job.salary}
              </span>
          <p className='mt-1'>Part-Time</p>
          <p className='mt-2 text-lg font-semibold'>Job Description</p>
          <p className='text-gray-700 whitespace-pre-line mt-2 w-full max-h-52 overflow-hidden text-ellipsis leading-relaxed '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus
            quasi rerum suscipit minima animi dicta temporibus excepturi
            molestiae eum reprehenderit consectetur accusantium fugit ad in at,
            cumque adipisci placeat.
          </p>
          <div className='flex justify-end mt-4 gap-2 text-sm'>
            <button className=' p-2   bg-green-100 hover:bg-green-200  text-green-700 rounded-sm '>
              Connect
            </button>
            <button className='bg-violet-800 text-white p-2 rounded-sm hover:bg-violet-900'>
              Company profile
            </button>
          </div>
        </div>
    </div>
      ))}
      </div>
    )
}

export default AllJobs
