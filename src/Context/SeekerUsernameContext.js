import React, { createContext, useEffect, useState } from 'react'

export const ContextSeekerName = createContext(null)

const SeekerUsernameContext = ({ children }) =>{
  const [savedUsername, setSavedUsername] = useState(()=>{
    return localStorage.getItem('Username')
  })

  useEffect(()=>{
    if(savedUsername){
        localStorage.setItem("Username",savedUsername)
    }else{
        localStorage.removeItem('')
    }
  },[savedUsername])


  return <ContextSeekerName.Provider value={{savedUsername,setSavedUsername}}>{children}</ContextSeekerName.Provider>
}

export default SeekerUsernameContext
