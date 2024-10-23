import React from 'react'
import instagramimg from '../../assets/instagram.png'
import linkedinimg from '../../assets/linkedin.png'
import githubimg from '../../assets/github.png'

const SocialBar = () => {
  return (
    <>
    <div className='lg:flex lg:justify-end lg:pr-20 h-15  flex justify-center  '>
        <img src={instagramimg} alt=""  className='w-5 m-3 hover:cursor-pointer mt-4'/>
        <img src={linkedinimg} alt=""  className='w-5 m-3 hover:cursor-pointer mt-4'/>
        <img src={githubimg} alt=""  className='w-5 m-3 hover:cursor-pointer mt-4'/>

        
        
    </div>
    </>
  )
}

export default SocialBar
