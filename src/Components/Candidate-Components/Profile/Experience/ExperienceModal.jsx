import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../../ui/Button'
import Input from '../../../ui/Input'
import 'react-datepicker/dist/react-datepicker.css'
import useExperience from '../../../../hooks/candidate/useExperience'
import { setExperience } from '../../../../Redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const ExperienceModal = ({ setIsOpen }) => {
  const [formData, setFormData] = useState('')
  const { addExperience } = useExperience()
  const dispatch = useDispatch()
  const experience = useSelector(state => state.user.experience)

  const handleChange = (value, name) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    const { success, response } = await addExperience(formData)
    console.log(response)
    if (success) {
      dispatch(setExperience([...experience, response.data.data]))
      setIsOpen(false)
      toast.success(response.data.message, {
        duration: 2000
      })
    }
  }

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 '>
        <div className='bg-white p-8 rounded-md shadow-md flex flex-col gap-3 items-center lg:min-w-[60wv] '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 ml-auto text-gray-400 cursor-pointer'
            onClick={() => setIsOpen(false)}
          >
            <path
              fill-rule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clip-rule='evenodd'
            />
          </svg>

          <div className='flex justify-center'>
            <h1 className='text-2xl font-semibold text-gray-600'>Experience</h1>
          </div>

          <div className='pt-8 '>
            <form action='flex flex-col   '>
              <div className='grid grid-cols-1 gap-4  '>
                <Input
                  type='text'
                  name='position'
                  handleOnchange={e =>
                    handleChange(e.target.value, e.target.name)
                  }
                  placeholder='Current Position'
                  className=' w-full'
                />
                <Input
                  type='text'
                  name='company'
                  handleOnchange={e =>
                    handleChange(e.target.value, e.target.name)
                  }
                  placeholder='Company Name'
                  className='w-full'
                />
              </div>

              <div className='flex gap-4 mt-4 w-full'>
                <div className='flex flex-col w-full'>
                  <label
                    htmlFor='startdate'
                    className='text-center text-gray-600 mb-1'
                  >
                    Start Date
                  </label>
                  <Input
                    id='startDate'
                    type='date'
                    name='StartDate'
                    handleOnchange={e =>
                      handleChange(e.target.value, e.target.name)
                    }
                    className='w-full'
                  />
                </div>

                <div className='flex flex-col w-full'>
                  <label
                    htmlFor='enddate'
                    className='text-center text-gray-600 mb-1'
                  >
                    End Date
                  </label>
                  <Input
                    id='enddate'
                    type='date'
                    name='EndDate'
                    handleOnchange={e =>
                      handleChange(e.target.value, e.target.name)
                    }
                    className='w-full'
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

              <div className='flex flex-col justify-center items-center  mt-3'>
                <Button
                  type='button'
                  handleClick={handleSubmit}
                  className='bg-indigo-500 hover:bg-indigo-600 w-full py-3 text-white'
                >
                  Add
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

export default ExperienceModal
