import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-dropdown/style.css'
import { axiosInstance } from '../../../Axios/Axios-instance'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import { loadLocation } from '../../../Components/common/loadLocation.js'
import toast, { Toaster } from 'react-hot-toast'
import SelectDrop from 'react-select'

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    salary: '',
    job_type: '',
    job_description: ''
  })
  const [jobTitle, setJobTitle] = useState([])

  const options = ['Full-time', 'Part-time', 'Remote']
  const modules = {
    toolbar: [
      [{ header: [3, false] }],
      ['bold', 'italic'],
      [{ list: 'bullet' }]
    ]
  }
  useEffect(() => {
    const fetchDesignationdata = async () => {
      try {
        const res = await fetch('/designationList.json')
        const data = await res.json()
        console.log(data)

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

  const handlePost = async () => {
    console.log(formData.job_description)

    try {
      const response = await axiosInstance.post(
        '/api/employer/postjob',
        formData,
        { withCredentials: true }
      )
      toast.success(response.data.message, {
        duration: 1200,
        onclose: () => {
          setFormData({
            title: '',
            company_name: '',
            location: '',
            salary: '',
            job_type: '',
            job_description: ''
          })
          setValue('')
          clearSuggestions()
        }
      })
    } catch (error) {
      console.error('Error posting job:', error)
      toast.error(error.response?.data?.message || 'Failed to post job', {
        duration: 1500
      })
    }
  }

  useEffect(() => {
    loadLocation()
  }, [])

  return (
    <div className='flex justify-center items-center p-6 '>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex flex-col lg:p-6 p-6 lg:w-[40vw] rounded-md  shadow-[0px_0px_5px_0px_rgba(181,181,181,1)]  hover:shadow-[0px_0px_10px_0px_rgba(181,181,181,1)] bg-white transition-all duration-300'>
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
            <div className='w-full'>
              <SelectDrop
                name='designation'
                options={jobTitle}
                value={jobTitle.find(opt => opt.value === formData.designation)}
                onChange={handleDesignationChange}
                isClearable
                placeholder='Select Designation'
              />
            </div>
            <input
              type='text'
              name='company_name'
              placeholder='Company Name'
              onChange={handleChange}
              className='  p-2 w-full   rounded-md border border-gray-300'
            />
          </div>

          <div className='lg:flex-row flex flex-col gap-6 mt-4'>
            <div className='relative w-full'>
              <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Enter a location'
                className=' p-2 w-full   rounded-md border border-gray-300'
              />
              {status === 'OK' && (
                <ul className='absolute bg-white border border-gray-200 rounded mt-1 z-10 max-h-40 overflow-auto w-full'>
                  {data.map(({ place_id, description }) => (
                    <li
                      key={place_id}
                      onClick={() => handleSelect(description)}
                      className='p-2 hover:bg-gray-100 cursor-pointer '
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
              className='  p-2 w-full   rounded-md border border-gray-300'
            />
          </div>

          <div className='flex gap-6 mt-4'>
            <Dropdown
              options={options}
              placeholder='Select Job Type'
              className='   w-full  rounded-md '
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
            onClick={handlePost}
            className='lg:w-[10vw] w-full py-3 mt-8 text-white bg-violet-900 hover:bg-violet-950 rounded-md shadow-lg'
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
