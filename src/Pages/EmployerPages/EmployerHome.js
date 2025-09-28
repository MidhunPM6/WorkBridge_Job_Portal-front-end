import React from 'react'
import EmpMainPage from '../../Components/Empolyer-Components//Employer_main/EmpMainPage'
import Chatds from '../../Components/Empolyer-Components/Employer_main/Chatds'
import ChatBot from '../../Components/Empolyer-Components/Employer_main/ChatBotDs'
import SortingDes from '../../Components/Empolyer-Components/Employer_main/SortingDes'
import Footer from '../../Components/Empolyer-Components/Footer/Footer'
import Navbar from '../../Components/Empolyer-Components/Employer_main/Navbar'





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
   