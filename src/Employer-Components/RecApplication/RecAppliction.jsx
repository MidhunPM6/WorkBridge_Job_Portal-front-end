import React, { useContext, useEffect, useState } from 'react'
import { EmpAuth } from '../../Context/EmployerUserDetails'
import { axiosRecivedApllication } from '../../Axios/Axios-instance'

const RecAppliction = () => {
  const { EmpUserDetails } = useContext(EmpAuth)
  const [applications, setApplications] = useState('')
  

  useEffect(() => {
    const fetchRecivedApplication = async () => {
      try {
        const response = await axiosRecivedApllication.post(
          '/recivedapplication',
          {
            currentEmpID: EmpUserDetails._id
          }
        )
      console.log(response.data.Application)
        setApplications(response.data.Application)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRecivedApplication()
  }, [EmpUserDetails])

  return (
    <>
      <div className=''>

      </div>
          
        

    </>
  )
}

export default RecAppliction
