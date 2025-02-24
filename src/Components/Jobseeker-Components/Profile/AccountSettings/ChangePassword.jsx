import React from 'react'

const ChangePassword = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl'>Change Password</h1>
      <input
        type='text'
        placeholder='Enter current password '
        className='outline-none mt-4 border-2 py-1 p-1 text-sm rounded-sm bg-gray-100'
      />
      <input
        type='text'
        placeholder='Enter new password  '
        className='outline-none mt-4 border-2 py-1 p-1 text-sm rounded-sm bg-gray-100'
      />
      <button className='mt-3 text-sm bg-violet-900 text-white p-1 w-full'>
        Change
      </button>
    </div>
  )
}

export default ChangePassword
