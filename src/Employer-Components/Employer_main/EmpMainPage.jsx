import React from 'react'
import videointerview from '../../assets/employer-mainpage/video-interview.png'

const EmpMainPage = () => {
  return (
    <>
      <div className='lg:flex lg:flex-row font-poppins flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-950 via-black to-black lg:h-[87vh] text-white'>
        <div>
          <img src={videointerview} alt='' className='lg:w-[32vw] lg:m-20' />
        </div>
        <div className='lg:ml-32 lg:m-32 lg:mt-56 items-center'>
          <div className='place-items-center'>
          <h1 className="text-xl font-semibold ">Video Interview </h1>
          </div>
          
          <p className='lg:mt-5 lg:text-md leading-loose lg:m-0 m-10 hover:text-gray-200 '>
            The video call functionality is tailored specifically for conducting
            <br />
            professional interviews. It provides a secure and high-quality
            <br />
            video and audio experience, ensuring seamless communication
             <br />
            between interviewers and candidates. With an intuitive interface
            <br />
            and support for scheduling, this feature is designed <br />
            to streamline the interview process, enhancing productivity and
            <br />
            maintaining professionalism.
          </p>
        </div>
      </div>
    </>
  )
}

export default EmpMainPage
