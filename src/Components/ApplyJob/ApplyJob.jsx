import React from 'react'

const ApplyJob = () => {
  return (
   <>
   <div className='flex place-content-center  h-[89.7vh] bg-gray-200 font-poppins '>
    <div className=' flex flex-col items-center mt-20 h-[60vh] w-[30vw] bg-gray-50 rounded-lg shadow-md '>
      <div className='pt-14 text-2xl'> 
        <h1 className='text-violet-600 font-semibold underline underline-offset-8'>Confirm the Application </h1>
      </div>
      <div className='flex flex-col items-center mt-14 text-gray-700'>
       <h1 className='font-semibold text-black'>Web developer</h1>
       <span className=''>Applying  company : Infosys</span>
       <label htmlFor="" className='mt-2'>Your Designation</label>
       <input type="text" placeholder='Your position' className='mt-4 py-1 px-8 rounded-lg outline-none border border-violet-800'/>
       <button type="button" className='mt-8 bg-violet-600 p-2 rounded-md text-white'>Submit Application</button>
       </div>
    </div>
   </div>
   </>
  )
}

export default ApplyJob
