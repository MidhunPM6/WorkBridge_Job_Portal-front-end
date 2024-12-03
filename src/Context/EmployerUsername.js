import React, { createContext, useEffect, useState } from 'react'


export const EmpAuth = createContext(null)

const EmployerUsername = ({children}) => {
const [empUsername,setEmpUsername] =useState(()=>{
     return localStorage.getItem('username')
})

useEffect(()=>{
    if(empUsername){
      localStorage.setItem('username',empUsername)  
    }else{
        localStorage.removeItem('')
    }
},[empUsername])
    


  return (
    <EmpAuth.Provider value={{empUsername,setEmpUsername}}>
      {children}
    </EmpAuth.Provider>
  )
}

export default EmployerUsername
