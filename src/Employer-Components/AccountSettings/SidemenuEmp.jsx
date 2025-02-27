import React, { useState } from 'react'
import DeleteAccount from './DeleteAccount'
import SecuritySetting from './SecuritySetting'
import NotificationSetting from './NotificationSetting'

const AccountSetting = () => {
  const [activeComponent, setActiveComponent] = useState('')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Security':
        return <SecuritySetting></SecuritySetting>
      case 'Notification':
        return <NotificationSetting></NotificationSetting>
      case 'Delete Account':
        return <DeleteAccount></DeleteAccount>

      default:
        return <SecuritySetting></SecuritySetting>
    }
  }

  return (
    <div className='lg:flex-row flex flex-col lg:m-20 lg:gap-10 text-white'>
      <div className='flex flex-col  pt-6 lg:w-[15vw] lg:h-[60vh]  rounded-sm bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-950 via-black to-black shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)] '>
        <div className='flex flex-col items-center  w-full mb-6 '>
          <h1 className='font-semibold'>Account Settings</h1>
          <hr className='bg-gray-300 w-1/2 h-[0.1rem] mt-2' />
        </div>
      <div className='flex  items-center w-full  lg:flex-col mb-6'>

      
        <button
          onClick={() => setActiveComponent('Security')}
          className=' py-2 text-sm hover:text-gray-200 w-full'
        >
          Security Settings
        </button>
        <button
          onClick={() => setActiveComponent('Notification')}
          className='py-2 text-sm w-full hover:text-gray-200'
        >
          Notification Preferences
        </button>
        <button
          onClick={() => setActiveComponent('Delete Account')}
          className='py-2 text-sm w-full hover:text-gray-200'
        >
          Delete Account
        </button>
        </div>
      </div>

      <div className='flex lg:w-[60vw] h-auto  text-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.18)]'>
        {renderComponent()}
      </div>
    </div>
  )
}

export default AccountSetting
