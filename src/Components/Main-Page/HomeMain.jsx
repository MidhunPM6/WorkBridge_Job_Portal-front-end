import React, { useContext } from 'react'
import Heroimg from '../../assets/Hero-img.png'
import { useNavigate } from 'react-router-dom'


import {UserContext } from '../../Context/UserDetailsContext'





const HomeMain = () => {
  const {userDetails}=useContext(UserContext)
  const navigate=useNavigate()
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:h-[85vh] ' id='home'>
  <div className='flex flex-col mx-6 lg:mx-24 lg:w-[70vh] h-auto lg:h-96 space-y-2 font-poppins mt-20 lg:mt-15'>
    <p className='text-lg lg:text-[20px] leading-loose mt-10 lg:mt-2'>
      At <span className='text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-violet-900 to-violet-600 bg-clip-text text-transparent'>WorkBridge</span>, Connecting opportunities with talent, our platform bridges dreams and possibilities, helping job seekers find their path and companies build their future.
    </p>
    <div className='lg:flex lg:flex-row flex flex-col lg:pt-5 pt-2  '>
    <button onClick={()=>navigate('/employer')}className='text-lg lg:p-2 p-4 lg:mr-6 lg:ml-2  bg-violet-600 lg:py-2 lg:px-10 text-white rounded-md shadow-md hover:bg-violet-700 '>Employer</button>
    {userDetails ? 
    <button  onClick={()=>navigate('/jobview')} className='text-lg lg:p-2 p-4 lg:py-2 lg:px-10  lg:mt-0 mt-2 border-2 border-violet-700 rounded-md shadow-md hover:bg-gray-100'>Find Jobs</button>
    : 
    <button onClick={()=>navigate('/login')} className='text-lg lg:p-2 p-4 lg:py-2 lg:px-10  lg:mt-0 mt-2 border-2 border-violet-700 rounded-md shadow-md hover:bg-gray-100'>Job Seeker Login</button>
} 
    </div>
    
  
  </div>
  <div className='flex mt-10 lg:mt-12 lg:mr-20'>
    <img src={Heroimg} alt="" className='w-[80vw] lg:w-[60vh]' />
  </div>
</div>

     
  
    
    </>
  )
}

export default HomeMain
