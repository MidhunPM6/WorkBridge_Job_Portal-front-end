import React from 'react'
import chatbox from '../../../assets/employer-mainpage/chat-box.png'

const Chatds = () => {
  return (
    <>
      <div className='min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-950 via-black to-black text-white'>
        <div className='container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24'>
          <div className='lg:w-1/2 space-y-6 lg:order-1 order-2'>
            <div className='inline-block'>
              <h1 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent'>
                Real-Time Chat
              </h1>
              <div className='h-1 w-full bg-gradient-to-r from-cyan-500 to-transparent mt-2'></div>
            </div>

            <p className='text-lg lg:text-xl leading-relaxed text-white/90 space-y-4'>
              <span className='block'>
                The chat feature enables instant messaging between users,
                fostering efficient communication and collaboration.
              </span>
              <span className='block'>
                Designed for seamless interaction, it supports text-based
                conversations with features like message timestamps, read
                receipts, and user-friendly navigation.
              </span>
              <span className='block'>
                This tool is ideal for quick follow-ups, sharing interview
                details, or staying connected during the hiring process.
              </span>
            </p>

            <button className='mt-8 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-cyan-500/20'>
              Explore Chat Features
            </button>
          </div>

          <div className='relative lg:w-1/2 lg:order-2 order-1'>
            <img
              src={chatbox}
              alt='Real-time chat interface'
              className='w-full max-w-[600px] rounded-xl shadow-2xl border border-cyan-800/50 transform hover:scale-[1.02] transition-transform duration-300'
            />

            <div className='absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-600/20 rounded-full blur-xl z-0'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatds
