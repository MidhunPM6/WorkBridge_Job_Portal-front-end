import React from 'react'
import videointerview from '../../assets/employer-mainpage/video-interview.png'

const EmpMainPage = () => {
  return (
    <>
      <div className=' bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-950 via-black to-black min-h-screen text-white'>
        <div className='container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24'>
          <div className='relative lg:w-1/2'>
            <img
              src={videointerview}
              alt='Video interview interface'
              className='w-full max-w-[600px] rounded-xl shadow-2xl border border-violet-800/50 transform hover:scale-[1.02] transition-transform duration-300'
            />

            <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-violet-600/20 rounded-full blur-xl z-0'></div>
          </div>

          <div className='lg:w-1/2 space-y-6'>
            <div className='inline-block'>
              <h1 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent'>
                Video Interview
              </h1>
              <div className='h-1 w-full bg-gradient-to-r from-violet-500 to-transparent mt-2'></div>
            </div>

            <p className='text-lg lg:text-xl leading-relaxed text-white/90 space-y-4'>
              <span className='block'>
                The video call functionality is tailored specifically for
                conducting professional interviews.
              </span>
              <span className='block'>
                It provides a secure and high-quality video and audio
                experience, ensuring seamless communication between interviewers
                and candidates.
              </span>
              <span className='block'>
                With an intuitive interface and support for scheduling, this
                feature is designed to streamline the interview process,
                enhancing productivity and maintaining professionalism.
              </span>
            </p>

            <button className='mt-8 px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-violet-500/20'>
              Learn More About Features
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpMainPage
