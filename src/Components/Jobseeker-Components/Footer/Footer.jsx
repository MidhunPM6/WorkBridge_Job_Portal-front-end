import React from 'react'

const Footer = () => {
  return (
    <>
      <div
        className='lg:h-[40vh] bg-gradient-to-b from-violet-950 to-black   text-white font-poppins flex flex-col lg:flex  items-center lg:mt-0 p-8 lg:p-0 justify-center'
        id='contact'
      >
        <div className='flex flex-col items-center lg:items-center lg:mr-0 lg:pt-4'>
          <h1 className='text-4xl lg:text-3xl'>WorkBridge</h1>
          <p className='text-sm pt-1 text-center '>Job Seeking Platform</p>
          
        </div>
        <hr class='mt-4 h-[0.01rem]   w-[50vw] bg-gray-300 border-0 dark:bg-gray-700'></hr>
        
        
        <div className='flex flex-col items-center pt-10'>
          <div className='p-3 gap-2 flex items-center lg:items-start text-sm lg:pt-10'>
            <button className='hover:underline'>Home</button>
            <button className='hover:underline'>Admin </button>
            <button className='hover:underline'>Contact us </button>
            <button className='hover:underline'>Help</button>
          </div>
          <div>
            <p className='text-xs text-gray-400'> © 2025 WorkBrigde.com. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Footer
