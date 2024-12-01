import { useState } from 'react'
import React from 'react'

const JobMain = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handletoggle=()=>{
      setIsExpanded(!isExpanded)
  }
  return (
    <>
      <div className="flex flex-col place-content-center items-center">
      
      <div
        className={`flex justify-between items-center mt-16 font-poppins  rounded-lg shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "w-[68vw] h-auto" : "w-[68vw] h-52"
        }`}
      >
        
        <div className="flex flex-col rounded-xl p-6">
          <h1
            className={`text-xl font-semibold ${
              isExpanded ? "mt-0" : "mt-16"
            }`}
          >
            Web Developer
          </h1>
          <h2 className="mt-2">
            Infosys <span className="font-light">- Bangalore</span>
          </h2>
          <span className="mt-2">60000</span>
          <p className="mt-2 font-medium">Job Description</p>
          <p className="text-sm mt-2 w-[40vw]">
            Designing: Creating user interfaces and navigation menus Coding:
            Writing and reviewing code in programming languages like HTML, CSS,
            JavaScript, or XML Testing: Running tests to check that all
            features are working properly Troubleshooting: Identifying and
            fixing issues with performance or user experience Collaborating:
            Working with designers, developers, and stakeholders to understand
          </p>
        </div>

      
        <div className="pr-16">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Apply now
          </button>
        </div>
      </div>

  
      <button
        onClick={handletoggle}
        className="mt-4 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
    </>
  )
}

export default JobMain
