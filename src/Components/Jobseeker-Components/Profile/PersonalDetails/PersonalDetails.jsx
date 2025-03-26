import axios from 'axios'
import React, { useState } from 'react'
import img from '../../../../assets/cover.jpg'
import Modal from 'react-modal'
import PersonalPopUp from './PersonalPopUp'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { useSelector } from 'react-redux'

const PersonalDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [profileUpload, setProfileUpload] = useState('')
  const user = useSelector(state => state.user.user)
  const userID = user._id

  //  Creating formData for the file upload
  const handleFileChange = async e => {
    const file = e.target.files[0]
    if (file) {
      setProfileUpload(file)
    }
  }

  // Insert upload data inside Formdata
  const formData = new FormData()
  formData.append('file', profileUpload)

  const handleUpload = async () => {
    console.log(userID)

    try {
      const response = await axiosInstance.post(
        '/api/fileupload/profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials : true
        }
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 300ms ease-in-out'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
      opacity: modalIsOpen ? 1 : 0
    }
  }

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  function closeModal () {
    setIsOpen(false)
    setTimeout(() => {}, 300)
  }

  return (
    <>
      <div className='flex flex-col w-full lg:h-screen   '>
        <div className='relative flex-col lg:justify-normal justify-center  lg:p-1  p-10 lg:h-auto  rounded-t-sm  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] w-full  '>
          <div className='relative flex justify-center items-center lg:h-[25vh] h-32 bg-violet-950 rounded-t-sm   w-full overflow-hidden'>
            <h1 className='text-3xl text-white font-bold'>Cover Photo</h1>

            <div className='absolute lg:top-0 top-0 bottom-0 m-5  w-full flex justify-between items-end pr-10  '>
              <div className='lg:w-32 lg:h-32 h-20 w-20 ml-4 mt-5 shadow-md   bg-gray-200 flex rounded-sm items-end justify-end   border-gray-200'>
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
                    onChange={handleFileChange}
                  />
                </label>
                <button className='bg-yellow-400' onClick={handleUpload}>
                  submit
                </button>
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
                  <input type='file' className='hidden' id='coverUpload' />
                </label>
              </div>
            </div>
          </div>

          <div className='lg:w-full  h-auto w-auto flex-col  lg:h-auto rounded-b-sm  pl-8 p-3'>
            <div className='flex justify-between w-full'>
              <h1 className='lg:text-3xl text-2xl font-semibold'>Midhun P M</h1>
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
                  <h2 className='text-gray-500'>midhunpm6060@gmail.com</h2>
                </div>
                <div className='flex flex-col gap-1 '>
                  <h1 className='text-black font-semibold  '>
                    <span>Location</span>
                  </h1>
                  <h2 className='text-gray-500'>Palakkad</h2>
                </div>
                <div className='flex flex-col gap-1 w-48 '>
                  <h1 className='text-black font-semibold  '>
                    <span>Skills</span>
                  </h1>
                  <h2 className='text-gray-500'>
                    Java,Python,Mongodb,Javascript,AI, Machine Learning
                  </h2>
                </div>
              </div>
              <div className='flex flex-col gap-2 flex-wrap '>
                <div className='flex flex-col'>
                  <h1 className=''>
                    <span className='font-semibold'>Portfolio </span>{' '}
                  </h1>
                  <a
                    href='https://portfoliomidhun.vercel.app/'
                    className='hover:underline break-all lg:break-normal text-sky-600 font-semibold'
                  >
                    https://portfoliomidhun.vercel.app/
                  </a>
                </div>
                <div className='flex flex-col'>
                  <h1 className=''>
                    <span className='font-semibold'>LinkIn </span>{' '}
                  </h1>
                  <a
                    href='https://portfoliomidhun.vercel.app/'
                    className='hover:underline break-all lg:break-normal text-sky-600 font-semibold'
                  >
                    https://www.linkedin.com/in/midhunpm6060/
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-4 '>
              <h1 className='text-xl font-semibold'>About Me</h1>
              <div className='w-full text-gray-500 mt-2 rounded-md h-auto  '>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eos numquam explicabo, commodi assumenda voluptate
                  illo saepe laboriosam voluptatibus enim distinctio quasi,
                  corporis maxime inventore quo sint itaque? Optio, repellat?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eos numquam explicabo, commodi assumenda voluptate
                  illo saepe laboriosam voluptatibus enim distinctio quasi,
                  corporis maxime inventore quo sint itaque? Optio, repellat?
                </h1>
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
