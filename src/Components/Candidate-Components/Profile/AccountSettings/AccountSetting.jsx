import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { AnimatePresence} from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../../../ui/Button'
import useAccountSetting from '../../../../hooks/candidate/useAccountSettting'
import UpdateNameModel from './UpdateNameModal'
import ChangePasswordModal from './ChangePasswordModal'
import DeleteAccountModal from './DeleteAccountModal'

const AccountSetting = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const user = useSelector(state => state.user.user)
  const { logoutUser} = useAccountSetting()
  const navigate = useNavigate()

  //Logout handling
  const handleLogoutSub = async e => {
    e.preventDefault()
    const { success, response } = await logoutUser()
    if (success) {
      toast.success(response.data.message)
      navigate('/')
    }
  }

  return (
    <>
      <div className=' relative flex-col lg:justify-normal justify-center   lg:h-auto  rounded-md  '>
        <Toaster></Toaster>
        <div className=' flex flex-col items-center p-10 rounded-md border-gray-300 '>
          <div>
            <h1 className=' w-full flex justify-center text-2xl font-semibold'>
              Account Settings
            </h1>
            <p className='text-2xl text-center text-blue-600 font-semibold'>
              Manage your account details and security options below
            </p>
          </div>
          <div className='lg:h-[0.08rem] bg-gray-200 mt-8 w-full '></div>

          <div className='flex   mt-6 gap-4 w-full '>
            <div className='flex flex-col w-full gap-1'>
              <label htmlFor='' className='font-semibold text-lg'>
                Username
              </label>
              <h1 className='  outline-none   '>{user?.name}</h1>
              <p className='text-sm text-gray-600 '>
                This name will be visible to employers
              </p>
            </div>
            <div className='flex justify-center items-center  '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={() => setIsOpen(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>
          <div className='h-[0.08rem] bg-gray-200 mt-4 w-full'></div>
          <div className='flex mt-4 gap-4 w-full'>
            <div className='flex flex-col   w-full  '>
              <label htmlFor='' className='text-lg font-semibold'>
                Password
              </label>
              <h1 className='  outline-none text-gray-600  '>********</h1>
              <p className='text-sm text-gray-600'>
                Choose a strong password for your account security{' '}
              </p>
            </div>
            <div className='  flex justify-center items-center text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 cursor-pointer'
                onClick={() => setIsVisible(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center mt-10 w-full  text-sm '>
            <Button
              handleClick={handleLogoutSub}
              type='button'
              className=' lg:w-48 w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white'
            >
              Logout
            </Button>
            <Button
              handleClick={() => setShowDelete(true)}
              className='mt-4 hover:bg-red-700 lg:w-48 py-3 w-full text-white bg-red-600'
            >
              Delete your account
            </Button>
          </div>

          <p className=' text-gray-600 mb-4 text-xs mt-2'>
            This action is{' '}
            <span className='font-medium text-red-500'>permanent</span> and
            cannot be undone
          </p>
        </div>
      </div>


      {/* Update name model */}
      <AnimatePresence>
        {modalIsOpen && <UpdateNameModel setIsOpen={setIsOpen} />}
      </AnimatePresence>

      {/* Change password model */}
      <AnimatePresence>
        {isVisible && <ChangePasswordModal setIsVisible={setIsVisible} />}
      </AnimatePresence>

      {/* Account delete model  */}
      <AnimatePresence>
        {showDelete && (
          <DeleteAccountModal setShowDelete={setShowDelete} />
        )}
      </AnimatePresence>
    </>


  )
}

export default AccountSetting
