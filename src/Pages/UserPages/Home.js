import React from 'react'
import NavBar from '../../Components/Jobseeker-Components/LandingPage/NavBar'
import HomeMain from '../../Components/Jobseeker-Components/LandingPage/LandingPage'

import Services from '../../Components/Jobseeker-Components/Services/Services'
import About from "../../Components/Jobseeker-Components/About/Aboutus"
import Footer from '../../Components/Jobseeker-Components/Footer/Footer'




const Home = () => {
  return (
    <div>
      <NavBar  />
      
      <HomeMain />
      <Services/>
      <About/>
      <Footer/>
    
      
     
    </div>
  )
}

export default Home
