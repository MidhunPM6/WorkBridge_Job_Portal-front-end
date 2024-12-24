import React, {  useContext, useState } from 'react'
import { axiosJobPost } from '../../Axios/Axios-instance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EmpAuth } from '../../Context/EmployerUserDetails';






const PostJob = () => {
  const {EmpUserDetails}=useContext(EmpAuth)
  const [postform, setPostForm] = useState({
    tittle: '',
    comapany_name: '',
    location: '',
    salary: '',
    job_description: '',
    job_type: '',
    EmpID:EmpUserDetails._id

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
      <div className='flex justify-center pt-10 min-h-screen bg-slate-50 '>
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
        <div className=' max-w-xl h-[73vh] p-6   rounded-xl text bg-gradient-to-r from-gray-50  to-gray-100 shadow-xl '>
          <h1 className='text-3xl font-semibold  text-center mb-6 text-violet-500 '>
            Post a Job
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4 '>
              <input
                type='text'
                name='tittle'
                placeholder='Job Title'
                onChange={handleOnchange}
                className='p-2 w-full rounded-md outline-none border border-gray-200'
              />
              <input
                type='text'
                name='comapany_name'
                onChange={handleOnchange}
                placeholder='Company Name'
                className='p-2 w-full rounded-md outline-none border border-gray-200'
              />
              <input
                type='text'
                placeholder='Location (City, State)'
                name='location'
                onChange={handleOnchange}
                className='p-2 w-full rounded-md outline-none border border-gray-200'
              />
            </div>

            <div className='space-y-4'>
              <input
                type='text'
                name='salary'
                placeholder='Salary Range'
                onChange={handleOnchange}
                className='p-2 w-full rounded-md outline-none border border-gray-200'
              />
              <input
                type='text'
                name='job_type'
                onChange={handleOnchange}
                placeholder='Job Type (e.g., Full-time, Part-time)'
                className='p-2 w-full rounded-md outline-none border border-gray-200'
              />
            </div>
          </div>

          <textarea
            placeholder='Job Description'
            name='job_description'
            onChange={handleOnchange}
            className='w-full mt-6 p-3 rounded-md outline-none border border-gray-200'
            rows='5'
          ></textarea>

          <div className='flex justify-center mt-6'>
            <button
              onClick={handlePost}
              className='px-6 py-2 text-white bg-violet-500 rounded-md hover:bg-violet-600 shadow-lg hover:scale-105'
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
