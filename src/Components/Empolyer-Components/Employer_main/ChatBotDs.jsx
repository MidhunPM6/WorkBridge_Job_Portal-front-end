import React from 'react'
import chatbot from '../../../assets/employer-mainpage/chat-bot.png'

const ChatBotDs = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-950 via-black to-black text-white">
  <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

    <div className="relative lg:w-1/2">
      <img 
        src={chatbot} 
        alt="AI Chatbot interface" 
        className="w-full max-w-[600px] rounded-xl shadow-2xl border border-cyan-800/50 transform hover:scale-[1.02] transition-transform duration-300"
      />
    
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-600/20 rounded-full blur-xl z-0"></div>
    </div>

   
    <div className="lg:w-1/2 space-y-6">
      <div className="inline-block">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          AI Chat Bot
        </h1>
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-transparent mt-2"></div>
      </div>

      <div className="text-lg lg:text-xl leading-relaxed text-white/90 space-y-4">
        <p>The chatbot feature provides instant support for scheduling interviews, managing tasks, and answering common queries.</p>
        <p>It ensures seamless navigation and enhances user experience with quick and efficient assistance.</p>
      </div>

 
      <button className="mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-cyan-500/20 flex items-center gap-2 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
        Chat Now
      </button>
    </div>
  </div>
</div>
  )
}

export default ChatBotDs
