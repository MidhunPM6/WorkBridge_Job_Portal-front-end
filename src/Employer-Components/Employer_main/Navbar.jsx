import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {EmpAuth} from '../../Context/EmployerUsername'


const Navbar = () => {
  const navigate = useNavigate()
  const {empUsername,setEmpUsername}=useContext(EmpAuth)

  const handleLogout=()=>{
    setEmpUsername('')
  }

  return (
    <>
      <div className='lg:flex lg:justify-between font-poppins shadow-sm lg:h-[13vh] '>
        <div>
          <h1 className='text-3xl lg:text-4xl font-poppins font-semibold text-violet-600 m-6 mb-2 lg:mb-7 tracking-[.1em]'>
            WorkBridge<span className='text-lg'>.employer</span>
          </h1>
        </div>

        <div className='p-8 lg:pr-14'>
          {
            empUsername ? 
            <div>
            <button
            onClick={()=>navigate('/employerprofile')}
            className='px-10 py-2 rounded-sm text-lg text-white bg-violet-600'
          >
           {empUsername}
          </button>
          <button onClick={handleLogout} className='ml-16 shadow-xl py-2 px-6 rounded-lg'>Logout</button>
          </div>:
            
          
          <button
            onClick={() => navigate('/employerlogin')}
            className='px-10 py-2 rounded-sm text-lg text-white bg-violet-600'
          >
            Login
          </button>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
