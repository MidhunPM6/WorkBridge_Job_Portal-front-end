import React, { useContext, useState } from 'react'
import { ContextSeekerName } from '../../../Context/SeekerContext'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Context/UserDetailsContext'
import { axiosAuth, axiosResumeUpload } from '../../../Axios/Axios-instance'
import axios from 'axios'
axios.defaults.withCredentials = true

const AccountSetting = () => {
  const { userDetails, setUserDetails } = useContext(UserContext)
  const [changeUsername, setChangeUSername] = useState('')
  const [file, setFile] = useState('')
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axiosAuth.post(
        '/logout',
        {},
        { withCredentials: true }
      )
      console.log(response)
      setUserDetails(null)
      localStorage.removeItem('User')
      navigate('/')
      window.location.reload()
    } catch (error) {
      console.log(error)
      alert('Something  went wrong')
    }
  }

  const handleFile = async () => {
    if (!file) {
      alert('Please select a file first.')
      return
    }

    const formData = new FormData()
    formData.append('pdf', file)
    formData.append('userid', userDetails._id)
    try {
      const response = await axiosResumeUpload.post('/fileupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)

      alert('File upload successfully')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center '>
        <div>
          <h1 className='pt- text-xl font-semibold'>Account Settings</h1>
        </div>
        <div className='flex  items-center mt-6 gap-4 text-sm'>
          <div className='flex flex-col items-center '>
            <label htmlFor=''>Username</label>
            <input
              type='text'
              value={userDetails && userDetails.name}
              onChange={e => setChangeUSername(e.target.value)}
              className='py-2 px-3 mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
            />
          </div>
          <div className='justify-center items-center  text-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>
          </div>
        </div>
        <div className='flex mt-6 gap-4'>
          <div className='flex flex-col items-center text-sm '>
            <label htmlFor=''>Password</label>
            <input
              type='text'
              placeholder='**********'
              className='py-2 px-3 text-center mt-2 border border-slate-200  outline-none rounded  bg-gray-50 shadow-md'
            />
          </div>
          <div className='justify-center items-center  text-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>
          </div>
        </div>

        <div className='mt-10 flex  justify-center items-center text-sm '>
          <div className=''>
            <label for='fileUpload2' className='flex bg-slate-700  text-white gap-1 p-1 px-2 rounded-2xl '>
            <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-4  fill-white inline'
                    viewBox='0 0 32 32'
                  >
                    <path
                      d='M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z'
                      data-original='#000000'
                    />
                    <path
                      d='M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z'
                      data-original='#000000'
                    />
                  </svg>
              Resume
              <input
                type='file'
                id='fileUpload2'
                name='pdf'
                class=' hidden'
                onChange={e => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <button
            onClick={handleFile}
            className='ml-4 border  text-sm p-1 px-3 rounded shadow-lg hover:bg-slate-100'
          >
            Upload {' '}
          </button>
        </div>
        <div className='mt-10'>
          <button
            onClick={handleLogout}
            type='button '
            className=' text-red-600 font-semibold text-sm p-1 rounded-md px-7 shadow-lg hover:bg-gray-100'
          >
            Logout
          </button>
        </div>
        <div>
          <button className='mt-4  hover:bg-red-900 text bg-red-800 py-2 p-2 text-white text-sm rounded-sm'>Delete your account
            
          </button>
        </div>
      </div>

    </>
  )
}

export default AccountSetting
