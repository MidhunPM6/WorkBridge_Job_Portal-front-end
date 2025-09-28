import { useState } from 'react'

import PersonalDetails from './PersonalDetails/PersonalDetails'
import ExperienceDetails from './Experience/ExperienceDetails'
import EducationDetails from './EducationDetails/EducationDetails'
import AccountSetting from './AccountSettings/AccountSetting'
import { motion, AnimatePresence } from 'framer-motion'
import AppliedJobs from './AppliedJob/AppliedJobs'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeComponent, setActiveComponent] = useState('')

  // Render components based on the selected menu option
  const renderComponent = () => {
    switch (activeComponent) {
      case 'PersonalDetails':
        return <PersonalDetails />
      case 'Experience':
        return <ExperienceDetails />
      case 'EducationDetails':
        return <EducationDetails />
      case 'AccountSetting':
        return <AccountSetting />
      case 'AppliedJobs':
        return <AppliedJobs />
      default:
        return <PersonalDetails />
    }
  }

  return (
    <div className=' mt-6 flex  justify-center items-center  '>
      <div className='lg:flex-row flex flex-col  justify-center   w-full  '>
        {/* Side Menu */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`  text-black p-6   rounded-sm
            ${isOpen ? 'block' : 'hidden'} 
            sm:block     `}
        >
          <div className='flex  items-center justify-center border p-3 rounded-md w-full  bg-violet-100 text-violet-700'>
            <h1 className='flex justify-center items-center text-2xl font-semibold gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 14 14'
              >
                <g fill='none'>
                  <path
                    fill='#d7e0ff'
                    d='M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1'
                  />
                  <path
                    stroke='#4147d5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5.75-2V.5M8 3.25h5.5'
                    stroke-width='1'
                  />
                </g>
              </svg>
              Dashboard
            </h1>
          </div>
          <ul className=' lg:flex-col lg:flex  grid grid-cols-2 w-full mt-2 p-1 lg:border border-gray-300 rounded-lg gap-2 lg:gap-0 '>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveComponent('PersonalDetails')}
                className='flex  items-center text-blue-500 lg:gap-2 bg-blue-50 p-2 hover:bg-blue-100 rounded-sm rounded-t-md w-full  '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='lg:size-6  size-6 text-blue-500'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                    clipRule='evenodd'
                    className='fill-blue-500 '
                  />
                </svg>
                Personal Details
              </button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveComponent('Experience')}
                className='flex items-center text-blue-500 lg:gap-2 bg-blue-50 p-2 hover:bg-blue-100 rounded-sm w-full '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  className='lg:size-6  size-6 text-blue-500'
                  viewBox='0 0 30 30'
                >
                  <path
                    d='M 14 3 C 12.895 3 12 3.895 12 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 16 C 2 17.105 2.895 18 4 18 L 26 18 C 27.105 18 28 17.105 28 16 L 28 7 C 28 5.895 27.105 5 26 5 L 18 5 C 18 3.895 17.105 3 16 3 L 14 3 z M 15 14 C 15.552 14 16 14.448 16 15 C 16 15.552 15.552 16 15 16 C 14.448 16 14 15.552 14 15 C 14 14.448 14.448 14 15 14 z M 2 19.443359 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 19.443359 C 27.409 19.787359 26.732 20 26 20 L 4 20 C 3.268 20 2.591 19.787359 2 19.443359 z'
                    className='fill-blue-500'
                  ></path>
                </svg>
                Experience
              </button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveComponent('EducationDetails')}
                className='flex items-center text-blue-500 lg:gap-2 bg-blue-50 p-2 hover:bg-blue-100 rounded-sm w-full '
              >
                <svg
                  class='w-6 h-6 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-6 text-blue-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z'
                    className='fill-blue-500'
                  />
                  <path
                    d='M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z'
                    className='fill-blue-500'
                  />
                </svg>
                Education
              </button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveComponent('AppliedJobs')}
                className='flex items-center text-blue-500 lg:gap-2 bg-blue-50 p-2 hover:bg-blue-100 rounded-sm w-full  '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6 text-blue-500'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                    clipRule='evenodd'
                    className='fill-blue-500'
                  />
                </svg>
                Applied Jobs
              </button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveComponent('AccountSetting')}
                className='flex items-center text-blue-500 lg:gap-2 bg-blue-50 p-2 hover:bg-blue-100 rounded-sm w-full rounded-b-md '
              >
                <svg
                  class='w-6 h-6 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='text-blue-500'
                >
                  <path
                    fill-rule='evenodd'
                    d='M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z'
                    clip-rule='evenodd'
                    className='fill-blue-500'
                  />
                </svg>
                Account Settings
              </button>
            </motion.li>
            
          </ul>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          className='flex p-6 rounded-md  lg:ml-6 lg:w-[50vw]  shadow-md hover:shadow-lg w-full transition-all duration-300 '
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeComponent}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='lg:w-[50vw] w-full '
            >
              {renderComponent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default SideMenu
