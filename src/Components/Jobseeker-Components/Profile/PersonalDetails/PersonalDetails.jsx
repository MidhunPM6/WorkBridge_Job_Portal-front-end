import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import PersonalPopUp from './PersonalPopUp'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProfile, setUserDetails } from '../../../../Redux/UserSlice'
import { customStyles } from './ModalStyles'

const PersonalDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [profilePic, setProfilePic] = useState('')
  const [profileCover, setProfileCover] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const profile = useSelector(state => state.profile.profile)

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
    console.log(profilePic)

    //  Creating formData for the file upload
    const formData = new FormData()
    formData.append('file', profilePic)
    formData.append('fileType', 'profilepic')
    try {
      const response = await axiosInstance.post(
        '/api/candidate/fileupload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      )
    } catch (error) {
      console.error(error)
    }
  }
  const handleProfileCoverUpload = async () => {
    console.log(profileCover)

    //  Creating formData for the file upload
    const formData = new FormData()
    formData.append('file', profileCover)
    formData.append('fileType', 'profilecover')
    try {
      const response = await axiosInstance.post(
        '/api/candidate/fileupload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  //  Fetching the profile data
  useEffect(() => {
    console.log(user)

    const fetchProfile = async () => {
      try {
        const response = await axiosInstance('/api/candidate/profile', {
          withCredentials: true
        })
        dispatch(setProfile(response.data.data))

        dispatch(setUserDetails(response.data.data._doc))
        console.log(response.data.data._doc)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfile()
  }, [])

  return (
    <>
      <div className='flex flex-col w-full lg:h-screen   '>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-1  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full  '>
          <div
            className={`relative flex justify-center items-center lg:h-[25vh] h-32 rounded-t-sm w-full overflow-hidden pt-2 ${
              user.profileCoverPic ? "" : 'bg-violet-950'
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
          
          

            <div className='absolute top-0  bottom-0 m-5  w-full flex justify-between items-end   '>
              <div className='lg:w-32 lg:h-32  w-20 h-20   ml-4 lg:mt-5  shadow-md   bg-gray-200 rounded-sm items-end justify-center   border-gray-200'>
                {user.profilePic ? (
                  <div className='relative lg:w-32 lg:h-32 w-20 h-20 rounded-sm '>
                    <img
                      src={user?.profilePic}
                      alt='Profile'
                      className=' w-full h-full object-cover '
                      referrerPolicy='no-referrer'
                    />
                    <div className=''>
                      <button className='absolute  inset-0 flex justify-end items-end p-1'>
                        <svg
                          class='feather feather-edit '
                          fill='none'
                          height='24'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          viewBox='0 0 24 24'
                          width='24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                          <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      for='profileUpload'
                      className='bg-black opacity-70 rounded-full m-2 '
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='lg:size-7 size-5 rounded-full text-white  '
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <input
                        type='file'
                        className='hidden'
                        name='profileUpload'
                        id='profileUpload'
                        onChange={e => setProfilePic(e.target.files[0])}
                      />
                    </label>
                    <button
                      className='bg-yellow-400'
                      onClick={handleProfilePicUpload}
                    >
                      submit
                    </button>
                  </div>
                )}
              </div>
              <div>
                <label for='coverUpload'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-6 bg-white py-1 rounded-full'
                  >
                    <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z' />
                  </svg>
                  <input
                    type='file'
                    className='hidden'
                    id='coverUpload'
                    onChange={e => setProfileCover(e.target.files[0])}
                  />
                  <button
                    className='bg-white'
                    onClick={handleProfileCoverUpload}
                  >
                    Upload
                  </button>
                </label>
              </div>
            </div>
          </div>

          <div className='lg:w-full  h-auto w-auto flex-col  lg:h-auto rounded-b-sm  pl-8 p-3'>
            <div className='flex justify-between w-full'>
              <h1 className='lg:text-3xl text-2xl font-semibold'>
                {user.name}
              </h1>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 cursor-pointer '
                onClick={openModal}
              >
                <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z' />
              </svg>
            </div>
            <div className='flex text-gray-400'>
              <h1>Web Developer</h1>
            </div>
            <div className='lg:flex-row flex flex-col flex-wrap lg:gap-28 gap-2 mt-5   '>
              <div className='flex flex-col gap-2  lg:min-w-32  '>
                <div className='flex flex-col gap-1 mt-2'>
                  <h1 className='text-black font-semibold  '>
                    <span>Email</span>
                  </h1>
                  <h2 className='text-gray-500'>{user.email}</h2>
                </div>
                <div className='flex flex-col gap-1 '>
                  <h1 className='text-black font-semibold  '>
                    <span>Location</span>
                  </h1>
                  <h2 className='text-gray-500'>{profile.location}</h2>
                </div>
                <div className='flex flex-col gap-1 w-48 '>
                  <h1 className='text-black font-semibold  '>
                    <span>Skills</span>
                  </h1>
                  {profile.skills &&
                    profile.skills.map(skill => (
                      <div className='flex text-gray-500  w-96 gap-2'>
                        <h1 className='flex'>{skill},</h1>
                      </div>
                    ))}
                </div>
              </div>
              <div className='flex flex-col gap-2 flex-wrap lg:w-96'>
                <div className='flex flex-col'>
                  <h1 className=''>
                    <span className='font-semibold'>Portfolio </span>{' '}
                  </h1>
                  <a
                    href={`${profile.portfolio}`}
                    className='hover:underline break-all lg:break-all text-sky-600 font-semibold '
                  >
                    {profile.portfolio}
                  </a>
                </div>
                <div className='flex flex-col'>
                  <h1 className=''>
                    <span className='font-semibold'>LinkedIn </span>{' '}
                  </h1>
                  <a
                    href={`${profile.linkedin}`}
                    className='hover:underline break-all lg:break-normal text-sky-600 font-semibold'
                  >
                    {profile.linkedin}
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-4 '>
              <h1 className='text-xl font-semibold'>About Me</h1>
              <div className='w-full text-gray-500 mt-2 rounded-md h-auto  '>
                <h1>{profile.about}</h1>
              </div>
              <div className='mt-10 flex mb-5 '>
                <div className=''>
                  <label
                    for='fileUpload2'
                    className='flex bg-slate-700  text-white gap-1 p-1 px-2 rounded-2xl '
                  >
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
                    />
                  </label>
                </div>

                <button className='ml-4 border  text-sm p-1 px-3 rounded shadow-lg hover:bg-slate-100'>
                  Upload{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model for edit */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <PersonalPopUp></PersonalPopUp>
      </Modal>
    </>
  )
}

export default PersonalDetails
