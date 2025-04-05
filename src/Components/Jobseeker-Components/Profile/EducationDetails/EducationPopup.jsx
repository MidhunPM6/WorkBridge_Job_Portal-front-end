import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { format } from 'date-fns'

const EducationPopup = () => {
  const [formData, setFormData] = React.useState('')

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
        Passed: formData.Passed
          ? format(new Date(formData.Passed), 'MMM yyyy')
          : ''
      }
      console.log(formattedData)

      const response = await axiosInstance.post(
        '/api/candidate/education',
        formattedData,
        {
          withCredentials: true
        }
      )
      console.log(response)
      // if (response.status === 200) {
      //   window.location.reload()
      // }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className=' h-auto w-auto flex flex-col justify-center items-center  p-10'>
        <div className='flex justify-center  '>
          <h1 className='text-2xl font-semibold'>Education</h1>
        </div>
        <div className='flex flex-col text-sm pt-10'>
          <form action=''>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-5  '>
                <input
                  type='text'
                  placeholder='University or college'
                  name='college'
                  onChange={e => handleChange(e.target.value, e.target.name)}
                  className='py-2 w-52 p-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
                />
                <input
                  type='text'
                  placeholder='Field of study'
                  name='field'
                  onChange={e => handleChange(e.target.value, e.target.name)}
                  className='py-2 w-52  p-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
                />
              </div>
              <div className='flex  mt-4 gap-5 text-xs'>
                <div className='flex flex-col'>
                  <label htmlFor=''>Start Date</label>
                  <DatePicker
                    className='w-52 mt-1'
                    name='StartDate'
                    format='MMM-yyyy'
                    shouldDisableDate={date => date > new Date()}
                    onChange={date => handleChange(date, 'StartDate')}
                  ></DatePicker>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor=''>Passed out</label>
                  <DatePicker
                    className='w-52 mt-1'
                    name='Passed'
                    format='MMM-yyyy'
                    shouldDisableDate={date => date > new Date()}
                    onChange={date => handleChange(date, 'Passed')}
                  ></DatePicker>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center  items-center mt-5'>
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

export default EducationPopup
