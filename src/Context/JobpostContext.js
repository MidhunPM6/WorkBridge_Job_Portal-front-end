import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from "react";


export const jobDetailsContext=createContext(null)



const JobpostContext = ({children}) => {
   const [jobDetails,setJobDetails]=useState([],()=>{
    const storedDetails=localStorage.getItem('jobDetails')
    return storedDetails ? JSON.parse(storedDetails) : [];
    
   }) 
   useEffect(()=>{
    if(jobDetails){
        localStorage.setItem('jobDetails',JSON.stringify(jobDetails))
       }else{
        localStorage.removeItem('')
       }
   },[jobDetails])
  
   


  return (
  <jobDetailsContext.Provider value={{jobDetails,setJobDetails}}>
      {children}
  </jobDetailsContext.Provider>
  )
}

export default JobpostContext

