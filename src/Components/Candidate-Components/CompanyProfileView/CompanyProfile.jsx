import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'





const CompanyProfile = () => {
    const companyProfile= useSelector(
      state => state.companyProfile.companyProfile
    )

    useEffect(()=>{
        console.log(companyProfile);
        
    },[])

  
    
  return (
    <div>CompanyProfile</div>
  )
}

export default CompanyProfile