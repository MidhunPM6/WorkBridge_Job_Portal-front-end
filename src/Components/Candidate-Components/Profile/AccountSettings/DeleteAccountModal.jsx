import { motion } from 'framer-motion'
import React from 'react'
import Button from '../../../ui/Button'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAccountSettings from '../../../../hooks/candidate/useAccountSettting'

const DeleteAccountModal = ({ setShowDelete }) => {
  const navigate = useNavigate()
  const { deleteAccount } = useAccountSettings()
  
  //  API to Delete candidate entire Account
  const handleDeleteAccount = async () => {
    const { success } = await deleteAccount()
    if (success) {
      toast.success('Your account is deleted permenantly', {
        duration: 1200
      })
      setTimeout(() => {
        navigate('/')
      }, 1300)
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
        <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
          <svg
            class='text-red-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='70'
            height='70'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
          <h1 className='text-2xl text-gray-700 '>Are you sure ?</h1>
          <p className='text-sm text-gray-500 leading-5 tracking-wide'>
            Do you really want to delete your Account? <br />
            <span className='flex w-full justify-center '>
              This process cannot be undone
            </span>
          </p>
          <div className='text-black text-sm flex gap-3 mt-10 w-full'>
            <Button
              handleClick={() => setShowDelete(false)}
              className='  w-full'
            >
              Cancel
            </Button>
            <Button
              handleClick={handleDeleteAccount}
              className='bg-red-600 w-full hover:bg-red-700  text-white'
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DeleteAccountModal
