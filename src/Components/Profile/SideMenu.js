import React, { useState } from 'react'

import PersonalDetails from './PersonalDetails'
import ExperienceComp from './ExperienceComp'
import EducationDetails from './EducationDetails'
import AccountSetting from './AccountSetting'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeComponent, setActiveComponent] = useState('')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'PersonalDetails':
        return <PersonalDetails />

      case 'Experience':
        return <ExperienceComp />

      case 'EducationDetails':
        return <EducationDetails />

      case 'AccountSetting':
        return <AccountSetting />

      default:
        return <PersonalDetails />
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex'>
      <div
        className={`fixed top-0 left-0 lg:mt-20 h-[90vh] lg:w-64 bg-violet-600 text-white 
          ${
            isOpen ? 'block' : 'hidden'
          } sm:block transition-all ease-in-out duration-300`}
      >
        <ul className='space-y-4 p-6'>
          <li>
            <button
              onClick={() => setActiveComponent('PersonalDetails')}
              className='flex items-center text-lg hover:text-gray-300'
            >
              <span className='mr-2'>📝</span> Personal Details
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('Experience')}
              className='flex items-center text-lg hover:text-gray-300'
            >
              <span className='mr-2'>🧑🏻‍💻</span> Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('EducationDetails')}
              className='flex items-center text-lg hover:text-gray-300'
            >
              <span className='mr-2'>🎓</span> Education
            </button>
          </li>
          <li>
            <button onClick={()=>setActiveComponent('AccountSetting') }className='flex items-center text-lg hover:text-gray-300'>
              <span className='mr-2'>⚙️ </span> Account settings
            </button>
          </li>
        </ul>
      </div>

      <button
        onClick={toggleMenu}
        className='fixed top-5 left-5 z-10 bg-gray-800 text-white p-4 rounded-full sm:hidden'
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <div>{renderComponent()}</div>
    </div>
  )
}

export default SideMenu
