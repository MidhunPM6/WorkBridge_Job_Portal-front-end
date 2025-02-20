import React from 'react'
import Navbar from '../../Employer-Components/Employer_main/Navbar'
import EmpMainPage from '../../Employer-Components/Employer_main/EmpMainPage'
import Chatds from '../../Employer-Components/Employer_main/Chatds'
import ChatBot from '../../Employer-Components/Employer_main/ChatBotDs'
import SortingDes from '../../Employer-Components/Employer_main/SortingDes'
import Footer from '../../Employer-Components/Footer/Footer'





const EmployerHome = () => {
  return (
    <div>
      <Navbar/>
      <EmpMainPage/>   
      <Chatds/>
      <ChatBot/>
      <SortingDes/>
      <Footer/>
      
    </div>
    
    
  )
}

export default EmployerHome
   