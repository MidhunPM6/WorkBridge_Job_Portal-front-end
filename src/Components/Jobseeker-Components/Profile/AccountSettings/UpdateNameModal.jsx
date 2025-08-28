import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../../ui/Button'
import Input from '../../../ui/Input'
import useAccountSettings from '../../../../hooks/candidate/useAccountSettting'
import { setUserDetails } from '../../../../Redux/UserSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

const UpdateNameModel = ({ setIsOpen }) => {
  const [usernameFormData, setUsernameFormData] = useState({
    name: '',
    password: '',
    code: ''
  })

  
  const { changeUsername } = useAccountSettings()
  const dispatch = useDispatch()

  // Method to handle change of candidate username
  const handleChangeUsername = e => {
    const changeData = { ...usernameFormData, [e.target.name]: e.target.value }
    setUsernameFormData(changeData)
  }


  const usernameSubmit = async () => {
    const { success, response } = await changeUsername(usernameFormData)
    if (success) {
      setTimeout(() => {
        setIsOpen(false)
        setUsernameFormData('')
      }, 1400)
      console.log(response)
      dispatch(setUserDetails(response.data.data))
      toast.success(response.data.message, {
        duration: 1300
      })
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
        <div className='bg-white p-8 rounded-lg shadow-md flex flex-col gap-3  items-center '>
          <form className='flex flex-col justify-center items-center w-full '>
            <h1 className='w-full text-xl font-semibold items-center flex flex-col'>
              Spotted a typo or outdated username? <br />
              <span className='flex items-center justify-center text-blue-500'>
                You can update it here.
              </span>
            </h1>
            <h2 className='mt-4 text-gray-600'>Change the username</h2>
            <Input
              type='text'
              className='py-2 mt-4'
              placeholder='Enter a new username '
              name='name'
              handleOnchange={handleChangeUsername}
            />
            <Input
              type='password'
              className='py-2'
              placeholder='Enter your password '
              name='password'
              handleOnchange={handleChangeUsername}
            />
          </form>

          <div className='lg:flex lg:flex-row flex flex-col gap-4 mt-4  w-full items-center text-sm justify-center'>
            <Button
              className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3'
              handleClick={() => {
                setIsOpen(false)
              }}
            >
              Cancel
            </Button>
            <Button
              handleClick={usernameSubmit}
              className='w-full bg-green-400 hover:bg-green-500 text-white py-3'
            >
              Save changes
            </Button>
          </div>
          <div className='flex flex-col text-xs mt-8 text-gray-500 w-full items-center'>
            <p>
              Usernames must be 3–20 characters long and can only be <br />
              <span className='w-full flex flex-col items-center mt-1'>
                changed once every 30 days.{' '}
              </span>{' '}
              .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default UpdateNameModel
