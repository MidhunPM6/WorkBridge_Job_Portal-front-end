import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex place-content-center pt-8">
  <div className="relative flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="flex items-center px-4 py-2 border-r border-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="search"
      className="px-4 py-3 w-64 focus:outline-none text-gray-700 placeholder-gray-400"
      placeholder="Job title"
      aria-label="Job title"
    />
    <div className="h-6 border-l border-gray-300"></div>
    <input
      type="search"
      className="px-4 py-3 w-64 focus:outline-none text-gray-700 placeholder-gray-400"
      placeholder="Location"
      aria-label="Location"
    />
    <button
      className="px-6 py-3 bg-violet-900 text-white font-medium hover:bg-violet-800 transition-colors duration-200"
      aria-label="Search"
    >
      Search
    </button>
  </div>
</div>
  )
}

export default SearchBar
