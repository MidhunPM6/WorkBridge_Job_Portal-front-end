import React from 'react'
import sortIimg from '../../../assets/employer-mainpage/resume-sorting.png'

const SortingDes = () => {
  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white">
  <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
    {/* Image Section - Enhanced with modern styling */}
    <div className="relative lg:w-1/2">
      <img 
        src={sortIimg} 
        alt="Resume sorting interface" 
        className="w-full max-w-[600px] rounded-xl shadow-2xl border border-gray-700/50 transform hover:scale-[1.02] transition-transform duration-300"
      />
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-600/20 rounded-full blur-xl z-0"></div>
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600/20 rounded-full blur-xl z-0"></div>
    </div>

    {/* Content Section - Improved typography and layout */}
    <div className="lg:w-1/2 space-y-6 lg:pl-12">
      <div className="inline-block">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Smart Resume Sorting
        </h1>
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
      </div>

      <div className="text-lg lg:text-xl leading-relaxed text-gray-300 space-y-4">
        <p>The resume sorting feature simplifies recruitment by organizing and categorizing resumes based on predefined criteria such as skills, qualifications, and experience.</p>
        <p>It ensures a structured and efficient hiring process, allowing recruiters to focus on selecting the best candidates quickly and effectively.</p>
      </div>

      {/* Enhanced CTA button */}
      <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Try Sorting Feature
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default SortingDes
