import React, { createContext, useEffect, useState } from 'react'

export const Selectedjob=createContext(null)
  
const SeletedJobContext = ({children}) => {
    const [selectedJob,setSelectedJob]=useState(()=>{
        const job=localStorage.getItem('selectedjob')
        return job ? JSON.parse(job) : []
    })

    useEffect(()=>{
      if(selectedJob){
      localStorage.setItem('selectedjob',JSON.stringify(selectedJob))
      }else{
        localStorage.removeItem('selectedjob') 
      }
    })
  return (
   <Selectedjob.Provider value={{selectedJob,setSelectedJob}}>
  
    {children}
   </Selectedjob.Provider>
  )
}

export default SeletedJobContext
