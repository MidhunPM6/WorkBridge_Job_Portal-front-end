import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='lg:h-[40vh] bg-violet-600 opacity-80 text-white font-poppins flex flex-col lg:flex-row justify-between items-center lg:mt-20 p-8 lg:p-12' id="contact">
  <div className='mb-8 lg:mb-0'>
    <h1 className='text-2xl lg:text-xl'>Contact Us</h1>
    <p className='lg:pt-4 text-center lg:text-left'>
      123 Innovation Drive, Suite 400,<br /> Techville, CA 94016,<br /> United States
    </p>
  </div>
  <div className='flex lg:pt-10'>
    <div className='p-3 space-y-3 flex flex-col items-center lg:items-start'>
      <button className='hover:underline'>Documentation</button>
      <button className='hover:underline'>Enquiry</button>
      <button className='hover:underline'>Help</button>
    </div>
    <div className='p-3 space-y-3 flex flex-col items-center lg:items-start'>
      <button className='hover:underline'>Home</button>
      <button className='hover:underline'>Services</button>
      <button className='hover:underline'>About Us</button>
    </div>
  </div>
  <div className='flex flex-col items-center lg:items-center lg:mr-52 lg:pt-10'>
    <h1 className='text-4xl lg:text-5xl'>WorkBridge</h1>
    <p className='text-sm pt-1 text-center'>Job Seeking Platform</p>
  </div>
</div>
</>
  )
}

export default Footer
