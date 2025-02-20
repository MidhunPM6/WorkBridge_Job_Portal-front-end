import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'

const EducationDetails = () => {
  return (
    <>
      <div className=' h-auto w-auto flex flex-col items-center  '>
        <div className='flex justify-center '>
          <h1 className='text-xl font-semibold'>Education</h1>
        </div>
        <div className='flex flex-col text-sm pt-3'>
          <form action=''>
            <div className='flex justify-center items-center mt-4 gap-6'>
              <div></div>
            </div>
            <div className='flex gap-5  '>
              <input
                type='text'
                placeholder='University or college'
                className='py-2 px-3  border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
              />
              <input
                type='text'
                placeholder='Stream  '
                className='py-2 px-3  border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
              />
            </div>
            <div className='flex  mt-4 gap-4 text-xs'>
              <div className='flex flex-col'>
                <label htmlFor=''>Start Date</label>
                <DatePicker className='w-48 mt-1'></DatePicker>
              </div>
              <div className='flex flex-col'>
                <label htmlFor=''>Passed out</label>
                <DatePicker className='w-48 mt-1'></DatePicker>
              </div>
            </div>
            <div className='flex gap-5 mt-4'></div>
            <div className='flex gap-5 mt-2'>
              <button
                type='button'
                placeholder='Portfolio Website (optional)'
                className='py-2 px-3 ml-auto   outline-none rounded  bg-gray-50 shadow-lg text-xs '
              >
                Add
              </button>
            </div>

            <div className='flex justify-center items-start gap-4 '>
              <div className='flex flex-col'>
                <label htmlFor='' className=''>
                  {' '}
                  Certification
                </label>
                <input
                  name=''
                  placeholder='Certificate name'
                  id=''
                  className='  py-2 px-3 mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='' className=''>
                  {' '}
                  Source
                </label>
                <input
                  name=''
                  placeholder='Acadamey or Platform'
                  id=''
                  className='  py-1 px-3 mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
                />
              </div>
            </div>
            <div className='flex flex-col justify-center  items-center mt-5'>
              <button
                type='button'
                className=' bg-violet-900 text-white mt-2 text-md px-6 p-1 rounded shadow-xl hover:bg-violet-800  '
              >
                Save
              </button>
              <div>
                <p className='text-xs mt-2 text-gray-600'>
                  Make sure all your details are accurate before saving
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EducationDetails
