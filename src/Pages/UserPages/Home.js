import React from 'react'
import NavBar from '../../Components/Jobseeker-Components/Main-Page/NavBar'
import HomeMain from '../../Components/Jobseeker-Components/Main-Page/HomeMain'

import Services from '../../Components/Jobseeker-Components/Services/Services'
import About from "../../Components/Jobseeker-Components/About/Aboutus"
import Footer from '../../Components/Jobseeker-Components/Footer/Footer'
import SearchBar from '../../Components/Jobseeker-Components/Main-Page/SearchBar'



const Home = () => {
  return (
    <div>
      <NavBar  />
      <SearchBar  />
      <HomeMain />
      <Services/>
      <About/>
      <Footer/>
    
      
     
    </div>
  )
}

export default Home
