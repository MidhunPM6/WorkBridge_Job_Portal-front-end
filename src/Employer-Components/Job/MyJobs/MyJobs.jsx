import React, { useEffect } from 'react'
import { axiosInstance } from '../../../Axios/Axios-instance'
import { use } from 'react'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-dropdown/style.css'
import ReactQuill from 'react-quill'
import Dropdown from 'react-dropdown'
import toast, { Toaster } from 'react-hot-toast'
import SelectDrop from 'react-select'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import { loadLocation } from '../../../Components/common/loadLocation.js'

const MyJobs = () => {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    salary: '',
    job_type: '',
    job_description: '',
    id: ''
  })
  const [jobs, setJobs] = useState([])
  const [editModelOpen, setEditModelOpen] = useState(false)
  const [jobTitle, setJobTitle] = useState([])
  const options = ['Full-time', 'Part-time', 'Remote']
  const modules = {
    toolbar: [
      [{ header: [3, false] }],
      ['bold', 'italic'],
      [{ list: 'bullet' }]
    ]
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelect = async address => {
    setValue(address, false)
    clearSuggestions()
    setFormData(prev => ({
      ...prev,
      location: address
    }))
    try {
      const results = await getGeocode({ address })
      const { lat, lng } = getLatLng(results[0])
      console.log('Coordinates: ', { lat, lng })
    } catch (error) {
      console.error('Error getting location:', error)
    }
  }

  const handleDropdownChange = selectedOption => {
    setFormData(prev => ({
      ...prev,
      job_type: selectedOption.value
    }))
  }

  const handleDesignationChange = selectedOption => {
    setFormData(prev => ({
      ...prev,
      title: selectedOption?.value || ''
    }))
  }

  const handleJobDescriptionChange = value => {
    setFormData(prev => ({
      ...prev,
      job_description: value
    }))
  }

  const handleEditJob = async jobID => {
    const updateform = {
      ...formData,
      id: jobID
    }
    setFormData(updateform)
    setEditModelOpen(true)
  }

  useEffect(() => {
    if (!formData.location) {
      loadLocation()
    }
  }, [])

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        const response = await axiosInstance.get('api/employer/myjobs', {
          withCredentials: true
        })
        setJobs(response.data.jobs)
        console.log('Fetched jobs:', response.data.jobs)
      } catch (error) {
        console.log('Error fetching jobs:', error || error)
      }
    }
    fetchMyJobs()
  }, [])

  useEffect(() => {
    const fetchDesignationdata = async () => {
      try {
        const res = await fetch('/designationList.json')
        const data = await res.json()

        // Format data for react-select
        const mapped = data.map(d => ({
          label: d.title,
          value: d.title
        }))
        setJobTitle(mapped)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDesignationdata()
  }, [])

  const updateJob = async () => {
    console.log(formData)

    try {
      const response = await axiosInstance.patch(
        `api/employer/updateJob/${formData._id}`,
        formData,
        {
          withCredentials: true
        }
      )
      toast.success('Job updated successfully!', {
        duration: 1200
      })
      setTimeout(() => {
        setEditModelOpen(false)
      }, 1300)
    } catch (error) {
      console.error('Error updating job:', error)
      toast.error('Failed to update job. Please try again.')
    }
  }

  return (
    <div className='flex flex-col items-center   min-h-screen    lg:w-[50vw] w-full  pb-10 '>
      <Toaster position='top-center' reverseOrder={false} />
      <h1 className='text-2xl font-semibold  text-center'>
        Edit or Manage Posts
      </h1>
      {jobs &&
        jobs.map(job => (
          <div
            key={job.id}
            className='flex flex-col   mt-6 w-[90%] md:w-[50vw] bg-white rounded-md border border-gray-200  p-6'
          >
            <h1 className='text-xl font-semibold'>{job.title}</h1>
            <h2 className='mt-2 text-md'>
              {job.company_name} -
              <span className='font-light'> {job.location}</span>
            </h2>
            <span className='mt-2 font-medium text-gray-600 text-md'>
              <span className='font-Kaushan font-semibold'>₹</span>
              {job.salary}
            </span>
            <p className='mt-1'>{job.job_type}</p>
            <p className='mt-2 text-lg font-semibold'>Job Description</p>
            <div
              className='prose max-h-52 overflow-auto text-sm lg:text-base mt-2'
              dangerouslySetInnerHTML={{ __html: job.job_description }}
            />
            <div className='lg:flex-row flex flex-col justify-end mt-4 gap-3  text-sm'>
              <button
                onClick={() => handleEditJob(job.id)}
                className=' p-3  flex justify-center  gap-1     bg-green-100 hover:bg-green-50  text-green-700 rounded-md shadow-md transition-all duration-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  className='size-5 text-green-700'
                >
                  <path d='M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z'></path>
                </svg>
                Edit
              </button>
              <button className='flex gap-1 bg-red-600 text-white p-3 justify-center rounded-md shadow-md hover:bg-red-700 transition-all duration-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  className='size-5 text-white'
                >
                  <path d='M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z'></path>
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}

      {editModelOpen && (
        <div className='flex justify-center items-center '>
          <div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
            onClick={() => setEditModelOpen(false)}
          >
            <div
              className='bg-white rounded-lg shadow-md flex flex-col gap-3 items-center '
              onClick={e => e.stopPropagation()}
            >
              <div
                className='flex flex-col lg:p-8 p-6 lg:w-[40vw] w-[90vw] lg:min-h-[75dvh] rounded-md shadow-[0px_0px_5px_0px_rgba(181,181,181,1)] hover:shadow-[0px_0px_10px_0px_rgba(181,181,181,1)] bg-white transition-all duration-300'
                onClick={e => e.stopPropagation()}
              >
                <div className='flex flex-col justify-center items-center w-full'>
                  <h1 className='text-2xl font-semibold text-center'>
                    Edit Job Opening
                  </h1>
                  <p className='w-full flex  text-sm mt-2 text-gray-700'>
                    Update the details below to modify your job opening and
                    continue connecting with qualified candidates.
                  </p>
                </div>

                <div className='flex-col gap-10 mt-10'>
                  <div className='lg:flex-row flex flex-col gap-6'>
                    <div className='w-full'>
                      <SelectDrop
                        name='designation'
                        options={jobTitle || []}
                        value={jobTitle.find(
                          opt => opt.value === formData.title
                        )}
                        onChange={handleDesignationChange}
                        isClearable
                        placeholder='Select Designation'
                      />
                    </div>
                    <input
                      type='text'
                      name='company_name'
                      value={formData.company_name}
                      placeholder='Company Name'
                      onChange={handleChange}
                      className='p-2 w-full rounded-md border border-gray-300'
                    />
                  </div>

                  <div className='lg:flex-row flex flex-col gap-6 mt-4'>
                    <div className='relative w-full'>
                      <input
                        type='text'
                        value={formData.location || value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Enter a location'
                        className='p-2 w-full rounded-md border border-gray-300'
                      />
                      {status === 'OK' && (
                        <ul className='absolute bg-white border border-gray-200 rounded mt-1 z-10 max-h-40 overflow-auto w-full'>
                          {data.map(({ place_id, description }) => (
                            <li
                              key={place_id}
                              onClick={() => handleSelect(description)}
                              className='p-2 hover:bg-gray-100 cursor-pointer'
                            >
                              {description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <input
                      type='text'
                      name='salary'
                      value={formData.salary}
                      placeholder='Salary Range'
                      onChange={handleChange}
                      className='p-2 w-full rounded-md border border-gray-300'
                    />
                  </div>

                  <div className='flex gap-6 mt-4'>
                    <Dropdown
                      options={options}
                      placeholder='Select Job Type'
                      value={options.find(
                        opt => opt.value === formData.job_type
                      )}
                      className='w-full rounded-md'
                      onChange={handleDropdownChange}
                      name='job_type'
                      controlClassName='p-2 bg-gray-50 shadow rounded-sm border border-gray-200'
                      menuClassName='bg-white shadow border border-gray-200 rounded-sm'
                    />
                  </div>
                  <div className='mt-4'>
                    <ReactQuill
                      theme='snow'
                      value={formData.job_description}
                      onChange={handleJobDescriptionChange}
                      modules={modules}
                    />
                  </div>
                </div>

                <div className='flex flex-col items-center mt-6'>
                  <button
                    onClick={updateJob}
                    className='lg:w-[10vw] w-full p-3 mt-8 text-white bg-violet-900 hover:bg-violet-950 rounded-md shadow-lg'
                  >
                    Update Job
                  </button>
                  <div className='flex justify-end mt-6 text-xs text-slate-600'>
                    <p>
                      <span className='font-semibold'>Please Note:</span> All
                      job listings must follow our guidelines. Discriminatory or
                      misleading content will be removed. Ensure accuracy and
                      transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyJobs
