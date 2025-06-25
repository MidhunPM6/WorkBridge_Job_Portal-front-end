import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import PersonalPopUp from './PersonalPopUp'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProfile, setUserDetails } from '../../../../Redux/UserSlice'
import { customStyles } from '../ModalStyles'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import profileImg from '../../../../assets/profile.svg'

const PersonalDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [profilePic, setProfilePic] = useState('')
  const [profileCover, setProfileCover] = useState('')
  const [resume, setResume] = useState('')
  const [previewModalOpen, setPreviewModalOpen] = useState(false)
  const [selectedPreviewFile, setSelectedPreviewFile] = useState(null)
  const [previewCoverModalOpen, setPreviewCoverModalOpen] = useState(false)
  const [previewURL, setPreviewURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEditOpen, setEditOpen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const profile = useSelector(state => state.profile.profile)

  const navigate = useNavigate()

  const handleFileSelect = (e, type) => {
    const file = e.target.files[0]
    const fileType = file.type
    if (fileType === 'application/pdf') {
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewURL(reader.result)
      setSelectedPreviewFile(file)

      if (type === 'profilepic') {
        setProfilePic(file)
        setPreviewModalOpen(true)
      }

      if (type === 'coverpic') {
        setProfileCover(file)
        setPreviewCoverModalOpen(true)
      }
    }
    reader.readAsDataURL(file)
  }

  //  Modal function to controll
  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  function closeModal () {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }

  const handleProfilePicUpload = async () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 10000)

    //  Creating formData for the file upload
    const formData = new FormData()
    formData.append('file', profilePic)
    formData.append('fileType', 'profilepic')
    formData.append('role', 'candidate')
    try {
      const response = await axiosInstance.post(
        '/api/common/fileupload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      )

      toast.success('Successfully Uploaded', {
        duration: 2000
      })
      console.log(response)

      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }

  const handleProfileCoverUpload = async () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 10000)
    //  Creating formData for the file upload
    const formData = new FormData()
    formData.append('file', profileCover)
    formData.append('fileType', 'profilecover')
    formData.append('role', 'candidate')

    try {
      const response = await axiosInstance.post(
        '/api/common/fileupload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      )
      toast.success('Successfully Uploaded', {
        duration: 2000
      })

      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }

  //  Fetching the profile data
  useEffect(() => {
    console.log(user)

    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/candidate/profile', {
          withCredentials: true
        })
        dispatch(setProfile(response.data.data))

        dispatch(setUserDetails(response.data.data._doc))
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfile()
  }, [])

  //  Resume Upload handle
  const resumeUpload = async () => {
    const formData = new FormData()
    formData.append('resume', resume)

    try {
      const response = await axiosInstance.post(
        '/api/candidate/resumeUpload',
        formData,
        {
          withCredentials: true
        }
      )
      toast.success(response.data.message || 'Resume uploaded successfully!', {
        id: 'resume-upload-toast',
        duration: 1500
      })
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message, {
        id: 'resume-upload-error-toast',
        duration: 1500
      })
    }
  }

  // API to handle resume deletetion from the database

  const handleResumeDelete = async () => {
    try {
      const response = await axiosInstance.delete(
        '/api/candidate/deleteResume',
        {
          withCredentials: true
        }
      )

      if (response.data && response.data.data) {
        console.log('Dispatching profile update...')
        dispatch(setProfile(response.data.data)) // Dispatch updated profile
      }

      setTimeout(() => {
        toast.success(response.data.message || 'Resume deleted successfully!', {
          id: 'delete-resume-toast',
          duration: 1500
        })
      }, 100)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('Profile has been updated:', profile)
  }, [profile])

  return (
    <>
      <div className='flex flex-col w-full lg:min-h-screen '>
        <Toaster />
        <div className='relative flex-col lg:justify-normal justify-center    rounded-t-lg rounded-b-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full'>
          <div
            className={`relative flex justify-center items-center lg:h-[25vh] h-32 rounded-t-lg w-full overflow-hidden pt-2 ${
              user.profileCoverPic ? '' : 'bg-violet-950'
            }`}
            style={
              user.profileCoverPic
                ? {
                    backgroundImage: `url("${user.profileCoverPic}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                : undefined
            }
          >
            {!user.profileCoverPic && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12 text-white opacity-50'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            )}
            <div className='absolute top-0 bottom-0 m-5 w-full flex justify-between items-end'>
              <div className='lg:w-36 lg:h-36 w-20 h-20 ml-4 lg:mt-5 shadow-md bg-gray-200 flex rounded-sm items-center justify-center transition-all duration-300 border border-gray-200 relative group'>
                {user.profilePic ? (
                  <>
                    <img
                      src={user.profilePic}
                      alt='Profile'
                      className='w-full h-full object-cover rounded-sm'
                      referrerPolicy='no-referrer'
                    />
                    <label
                      htmlFor='changeProfilePic'
                      className='absolute inset-0 flex justify-end items-end p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                    >
                      <div
                        className='bg-black bg-opacity-25 rounded-full p-1 cursor-pointer'
                        title='Edit profile picture'
                      >
                        <svg
                          className='feather feather-edit text-gray-200'
                          fill='none'
                          height='20'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                          width='20'
                        >
                          <path d='M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7' />
                          <path d='M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z' />
                        </svg>
                      </div>
                    </label>
                  </>
                ) : (
                  <>
                    <img src={profileImg} alt='' className='p-2' />
                    <label
                      htmlFor='profileUpload'
                      className='absolute bottom-1 right-1 bg-black bg-opacity-25 rounded-full p-1 cursor-pointer'
                      title='Add profile picture'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5 text-white'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </label>
                  </>
                )}
                <input
                  type='file'
                  className='hidden'
                  id='changeProfilePic'
                  onChange={e => handleFileSelect(e, 'profilepic')}
                />
                <input
                  type='file'
                  className='hidden'
                  id='profileUpload'
                  onChange={e => handleFileSelect(e, 'profilepic')}
                />
              </div>

              <label
                htmlFor='coverUpload'
                className='m-2 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors'
                title='Edit cover photo'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 text-gray-700'
                >
                  <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z' />
                </svg>
              </label>
              <input
                type='file'
                className='hidden'
                id='coverUpload'
                onChange={e => handleFileSelect(e, 'coverpic')}
              />
            </div>
          </div>

          {/* User Info Section */}
          <div className='lg:w-full h-auto w-auto flex-col lg:h-auto rounded-b-sm pl-8 p-3'>
            <div className='flex justify-between w-full items-center'>
              <h1 className='lg:text-3xl text-2xl font-semibold text-gray-800'>
                {user.name || 'Not provided'}
              </h1>
              <button
                onClick={openModal}
                className='text-gray-600 hover:text-violet-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full p-1'
                aria-label='Edit profile'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z' />
                </svg>
              </button>
            </div>
            <div className='flex text-gray-500'>
              <h1>{profile?.designation || 'Not provided'}</h1>
            </div>

            <div className='lg:flex-row flex flex-col flex-wrap lg:gap-8 gap-6 mt-5'>
              {/* Left Column */}
              <div className='flex flex-col gap-4 lg:min-w-32'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>Email</h2>
                  <p className='text-gray-600'>
                    {user.email || 'Not provided'}
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>Location</h2>
                  <p className='text-gray-600'>
                    {profile?.location || 'Not provided'}
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>Skills</h2>
                  <div className='flex flex-wrap gap-2'>
                    {profile?.skills?.length > 0 ? (
                      profile.skills.map(skill => (
                        <span
                          key={skill}
                          className='bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700'
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className='text-gray-500'>Not provided</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className='flex flex-col gap-4 lg:w-96'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>Portfolio</h2>
                  {profile?.portfolio ? (
                    <a
                      href={profile.portfolio}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sky-600 hover:underline flex items-center gap-1'
                    >
                      {profile.portfolio.length > 30
                        ? `${profile.portfolio.substring(0, 30)}...`
                        : profile.portfolio}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 h-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className='text-gray-500'>Not provided</p>
                  )}
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>LinkedIn</h2>
                  {profile?.linkedin ? (
                    <a
                      href={profile.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sky-600 hover:underline flex items-center gap-1'
                    >
                      {profile.linkedin.length > 30
                        ? `${profile.linkedin.substring(0, 30)}...`
                        : profile.linkedin}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 h-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className='text-gray-500'>Not provided</p>
                  )}
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-700 font-semibold'>
                    Contact number
                  </h2>
                  <p className='text-gray-600'>
                    {profile?.mobile || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-gray-800'>About Me</h2>
              <div className='mt-2 text-gray-600'>
                {profile?.about ? (
                  <p>{profile.about}</p>
                ) : (
                  <p className='text-gray-500'>Not provided</p>
                )}
              </div>
            </div>

            {/* Resume Section */}
            <div className='mt-8 mb-5'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Resume
              </h2>
              {profile?.resume ? (
                <div className='flex items-center gap-4'>
                  <a
                    href={profile.resume}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sky-600 hover:underline flex items-center gap-1'
                  >
                    {profile.resume.split('/').pop()}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                  <button
                    onClick={handleResumeDelete}
                    className='text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1'
                    aria-label='Delete resume'
                  >
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className='flex items-center gap-4'>
                  <label
                    htmlFor='fileUpload2'
                    className='flex items-center gap-2 bg-violet-950 hover:bg-violet-900 text-white text-sm py-2 px-4 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 fill-white'
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
                    Upload Resume (PDF)
                  </label>
                  <input
                    type='file'
                    id='fileUpload2'
                    name='pdf'
                    accept='.pdf'
                    className='hidden'
                    onChange={e => setResume(e.target.files[0])}
                  />
                  <button
                    onClick={resumeUpload}
                    className='px-4 py-2 bg-violet-950 text-white rounded-full hover:bg-violet-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500'
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modals (keep your existing modal code) */}
        {/* ... */}
      </div>

      {/* Profile photo Upload modal  */}
      <AnimatePresence>
        {previewModalOpen && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setPreviewModalOpen(false)}
          >
            <motion.div
              className='bg-white rounded-sm p-6 w-full max-w-md shadow-lg'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className='text-lg font-semibold mb-2 w-full flex justify-center'>
                Preview
              </h2>
              {previewURL && (
                <div className='mb-4 flex justify-center'>
                  <img
                    src={previewURL}
                    alt='Profile Preview'
                    className='max-h-64 rounded-full object-cover'
                  />
                </div>
              )}
              <button
                onClick={handleProfilePicUpload}
                className='px-4 py-2 bg-violet-950 text-white rounded hover:bg-violet-900 w-full flex justify-center transition-all duration-300'
                disabled={loading}
              >
                {loading ? (
                  <span className='animate-spin'>{/* Your spinner SVG */}</span>
                ) : (
                  'Set as Profile Picture'
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {previewCoverModalOpen && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setPreviewModalOpen(false)}
          >
            <motion.div
              className='bg-white rounded-sm p-6 w-full max-w-md shadow-lg'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className='text-lg font-semibold mb-2 w-full flex justify-center'>
                Preview
              </h2>
              {previewURL && (
                <img
                  src={previewURL}
                  alt='Selected File Preview'
                  className=' mb-4 min-w-65'
                />
              )}
              <button
                onClick={handleProfileCoverUpload}
                className='px-4  py-2 bg-violet-950 text-white rounded hover:bg-violet-900 w-full flex justify-center transition-all duration-300'
              >
                {loading ? (
                  <span className='animate-spin'>
                    <svg
                      aria-hidden='true'
                      class='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Model for edit */}
      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <PersonalPopUp />
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default PersonalDetails
