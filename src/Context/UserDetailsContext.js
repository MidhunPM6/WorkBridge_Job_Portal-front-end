import React, { createContext, useEffect, useState } from 'react'

export const UserContext=createContext(null)

const UserDetailsContext = ({children}) => {
  const [userDetails,setUserDetails]=useState(()=>{
    const user=localStorage.getItem('User')
    return user ? JSON.parse(user) : null
  }
    
  )

  useEffect(()=>{
       if(userDetails){
         localStorage.setItem('User',JSON.stringify(userDetails))
       }else{
        localStorage.removeItem('User')

       }
  },[userDetails])

  return (
    <UserContext.Provider value={{userDetails,setUserDetails}}>
        {children}
    </UserContext.Provider>   
  )
}

export default UserDetailsContext
