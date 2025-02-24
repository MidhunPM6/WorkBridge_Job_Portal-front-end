import React, { useState } from 'react'

const ProfileMainPage = () => {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  return (
    <>
      <div className='flex justify-center  pt-10   '>
       
        <div className='flex flex-col lg:w-[40vw] h-auto lg:p-6 p-6  rounded-md text  shadow-2xl bg-white    '>
          <h1 className='text-2xl font-semibold  text-center mb-6  '>
            Company Profile
          </h1>
           <div className=' flex justify-center'> 
            {
              preview ?
              <div className='w-28  overflow-hidden '>
                <img src={preview} alt="" className='' />
              </div>
            :
            <div className='flex justify-center items-center w-28 h-28 rounded-sm border-2 border-gray-300 hover:border-gray-50 hover:bg-black hover:bg-opacity-60 transition-all duration-300 hover:text-white shadow-md  bg-gray-50 overflow-hidden'>
             <label for="fileupload">  upload
             <input  id="fileupload" type="file" className='hidden ' placeholder='' onChange={handleFileChange} />
             </label>
            </div>
            }
           </div>
          <div className='flex-col gap-10 mt-10'>
            <div className='lg:flex-row flex flex-col  gap-6 '>
              <input
                type='text'
                name='company'
                placeholder='Company Name '
               
                className=' text-sm  p-2  bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
              <input
                type='text'
                name='location'
                
                placeholder='Location'
                className=' text-sm  p-2 w-full bg-gray-50 shadow rounded-sm outline-none border border-gray-200'
              />
            </div>
            <div className='lg:flex-row flex flex-col gap-6 mt-4'>
              <input
                type='text'
                placeholder='Location (City, State)'
                name='location'
              
                className=' text-sm  p-2  bg-gray-50 shadow rounded-sm outline-none border border-gray-200'
              />
              <input
                type='text'
                name='salary'
                placeholder='Salary Range'
                
                className=' text-sm  p-2 w-full bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
            </div>

            <div className='flex gap-6 mt-4'>
              <input
                type='text'
                name='job_type'
               
                placeholder='Job Type (e.g., Full-time, Part-time)'
                className=' text-sm  w-full  p-2  bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
            </div>
            <div>
            <textarea
              placeholder='Job Description'
              name='job_description'
              
              className='text-sm  w-full max-h-60 h-24 bg-gray-50 shadow mt-6 p-3 rounded-sm outline-none border border-gray-200'
              rows='5'
            ></textarea>
            </div>
          </div>
          
            


          <div className='flex flex-col  items-center mt-6'>
            <button
              
              className='px-3 py-1 text-white bg-violet-900 hover:bg-violet-800 rounded-md shadow-lg '
            >
              Post Job
            </button>
            <div className='lg:mt-6 text-xs text-slate-600'>
              <p>
                <span className='font-semibold'>
                  Please Note Before Posting :{' '}
                </span>
                All job listings must follow our guidelines. Discriminatory or
                misleading content will be removed. Ensure accuracy and
                transparency.
              </p>
            </div>
          </div>
        </div>
   
</div>



    </>
  )
}

export default ProfileMainPage
