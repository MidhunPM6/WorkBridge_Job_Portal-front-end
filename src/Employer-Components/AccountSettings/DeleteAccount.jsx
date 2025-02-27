import React from 'react'

const DeleteAccount = () => {
  return (
    <div className=' flex flex-col  text-black w-full  lg:h-auto h-[60vh] items-center justify-center '>
      <div className=''>
        <div>
          <h1 className='text-2xl font-semibold'>Delete your Acoount</h1>
        </div>
        <p className='text-[13px] mt-4 '>
          Once deleted, all associated data will be lost, <br />
          and you will not be able to recover it. <br />
          Please confirm if you want to proceed.
        </p>
        <div className='flex '>
          <div className='flex flex-col mt-2'>
            <label htmlFor='' className='text-xs text-gray-500'>To confirm this type "DELETE"</label>
            <input type='text' className='outline-none focus:border-red-700 py-[1px] p-2 border-[0.085rem] rounded-sm border-black mt-2  ' />
          </div>
          <div className='flex flex-col justify-end ml-4'>
            <button className='bg-red-700 px-10 text-white py-[2.4px] rounded-sm hover:bg-red-800 '>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
