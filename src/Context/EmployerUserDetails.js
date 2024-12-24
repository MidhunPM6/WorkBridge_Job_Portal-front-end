import React, { createContext, useEffect, useState } from 'react'


export const EmpAuth = createContext(null)

const EmployerUsername = ({children}) => {
const [EmpUserDetails,setEmpUserDetails] =useState(()=>{
     const userData=localStorage.getItem('userdata')
     return userData ? JSON.parse(userData) : [];
})

useEffect(()=>{
    if(EmpUserDetails){
      localStorage.setItem('userdata',JSON.stringify(EmpUserDetails))  
    }else{
        localStorage.removeItem('userdata')
    }
},[EmpUserDetails])
    


  return (
    <EmpAuth.Provider value={{EmpUserDetails,setEmpUserDetails}}>
      {children}
    </EmpAuth.Provider>
  )
}

export default EmployerUsername
