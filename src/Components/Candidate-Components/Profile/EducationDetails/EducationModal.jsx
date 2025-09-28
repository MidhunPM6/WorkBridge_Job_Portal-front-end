import { useState } from 'react'
import 'rsuite/DatePicker/styles/index.css'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Input from '../../../ui/Input'
import { setEducation } from '../../../../Redux/UserSlice'
import Button from '../../../ui/Button'
import useEducation from '../../../../hooks/candidate/useEducation'

const EducationPopup = ({ setIsOpen }) => {
  const [formData, setFormData] = useState([])
  const education = useSelector(state => state.user.education)
  const { addEducation } = useEducation()
  const dispatch = useDispatch()

  const handleChange = (value, name) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
      const {success,response} =await addEducation(formData)
      if(success){
        toast.success(response.data.message)
        setTimeout(() => {
        setIsOpen(false)
        dispatch(setEducation([...education, response.data.data]))
      }, 1100)
      }  
    }
  

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg shadow-md flex flex-col gap-3 items-center '>
          <div
            className='flex justify-end w-full'
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='size-6 text-gray-600 cursor-pointer'
            >
              <path
                fill-rule='evenodd'
                d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                clip-rule='evenodd'
              />
            </svg>
          </div>

          <div className='flex justify-center items-center'>
            <h1 className='text-2xl font-semibold text-gray-700'>Education</h1>
          </div>
          <div className='flex flex-col justify-center items-center  pt-10'>
            <form action=''>
              <div className='grid grid-cols-1 '>
                <div className=' flex flex-col gap-2   '>
                  <Input
                    type='text'
                    placeholder='University or college'
                    name='college'
                    handleOnchange={e =>
                      handleChange(e.target.value, e.target.name)
                    }
                    className='w-full  '
                  />
                  <Input
                    type='text'
                    placeholder='Field of study'
                    name='field'
                    handleOnchange={e =>
                      handleChange(e.target.value, e.target.name)
                    }
                    className=' w-full  '
                  />
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mt-5 '>
                  <div className='flex flex-col '>
                    <label htmlFor='' className='text-center text-gray-600'> Start Date</label>
                    <Input
                      id='startDate'
                      type='date'
                      name='StartDate'
                      lable='Start Date'
                      handleOnchange={e =>
                        handleChange(
                          e.target.value,
                          e.target.name,
                          e.target.name
                        )
                      }
                      className='w-full'
                    />
                  </div>

                  <div className='flex flex-col  '>
                    <label htmlFor="" className='text-center text-gray-600 '>Passed Date</label>
                    <Input
                      id='endDate'
                      type='date'
                      name='Passed'
                      handleOnchange={e =>
                        handleChange(
                          e.target.value,
                          e.target.name,
                          e.target.name
                        )
                      }
                      className='w-full'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center  items-center mt-5'>
                <Button
                  type='button'
                  handleClick={handleSubmit}
                  className='bg-indigo-500 hover:bg-indigo-600 w-full py-3 text-white'
                >
                  Add Education
                </Button>
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
    </motion.div>
  )
}

export default EducationPopup
