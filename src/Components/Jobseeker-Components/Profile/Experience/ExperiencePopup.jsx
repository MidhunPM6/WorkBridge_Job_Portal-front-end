import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'
import { axiosInstance } from '../../../../Axios/Axios-instance'

const ExperiencePopup = () => {
  const [formData,setFormData]=React.useState('')

  const handleChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  }

  const handleSubmit=async()=>{
    try {
      const response = await axiosInstance.post('/api/candidate/experience',formData,{
        withCredentials  : true
      })
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <div>
      <div className=' h-auto w-auto  flex flex-col justify-center items-center'>
        <div className='flex justify-center'>
          <h1 className='text-xl font-semibold'>Experience</h1>
        </div>
        <div className='flex flex-col text-sm pt-8'>
          <form action=''>
            <div className='flex justify-center items-center mt-4 gap-6'>
              
            </div>
            <div className='flex gap-5  '>
              <input
                type='text'
                name='position'
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                placeholder='Current Position'
                className='py-2 px-3  border border-slate-200  outline-none rounded-sm  bg-gray-50 shadow-md'
              />
              <input
                type='text'
                name="company"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                placeholder='Company Name '
                className='py-2 px-3  border border-slate-200  outline-none rounded-sm  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex  mt-4 gap-4 text-xs'>
              <div className='flex flex-col'>
                <label htmlFor=''>Start Date</label>
                <DatePicker className='w-48 mt-1 ' name='startdate'
               onChange={(date) => handleChange(date, 'StartDate')}></DatePicker>
              </div>
              <div className='flex flex-col'>
                <label htmlFor=''>End Date</label>
                <DatePicker className='w-48 mt-1' name ='enddate'
                onChange={(date) => handleChange(date, 'EndDate')}></DatePicker>
              </div>
            </div>
            <div className='flex gap-5 mt-4'>
              <textarea
                name='tasks'
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                placeholder='Your work history and key tasks...'
                id=''
                className='w-full h-20 max-h-32 py-1 px-3  border border-slate-200  outline-none rounded-sm  bg-gray-50 shadow-md'
              ></textarea>
            </div>

            <div className='flex flex-col gap-5 mt-4'></div>
            <div className='flex flex-col justify-center  items-center mt-3'>
              <button
                type='button'
                onClick={handleSubmit}
                className=' bg-violet-900 text-white mt-2 text-md px-6 p-1 rounded shadow-xl hover:bg-violet-800  '
              >
                Add
              </button>
              <div>
                <p className='text-xs mt-2 text-gray-600'>
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
