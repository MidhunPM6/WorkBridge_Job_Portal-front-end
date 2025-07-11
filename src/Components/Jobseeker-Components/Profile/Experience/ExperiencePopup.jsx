import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { format } from 'date-fns'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ExperiencePopup = ({setIsOpen, setUpdateData}) => {
  const [formData, setFormData] = React.useState('')
  const navigate = useNavigate()

  const handleChange = (value, name) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const formattedData = {
        ...formData,
        StartDate: formData.StartDate
          ? format(new Date(formData.StartDate), 'MMM yyyy')
          : '',
        EndDate: formData.EndDate
          ? format(new Date(formData.EndDate), 'MMM yyyy')
          : ''
      }

      const response = await axiosInstance.post(
        '/api/candidate/experience',
        formattedData,
        {
          withCredentials: true
        }
      )
      setIsOpen(false)
      setUpdateData(true)
      toast.success(response.data.message, {
        duration: 2000
      })
    
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }

  return (
    <div className=''>
  <div className='flex flex-col justify-center items-center  w-full'>
    
    <div className='flex justify-center'>
      <h1 className='text-xl font-semibold'>Add Experience</h1>
    </div>

    <div className='flex flex-col  pt-8'>
      <form action=''>
        <div className='lg:flex-row flex flex-col justify-center items-center mt-4 gap-6'></div>
        
        <div className=''>
          <input
            type='text'
            name='position'
            onChange={e => handleChange(e.target.value, e.target.name)}
            placeholder='Current Position'
            className=' lg:w-[18vw] p-2 w-full border  border-gray-300    rounded-md '
          />
          <input
            type='text'
            name='company'
            onChange={e => handleChange(e.target.value, e.target.name)}
            placeholder='Company Name'
            className='p-2 lg:w-[18vw]  w-full border  border-gray-300 lg:mt-0 mt-4 lg:ml-3   rounded-md'
          />
        </div>

        <div className='flex flex-col lg:flex-row  mt-4 gap-4 text-xs'>
          <div className='flex flex-col'>
            <label htmlFor=''>Start Date</label>
            <DatePicker
              className='mt-1 lg:w-[18vw] w-full'
              name='startdate'
              format='MMM-yyyy'
              shouldDisableDate={date => date > new Date()}
              onChange={date => handleChange(date, 'StartDate')}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=''>End Date</label>
            <DatePicker
              className='lg:w-[18vw] w-full mt-1'
              name='enddate'
              shouldDisableDate={date => date > new Date()}
              format='MMM-yyyy'
              onChange={date => handleChange(date, 'EndDate')}
            />
          </div>
        </div>

        <div className='flex gap-5 mt-4'>
          <textarea
            name='tasks'
            onChange={e => handleChange(e.target.value, e.target.name)}
            placeholder='Your work history and key tasks...'
            rows={5}
            className='w-full h-28 max-h-44 border border-gray-300 rounded-md p-2'
          ></textarea>
        </div>

        <div className='flex flex-col gap-5 mt-4'></div>

        <div className='flex flex-col justify-center items-center mt-3'>
          <button
            type='button'
            onClick={handleSubmit}
            className='bg-violet-900 text-white mt-8 text-md px-10 p-2 rounded-md shadow-xl hover:bg-violet-800'
          >
            Add
          </button>
          <div>
            <p className='text-xs mt-4 text-gray-600'>
              Make sure all your details are accurate before saving
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default ExperiencePopup
