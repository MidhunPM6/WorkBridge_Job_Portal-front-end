import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-dropdown/style.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import toast, { Toaster } from 'react-hot-toast'
import SelectDrop from 'react-select'
import useJob from '../../../../hooks/employer/useJob'
import Button from '../../../ui/Button'
import Input from '../../../ui/Input'
const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    salary: '',
    job_type: '',
    job_description: ''
  })

  console.log(formData)
  const [jobTitle, setJobTitle] = useState([])
  const { postJob, getDesignationData } = useJob()
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
      const { success, response } = await getDesignationData()
      console.log(response)

      if (success) {
        setJobTitle(response)
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
    const { success, response } = await postJob(formData)
    if (success) {
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
    }
  }

  return (
    <div className='flex justify-center items-center p-6 '>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex flex-col lg:p-6 p-6 lg:w-10/12 rounded-md  shadow-[0px_0px_5px_0px_rgba(181,181,181,1)]  hover:shadow-[0px_0px_10px_0px_rgba(181,181,181,1)] bg-white transition-all duration-300'>
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
            <Input
              type='text'
              name='company_name'
              placeholder='Company Name'
              handleOnchange={handleChange}
              className='  py-3 w-full'
            />
          </div>

          <div className='lg:flex-row flex flex-col gap-6 mt-4'>
            <div className='relative w-full'>
              <Input
                type='text'
                value={value}
                handleOnchange={e => setValue(e.target.value)}
                placeholder='Enter a location'
                className=' py-3 w-full '
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

            <Input
              type='text'
              name='salary'
              placeholder='Salary Range'
              handleOnchange={handleChange}
              className='  py-3 w-full   '
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
          <Button
            handleClick={handlePost}
            className=' w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white '
          >
            Post Job
          </Button>
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
