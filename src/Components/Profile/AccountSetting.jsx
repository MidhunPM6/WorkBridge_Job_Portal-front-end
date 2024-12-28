import React, { useContext } from 'react'
import { ContextSeekerName } from '../../Context/SeekerContext'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserDetailsContext'

const AccountSetting = () => {
  const {userDetails,setUserDetails} = useContext(UserContext)
  const navigate=useNavigate()
  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('User')
    setUserDetails(null)
    navigate('/')
   
    

    
  }

  return (
    <>
      <div className='ml-36 h-[89.8vh] w-[82.2vw] font-poppins text-md place-items-center flex flex-col'>
        <div>
          <h1 className='pt-14 text-3xl font-bold text-violet-600'>
            Account Settings
          </h1>
        </div>
        <div className='flex mt-12'>
          <div>
            <label htmlFor=''>Username </label>
            <p className='bg-slate-100 pl-2 py-1 rounded-md shadow-md'>
              {userDetails.name}
            </p>
          </div>
          <div className='place-content-center ml-12 text-sm'>
            <button className='border border-violet-600 py-1 px-6 rounded-md shadow-lg '>
              Change Username
            </button>
          </div>
        </div>
        <div className='flex mt-12'>
          <div>
            <label htmlFor=''>Password </label>
            <p className='bg-slate-100 pl-2 py-1 rounded-md shadow-md'>
              *******
            </p>
          </div>
          <div className='place-content-center ml-12 text-sm'>
            <button className='border border-violet-600 py-1 px-6 rounded-md shadow-lg '>
              Change Password{' '}
            </button>
          </div>
        </div>

        <div className='mt-10 flex-col  '>
          <label htmlFor='' className='mr-5'>
            Resume Upload
          </label>
          <input
            type='file'
            class=' text-gray-500 font-medium w-56 file:w-28 text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-violet-600 file:hover:bg-violet-700 file:text-white rounded'
          />
        </div>
        <div className='mt-10'>
            <button onClick={handleLogout} type="button " className=' text-red-600 font-semibold text-sm p-1 rounded-md px-7'>Logout</button>
        </div>
        <div>
            <button className='mt-2 text'>Delete your account</button>
        </div>
      </div>
    </>
  )
}

export default AccountSetting
