import React from 'react'
import Heroimg from '../../assets/Hero-img.png'




const HomeMain = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:h-[85vh]'>
  <div className='flex flex-col mx-6 lg:mx-24 lg:w-[70vh] h-auto lg:h-96 space-y-2 font-poppins mt-20 lg:mt-20'>
    <p className='text-lg lg:text-[20px] leading-loose mt-10 lg:mt-20'>
      At <span className='text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-violet-900 to-violet-600 bg-clip-text text-transparent'>WorkBridge</span>, Connecting opportunities with talent, our platform bridges dreams and possibilities, helping job seekers find their path and companies build their future.
    </p>
  </div>
  <div className='flex mt-10 lg:mt-12 lg:mr-20'>
    <img src={Heroimg} alt="" className='w-[80vw] lg:w-[60vh]' />
  </div>
</div>

     
  
    
    </>
  )
}

export default HomeMain
