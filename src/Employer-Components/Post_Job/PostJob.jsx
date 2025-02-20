import React, { useContext, useState } from 'react'
import { axiosJobPost } from '../../Axios/Axios-instance'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { EmpAuth } from '../../Context/EmployerUserDetails'

const PostJob = () => {
  const { EmpUserDetails } = useContext(EmpAuth)
  const [postform, setPostForm] = useState({
    tittle: '',
    comapany_name: '',
    location: '',
    salary: '',
    job_description: '',
    job_type: '',
    EmpID: EmpUserDetails._id
  })

  const handleOnchange = e => {
    const onchangeData = { ...postform, [e.target.name]: e.target.value }
    setPostForm(onchangeData)
  }

  const handlePost = async e => {
    e.preventDefault()
    try {
      const response = await axiosJobPost.post('/jobpost', postform)
      console.log(response)

      toast.success('Posted job sucessfully')
    } catch (error) {
      toast.error('You must fill all feilds to continue')
    }
  }

  return (
    <>
      <div className='flex justify-center  pt-20   '>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <div className='flex flex-col lg:w-[40vw] h-[70vh] lg:p-6 p-6  rounded-md text  shadow-2xl bg-white    '>
          <h1 className='text-2xl font-semibold  text-center mb-6  '>
            Post a Job
          </h1>

          <div className='flex-col gap-10 mt-10'>
            <div className='lg:flex-row flex flex-col  gap-6 '>
              <input
                type='text'
                name='tittle'
                placeholder='Job Title'
                onChange={handleOnchange}
                className=' text-sm  p-2  bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
              <input
                type='text'
                name='comapany_name'
                onChange={handleOnchange}
                placeholder='Company Name'
                className=' text-sm  p-2 w-full bg-gray-50 shadow rounded-sm outline-none border border-gray-200'
              />
            </div>
            <div className='lg:flex-row flex flex-col gap-6 mt-4'>
              <input
                type='text'
                placeholder='Location (City, State)'
                name='location'
                onChange={handleOnchange}
                className=' text-sm  p-2  bg-gray-50 shadow rounded-sm outline-none border border-gray-200'
              />
              <input
                type='text'
                name='salary'
                placeholder='Salary Range'
                onChange={handleOnchange}
                className=' text-sm  p-2 w-full bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
            </div>

            <div className='flex gap-6 mt-4'>
              <input
                type='text'
                name='job_type'
                onChange={handleOnchange}
                placeholder='Job Type (e.g., Full-time, Part-time)'
                className=' text-sm  w-full  p-2  bg-gray-50 shadow  rounded-sm outline-none border border-gray-200'
              />
            </div>
            <div>
            <textarea
              placeholder='Job Description'
              name='job_description'
              onChange={handleOnchange}
              className='text-sm  w-full max-h-60 h-24 bg-gray-50 shadow mt-6 p-3 rounded-sm outline-none border border-gray-200'
              rows='5'
            ></textarea>
            </div>
          </div>
          
            


          <div className='flex flex-col  items-center mt-6'>
            <button
              onClick={handlePost}
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

export default PostJob
