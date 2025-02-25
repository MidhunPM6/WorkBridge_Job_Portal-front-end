import React, { useState } from 'react'
import img from '../../assets/cover.jpg'
import img2 from '../../assets/logo.png'

const ProfileMainPage = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleFileChange = e => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }
  return (
    <>
      <div className='lg:flex-row flex flex-col   lg:m-0 m-8 lg:justify-center lg:items-start items-center gap-10 lg:pt-10 lg:h-screen   '>
        <div className='shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] rounded-t-md '>
          <div className=' relative  flex flex-col items-end overflow-hidden lg:w-[55vw] lg:h-[25vh]  bg-sky-600 rounded-t-md'>
            
            <div className='absolute  left-0 bottom-0 flex justify-between items-end  p-2  w-full'>
              <div className='   lg:w-32 lg:h-32 bg-gray-200 lg:ml-3 lg:mb-2 rounded-sm'>
                <img src={img2} alt="" />
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6 mr-3'
                >
                  <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='  p-4 lg:w-[55vw] h-auto  rounded-b-md '>
            <div className='flex  justify-between '>
              <h1 className='lg:text-2xl font-semibold'> Microsoft</h1>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 cursor-pointer'
              >
                <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
              </svg>
            </div>
            <h1 className=' text-gray-400 mfont-semibold'>
              Software Company
            </h1>
            <h2 className='text-lg mt-5 font-semibold tracking-wide'>
              Overview{' '}
            </h2>
            <p className='text-gray-600'>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              tenetur vitae molestias quos harum velit nobis in recusandae.
              Doloremque quibusdam amet recusandae rem est laboriosam iure
              pariatur molestiae hic adipisci!
            </p>
            <p className='mt-4  '>
              <span className='mt-4  font-semibold'>Website : </span>
              <a
                href='https://www.microsoft.com/en-in'
                className='text-sky-700 font-semibold hover:underline underline-offset-4'
              >
                https://www.microsoft.com/en-in
              </a>
            </p>
            <div className='flex flex-col gap-1'>

            <h1 className='text-black font-semibold mt-5 '>
              <span >Employees  </span>
            </h1>
            <h2 className='text-gray-500'>50-100 employees</h2>
            </div>
            <div className='flex flex-col gap-1 mt-2'>

            <h1 className='text-black font-semibold  '>
              <span >Headquarters</span>
            </h1>
            <h2 className='text-gray-500'>New York, NY</h2>
            </div>
            <div className='flex flex-col gap-1 mt-2'>

            <h1 className='text-black font-semibold  '>
              <span >About the Services </span>
            </h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis debitis sapiente vel hic odio neque. Natus blanditiis porro, exercitationem provident veritatis labore excepturi, quidem commodi quae doloremque quasi suscipit. Doloribus.</p>
            </div>

          
          </div>
        </div>


        <div className='flex flex-col items-center  pt-4 lg:h-52 lg:w-[18vw] w-full p-6 h-auto  bg-stone-100 rounded-sm '>
          <h1 className='font-semibold text-xl'> Job seekers</h1>
          <hr class='h-px my-2 w-full  bg-gray-300 border-0 dark:bg-gray-700'></hr>
          <div className='flex  items-center mt-6 gap-6 min-w-10 '>
           <img src={img2} alt="" className='w-16   rounded-full bg-gray-200' />
           <div className='w-40 overflow-hidden'> 
           <h1 className='text-[18px] font-semibold break-all'>Midhun P M  </h1>
           <p className='text-gray-600 '>Web Developer</p>
           </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProfileMainPage
