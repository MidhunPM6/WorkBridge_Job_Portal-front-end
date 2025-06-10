import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ProfileFormPopup from './ProfileFormPopup'
import img2 from '../../assets/logo.png'
import { axiosInstance } from '../../Axios/Axios-instance'


const ProfileMainPage = () => {
  const [modalIsOpen, setModelIsOpen] = useState(false)
  const [profile,setProfile]=useState(null)

  const openModal = () => {
    setModelIsOpen(true)
  }

  const closeModal = () => {
    setModelIsOpen(false)
  }

  // Model custom styles..
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
  //   Fetching company profile data
  useEffect(() => {
    const fetchCompnayProfile = async () => {
      try {
        const response = await axiosInstance.get('api/employer/profileData', {
          withCredentials: true
        })
        setProfile(response.data.profile)
        console.log(response);
        
        
      } catch (error) { 
        console.error(error)
      }
    }
    fetchCompnayProfile()
  }, [])
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-6 p-4 lg:p-8 w-full'>
        <div className='w-full lg:w-3/4 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden'>
          <div className='relative w-full h-40 lg:h-48 bg-yellow-400'>
            <div className='absolute left-4 -bottom-8 w-24 h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-md flex items-end justify-end p-1'>
              <label htmlFor='PhotoUpload' className='cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 text-gray-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
                    clipRule='evenodd'
                  />
                </svg>
                <input type='file' id='PhotoUpload' className='hidden' />
              </label>
            </div>

            <div className='absolute right-4 bottom-4'>
              <label
                htmlFor='UploadCover'
                className='cursor-pointer  rounded-full p-2 shadow-md'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z' />
                </svg>
                <input type='file' id='UploadCover' className='hidden' />
              </label>
            </div>
          </div>

          <div className='p-6 bg-white'>
            <div className='flex justify-between items-start'>
              <div className='mt-4'>
                <h1 className='text-2xl font-bold text-gray-800'>{profile?.companyName}</h1>
                <p className='text-gray-500'>{profile?.industry}</p>
              </div>
              <button
                onClick={openModal}
                className='text-gray-500 hover:text-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                  <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
                </svg>
              </button>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-gray-800'>Overview</h2>
              <p className='mt-2 text-gray-600'>
                {profile?.overview}
              </p>

              <div className='mt-6'>
                <p className='text-gray-800 font-medium'>Website:</p>
                <a
                  href={profile?.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {profile?.website} 
                </a>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <div>
                  <h3 className='font-semibold text-gray-800'>Employees</h3>
                  <p className='text-gray-600'>{profile?.sizeOfCompany} employees</p>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800'>Headquarters</h3>
                  <p className='text-gray-600'>{profile?.headquarter}</p>
                </div>
              </div>

              <div className='mt-6'>
                <h3 className='font-semibold text-gray-800'>
                  About the Services
                </h3>
                <p className='mt-2 text-gray-600'>
                  {profile?.about}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Seekers Sidebar */}
        <div className='w-full lg:w-1/4 bg-white rounded-lg shadow-[0px_0px_3px_0px_rgba(0,0,0,0.1)] p-6'>
          <h2 className='text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200'>
            Job Seekers
          </h2>

          <div className='space-y-4 mt-4'>
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className='flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors'
              >
                <img
                  src={img2}
                  alt='Candidate'
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div className='min-w-0'>
                  <h3 className='font-medium text-gray-800 truncate'>
                    Midhun P M
                  </h3>
                  <p className='text-sm text-gray-500'>Web Developer</p>
                </div>
              </div>
            ))}
          </div>

          <button className='w-full mt-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>
            View All Candidates
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <div className='lg:h-full h-[80vh]  '>
          <ProfileFormPopup></ProfileFormPopup>
        </div>
      </Modal>
    </>
  )
}

export default ProfileMainPage
