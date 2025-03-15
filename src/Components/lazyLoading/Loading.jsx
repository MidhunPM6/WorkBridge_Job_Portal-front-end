import React from 'react'

const LazyLoad = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="flex space-x-1">
      <span className="w-4 h-4 bg-violet-950 rounded-full animate-[pulse_1s_infinite]"></span>
      <span className="w-4 h-4 bg-violet-950 rounded-full animate-[pulse_1s_infinite] delay-150"></span>
      <span className="w-4 h-4 bg-violet-950 rounded-full animate-[pulse_1s_infinite] delay-300"></span>
    </div>
  </div>
  
  )
}

export default LazyLoad
