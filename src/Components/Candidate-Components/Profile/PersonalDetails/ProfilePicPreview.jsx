import { motion } from 'framer-motion'
import React from 'react'

const ProfilePicPreview = ({
  setPreviewModalOpen,
  previewURL,
  handleProfilePicUpload,
  profilePicLoading,
  Loading,
  loading
}) => {
  return (
    <>
      <motion.div
        className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
            <div className='flex justify-end w-full cursor-pointer text-gray-500 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='size-6'
                onClick={() => setPreviewModalOpen(false)}
              >
                <path
                  fill-rule='evenodd'
                  d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <h2 className='text-lg font-semibold mb-2 w-full flex justify-center'>
              Preview
            </h2>
            {previewURL && (
              <div className='mb-4 flex justify-center'>
                <img
                  src={previewURL}
                  alt='Profile Preview'
                  className='h-64 w-64 object-cover rounded-full'
                />
              </div>
            )}
            <button
              onClick={handleProfilePicUpload}
              className='px-4 py-2 bg-violet-950 text-white rounded hover:bg-violet-900 w-full flex justify-center transition-all duration-300'
              disabled={loading}
            >
              {profilePicLoading ? (
                <Loading className='text-white' />
              ) : (
                'Set as Profile Picture'
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProfilePicPreview
