import ReactQuill from 'react-quill'
import Dropdown from 'react-dropdown'
import SelectDrop from 'react-select'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import useJob from '../../../../hooks/employer/useJob'
import toast from 'react-hot-toast'

const EditModal = ({ setEditModelOpen, jobTitle, formData, setFormData }) => {
  const options = [
    { value: 'remote', label: 'Remote' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' }
  ]
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

  const { update } = useJob()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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

  const handleSelect = async address => {
    if (!address || address.trim() === '') {
      console.warn('Empty or invalid address selected.')
      return
    }
    setValue(address, false)
    clearSuggestions()
    setFormData(prev => ({
      ...prev,
      location: address
    }))
    try {
      const results = await getGeocode({ address })
      if (!results || results.length === 0) {
        console.error('No geocode results found for address:', address)
        return
      }
      const { lat, lng } = getLatLng(results[0])
      console.log('Coordinates: ', { lat, lng })
    } catch (error) {
      console.error('Error getting location:', error)
    }
  }

  const updateJob = async () => {
    const { success, response } = await update(formData)

    if (success) {
      toast.success('Job updated successfully!', {
        duration: 1200
      })
      setTimeout(() => {
        setEditModelOpen(false)

        setFormData({
          title: '',
          company_name: '',
          location: '',
          salary: '',
          job_type: '',
          job_description: '',
          id: ''
        })
      }, 1300)
    }
  }
  return (
    <>
      <div className='flex justify-center items-center '>
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={() => setEditModelOpen(false)}
        >
          <div
            className='bg-white rounded-lg shadow-md flex flex-col gap-3 items-center  '
            onClick={e => e.stopPropagation()}
          >
            <div
              className='flex flex-col lg:p-8 p-6 lg:w-[40vw] w-[90vw] lg:min-h-[75vh]   rounded-md shadow-[0px_0px_5px_0px_rgba(181,181,181,1)] hover:shadow-[0px_0px_10px_0px_rgba(181,181,181,1)] bg-white transition-all duration-300'
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
                      value={jobTitle.find(opt => opt.value === formData.title)}
                      onChange={handleDesignationChange}
                      isClearable
                      placeholder={'Select Designation'}
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
                      value={formData.location}
                      onChange={e => setValue(e.target.value)}
                      placeholder='Enter a location'
                      className='p-2 w-full rounded-md border border-gray-300'
                    />
                    {status === 'OK' && (
                      <ul className='absolute bg-white  border border-gray-200 rounded mt-1 z-10 max-h-40 overflow-auto w-full'>
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
                    value={options.find(opt => opt.value === formData.job_type)}
                    className='w-full rounded-md'
                    onChange={handleDropdownChange}
                    name='job_type'
                    controlClassName='p-2 bg-gray-50 shadow rounded-sm border border-gray-200'
                    menuClassName='bg-white shadow border border-gray-200 rounded-sm'
                  />
                </div>
                <div className='mt-4 '>
                  <ReactQuill
                    theme='snow'
                    key={formData.id}
                    value={formData.job_description || ''}
                    onChange={handleJobDescriptionChange}
                    modules={modules}
                    style={{ height: '300px' }}
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
                    <span className='font-semibold'>Please Note:</span> All job
                    listings must follow our guidelines. Discriminatory or
                    misleading content will be removed. Ensure accuracy and
                    transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModal
