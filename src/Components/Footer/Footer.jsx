import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='lg:h-[40vh] bg-violet-600 opacity-80 text-white font-poppins flex justify-between items-center lg:mt-20' id="contact">
        <div className='p-12'>
        <h1 className='text-xl'>Contact Us</h1>
        <p className='lg:pt-4'>123 Innovation Drive, Suite 400,<br /> Techville, CA 94016, <br />United States</p>
        </div>
        <div className='lg:pt-10 lg:flex'>
            <div className='p-3 space-y-3 flex flex-col'>
            <button >Documentation</button>
            <button >Enquiry</button>
            <button>Help</button>


            </div>
            <div className='p-3 space-y-3 flex flex-col'>
            <button >Home</button>
            <button >Services</button>
            <button >About Us</button>


            </div>
            
           
        </div>
        <div className='lg:mr-52 lg:pt-10 lg:flex flex-col items-center'> 
            <h1 className='text-5xl   '>TaskEasy</h1>
            <p className='text-sm pt-1'>Inovative task management tool</p>
           
        </div>
    </div>
    </>
  )
}

export default Footer
