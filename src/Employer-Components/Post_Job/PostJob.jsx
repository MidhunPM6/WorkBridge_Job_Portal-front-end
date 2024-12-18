import React, { useContext, useState } from 'react'
import { axiosJobPost } from '../../Axios/Axios-instance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jobDetailsContext } from '../../Context/JobpostContext';




const PostJob = () => {
  const [postform, setPostForm] = useState({
    tittle: '',
    comapany_name: '',
    location: '',
    salary: '',
    job_description: '',
    job_type: ''
  })

 

  const handleOnchange = e => {
    const onchangeData = { ...postform, [e.target.name]: e.target.value }
    setPostForm(onchangeData)
  }

  const handlePost = async e => {
    e.preventDefault()
    try {
      const response = await axiosJobPost.post('/jobpost', postform)
      console.log(response);
      
      toast.success("Posted job sucessfully")
    } catch (error) {
      toast.error("You must fill all feilds to continue")
     
    } 
  }

  return (
    <>
      <div className='flex justify-center pt-10 min-h-screen bg-purple-200 opacity-100 font-poppins'>
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
        <div className=' max-w-xl h-[73vh] p-6 rounded-lg shadow-lg bg-gradient-to-r from-violet-600 to-purple-600'>
          <h1 className='text-3xl font-semibold text-white text-center mb-6'>
            Post a Job
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <input
                type='text'
                name='tittle'
                placeholder='Job Title'
                onChange={handleOnchange}
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                name='comapany_name'
                onChange={handleOnchange}
                placeholder='Company Name'
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                placeholder='Location (City, State)'
                name='location'
                onChange={handleOnchange}
                className='p-3 w-full rounded-md outline-none'
              />
            </div>

            <div className='space-y-4'>
              <input
                type='text'
                name='salary'
                placeholder='Salary Range'
                onChange={handleOnchange}
                className='p-3 w-full rounded-md outline-none'
              />
              <input
                type='text'
                name='job_type'
                onChange={handleOnchange}
                placeholder='Job Type (e.g., Full-time, Part-time)'
                className='p-3 w-full rounded-md outline-none'
              />
            </div>
          </div>

          <textarea
            placeholder='Job Description'
            name='job_description'
            onChange={handleOnchange}
            className='w-full mt-6 p-3 rounded-md outline-none'
            rows='5'
          ></textarea>

          <div className='flex justify-center mt-6'>
            <button
              onClick={handlePost}
              className='px-6 py-2 text-white bg-violet-900 rounded-md hover:bg-violet-800 shadow-lg shadow-violet-500'
            >
              Post Job
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default PostJob
