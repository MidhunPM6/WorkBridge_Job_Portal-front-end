import React from 'react'

const ProfileFormPopup = () => {
  return (
    <div className='flex flex-col '>
        
      <form action='' className='flex flex-col justify-center gap-4 '>
        <div className='flex  justify-center mb-6 text-2xl font-semibold'>

      <h1>Fill the compnay details</h1>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600 z'>
              Comapany
            </label>

            <input
              type='text'
              placeholder='Enter the comapny name'
              className='py-1 bg-gray-100 p-2 rounded-sm shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] lg:w-56   '
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-gray-600 '>Which type of industry</label>
            <input
              type='text'
              placeholder='Industry'
              className='py-1 bg-gray-100 p-2 rounded-sm shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  lg:w-56  '
            />
          </div>
        </div>
        <div className='flex gap-8'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-sm text-gray-600 '> Enter the website </label>
            <input
            type='text'
            placeholder='Website'
            className='py-1 bg-gray-100 p-2 rounded-sm shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  lg:w-56   '
          /> 
            </div>
          <div className='flex flex-col gap-2' >
            <label htmlFor="" className='text-sm text-gray-600 '> Headquarter of the company</label>
            <input
            type='text'
            placeholder='Headquarter'
            className='py-1 bg-gray-100 p-2 rounded-sm shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  lg:w-56  '
          />
          </div>
          
        </div>
        <div className='flex gap-8'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-sm text-gray-600 '>Size of the company</label>
               <input
            type='text'
            placeholder='No of Employees'
            className='py-1 bg-gray-100 p-2 rounded-sm shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  lg:w-56   '
          /> 
            </div>
            <div className='z'>

            </div>
      
            
          
        </div>
        <div className='flex flex-col gap-4  '>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-sm text-gray-600'> About your company</label>
                <textarea
            type='text'
            placeholder='Enter a brief description about your company'
            className='h-24 border border-stone-200 p-2 rounded-sm'
          />
            </div>
          <div className='flex flex-col gap-2 '>
          <label htmlFor="" className='text-sm text-gray-600'> About your company</label>
          <textarea
            type='text'
            placeholder='Enter a brief description about your company'
            className='h-24  border border-stone-200 p-2 rounded-sm'
          />
         
          </div>
          <div className='flex w-full justify-center'>
          <button className='mt-3 bg-violet-900 w-20 p-1 rounded-sm hover:bg-violet-800 text-white '>Save</button>
          </div>
         
          
        </div>
      </form>
    </div>
  )
}

export default ProfileFormPopup
