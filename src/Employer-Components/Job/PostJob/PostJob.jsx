import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { axiosInstance } from '../../../Axios/Axios-instance'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'

const options = ['Full-time', 'Part-time', 'Remote']

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    salary: '',
    job_type: '',
    job_description: ''
  })

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
      const { lat, lng } = await getLatLng(results[0])
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

  const handlePost = async () => {
    console.log('Form Data:', formData)
    try {
      const response = await axiosInstance.post(
        '/api/employer/postjob',
        formData,
        { withCredentials: true }
      )
      console.log('Job posted:', response.data)
    } catch (error) {
      console.error('Error posting job:', error)
    }
  }

  return (
    <div className='flex'>
      <div className='flex flex-col lg:p-6 p-6 lg:w-[40vw] rounded-sm text shadow-[0px_0px_15px_0px_rgba(181,181,181,1)] bg-white'>
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='text-2xl font-semibold text-center'>
            Publish a Job Opening
          </h1>
          <p className='lg:w-[30vw] text-sm mt-2 text-gray-700'>
            Fill out the details below to publish your job opening and connect
            with{' '}
            <span className='lg:flex lg:justify-center'>
              the right candidates faster.
            </span>
          </p>
        </div>

        <div className='flex-col gap-10 mt-10'>
          <div className='lg:flex-row flex flex-col gap-6'>
            <input
              type='text'
              name='title'
              placeholder='Job Title'
              onChange={handleChange}
              className='text-sm p-2 bg-gray-50 shadow rounded-sm border border-gray-200'
            />
            <input
              type='text'
              name='company_name'
              placeholder='Company Name'
              onChange={handleChange}
              className='text-sm p-2 w-full bg-gray-50 shadow rounded-sm border border-gray-200'
            />
          </div>

          <div className='lg:flex-row flex flex-col gap-6 mt-4'>
            <div className='relative w-full'>
              <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Enter a location'
                className='text-sm p-2 w-full bg-gray-50 shadow rounded-sm border border-gray-200'
              />
              {status === 'OK' && (
                <ul className='absolute bg-white border border-gray-200 rounded mt-1 z-10 max-h-40 overflow-auto w-full'>
                  {data.map(({ place_id, description }) => (
                    <li
                      key={place_id}
                      onClick={() => handleSelect(description)}
                      className='p-2 hover:bg-gray-100 cursor-pointer text-sm'
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
              placeholder='Salary Range'
              onChange={handleChange}
              className='text-sm p-2 w-full bg-gray-50 shadow rounded-sm border border-gray-200'
            />
          </div>

          <div className='flex gap-6 mt-4'>
            <Dropdown
              options={options}
              placeholder='Select Job Type'
              className='text-sm w-full bg-gray-50'
              onChange={handleDropdownChange}
              name='job_type'
              controlClassName='p-2 bg-gray-50 shadow rounded-sm border border-gray-200'
              menuClassName='bg-white shadow border border-gray-200 rounded-sm'
            />
          </div>

          <textarea
            placeholder='Job Description'
            name='job_description'
            onChange={handleChange}
            className='text-sm w-full max-h-40 h-24 bg-gray-50 shadow mt-6 p-3 rounded-sm border border-gray-200'
            rows='5'
          ></textarea>
        </div>

        <div className='flex flex-col items-center mt-6'>
          <button
            onClick={handlePost}
            className='px-6 py-2 mt-8 text-white bg-violet-900 hover:bg-violet-800 rounded-sm shadow-lg'
          >
            Post Job
          </button>
          <div className='flex justify-end mt-6 text-xs text-slate-600'>
            <p>
              <span className='font-semibold'>Please Note:</span> All job
              listings must follow our guidelines. Discriminatory or misleading
              content will be removed. Ensure accuracy and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostJob
