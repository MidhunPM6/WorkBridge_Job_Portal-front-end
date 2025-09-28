import NavBar from '../../Components/Candidate-Components/LandingPage/NavBar'
import HomeMain from '../../Components/Candidate-Components/LandingPage/LandingPage'

import Services from '../../Components/Candidate-Components/Services/Services'
import About from "../../Components/Candidate-Components/About/Aboutus"
import Footer from '../../Components/Candidate-Components/Footer/Footer'




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
