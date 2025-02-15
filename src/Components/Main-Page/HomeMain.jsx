import React, { useContext } from 'react'
import Heroimg from '../../assets/Hero-img.png'
import { useNavigate } from 'react-router-dom'
import {UserContext } from '../../Context/UserDetailsContext'





const HomeMain = () => {
  const {userDetails}=useContext(UserContext)
  const navigate=useNavigate()
  return (
    <>
    
    <div className='flex flex-col lg:flex-row items-center lg:justify-around lg:h-[85vh]  ' id='home'>
    
  <div className='flex flex-col items-center mx-6 lg:mx-24 lg:w-[70vh] h-auto lg:h-96 space-y-2 font-poppins mt-20 lg:mt-15'>
    
    <p className='text-lg lg:text-[16px] leading-loose mt-10 lg:mt-2'>
      At <span className='text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-violet-950 to-violet-800 bg-clip-text text-transparent'>WorkBridge</span>, Connecting opportunities with talent, our platform bridges dreams and possibilities, helping job seekers find their path and companies build their future.
    </p>
    <div className='lg:flex lg:flex-row flex flex-col lg:pt-5 pt-2  '>
    
    {userDetails ? 
    <button  onClick={()=>navigate('/jobview')} className=' group  lg:p-2 p-4 lg:py-2 lg:px-8  lg:mt-0 mt-2  rounded-md hover:scale-105 hover:border-none  hover:bg-gray-50 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)]'>Find Jobs
    <div class="bg-violet-900 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></button>
    : 
    <div>
    <button onClick={()=>navigate('/employer')}className='lg:p-2 p-4 lg:mr-6 lg:ml-2  bg-violet-900 lg:py-2 lg:px-6 text-white rounded-md shadow-md  '>Employer</button>
    <button onClick={()=>navigate('/login')} className='group  lg:p-2 p-4 lg:py-2 lg:px-4  lg:mt-0 mt-2  rounded-md hover:scale-105 hover:border-none  hover:bg-gray-50 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)]'>Job Seeker Login
    <div class="bg-violet-900 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
    </button>
  </div>
} 
    </div>
    
  
  </div>
  <div className='flex mt-10 lg:mt-0 lg:mr-20'>
    <img src={Heroimg} alt="" className='w-[80vw] lg:w-[60vh]' />
  </div>
</div>

     
  
    
    </>
  )
}

export default HomeMain
