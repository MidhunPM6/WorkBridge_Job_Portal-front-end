import React, { useRef, useState } from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { setEducation } from '../../../../Redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const EducationPopup = ({ setIsOpen }) => {
  const [formData, setFormData] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

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

      const response = await axiosInstance.post(
        '/api/candidate/education',
        formattedData,
        {
          withCredentials: true
        }
      )
      console.log(response)

      toast.success(response.data.message, {
        duration: 1000
      })
      setTimeout(() => {
        setIsOpen(false)
      }, 1100)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }
  return (
    <div>
      <div className=' h-auto w-auto flex flex-col justify-center items-center   '>
        <div className='flex justify-center'>
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
                  className='py-2 lg:w-[18vw] p-2 w-full    border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
                />
                <input
                  type='text'
                  placeholder='Field of study'
                  name='field'
                  onChange={e => handleChange(e.target.value, e.target.name)}
                  className='py-2 lg:w-[18vw] p-2 w-full    border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
                />
              </div>
              <div className='flex  mt-4 gap-5 text-xs'>
                <div className='flex flex-col'>
                  <label htmlFor=''>Start Date</label>
                  <DatePicker
                    className='lg:w-[18vw] w-full mt-1'
                    name='StartDate'
                    format='MMM-yyyy'
                    shouldDisableDate={date => date > new Date()}
                    onChange={date => handleChange(date, 'StartDate')}
                  ></DatePicker>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor=''>Passed out</label>
                  <DatePicker
                    className=' mt-1 lg:w-[18vw] w-full'
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
                className=' bg-violet-900 text-white mt-8 text-md px-10 p-2 rounded-sm shadow-xl hover:bg-violet-800  '
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

export default EducationPopup
