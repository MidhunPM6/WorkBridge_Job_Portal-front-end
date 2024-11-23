import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Navbar = () => {
  const navigate =useNavigate()
  return (
    <>
      <div className='lg:flex lg:justify-between font-poppins shadow-sm lg:h-[13vh] '>
        <div>
        <h1 className='text-3xl lg:text-4xl font-poppins font-semibold text-violet-600 m-6 mb-2 lg:mb-7 tracking-[.1em]'>
          WorkBridge<span className='text-lg'>.employer</span>
        </h1>

        </div>
       
        <div className='p-8 lg:pr-32'>
       <button onClick={()=>navigate('/employerlogin')} className='px-10 py-2 rounded-sm text-lg text-white bg-violet-600'>login</button>
       </div>
      </div>
    </>
  )
}

export default Navbar
