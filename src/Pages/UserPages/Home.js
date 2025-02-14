import React from 'react'
import NavBar from '../../Components/Main-Page/NavBar'
import HomeMain from '../../Components/Main-Page/HomeMain'
import SocialBar from '../../Components/Main-Page/SocialBar'
import Services from '../../Components/Services/Services'
import About from "../../Components/About/Aboutus"
import Footer from '../../Components/Footer/Footer'
import SearchBar from '../../Components/Main-Page/SearchBar'



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
