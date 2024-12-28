import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { ContextSeekerName } from "../../Context/SeekerContext";
import customerCareImg from '../../assets/customercare.png'
import { UserContext } from "../../Context/UserDetailsContext";



const NavBar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {userDetails}=useContext(UserContext)
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  } 
  


 
  
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center p-6 border-b-2 border-gray-200 h-auto lg:h-20 lg:sticky top-0 z-50 bg-white ">
  <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
    <h1 onClick={()=>navigate('/')} className="text-3xl lg:text-4xl font-poppins font-semibold text-violet-600 m-6 mb-2 lg:mb-7 tracking-[.1em] cursor-pointer">
      WorkBridge
    </h1>

    <div className="hidden lg:flex space-x-10 ml-0 lg:ml-20 font-poppins mt-4 lg:mt-0 text-gray-600">
      <button className="text-md hover:text-violet-600">Home</button>
      <NavHashLink to="#service" className="text-md hover:text-violet-600 place-content-center" smooth>Service</NavHashLink>
      <NavHashLink to="#about" className="text-md hover:text-violet-600 place-content-center" smooth>About Us</NavHashLink>
      <NavHashLink to="#contact" className="text-md hover:text-violet-600 place-content-center" smooth>Contact Us</NavHashLink>
     
    </div>
  </div>
  {
    userDetails ?
  <div className="lg:ml-40 flex flex-row">

    <button onClick={()=>navigate('/profile')} className="flex flex-row mr-2  py-2 px-4 border-2 border-violet-600 hover:bg-violet-600 hover:text-white rounded-md lg:ml-32 ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
      {userDetails.name}
    </button>
    
    </div>
    : 

   ""
  }
  

  <div className="flex justify-between w-full lg:w-auto mt-4 lg:mt-0">
    <div className="pr-0 lg:pr-8 font-poppins flex items-center">
      <button  className="text-lg lg:p-2 p-4 bg-violet-600 py-6 lg:px-4   text-white rounded-full  hover:bg-violet-700  " >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
</svg>
    
      </button>
      
    </div>
    <div>
      <img src={customerCareImg} alt=""  className="w-12 mr-10 cursor-pointer"/>

    </div>

    <div className="lg:hidden flex items-center">
      <button  onClick={toggleMenu} className="text-violet-600 text-3xl focus:outline-none">
        &#9776;
      </button>
    </div>
  </div>

  
  <div
          className={`flex-col space-y-4 mt-6 lg:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <NavHashLink to="#home" className="text-md hover:text-violet-600 place-content-center" smooth>Home</NavHashLink>
      <NavHashLink to="#service" className="text-md hover:text-violet-600 place-content-center" smooth>Service</NavHashLink>
      <NavHashLink to="#about" className="text-md hover:text-violet-600 place-content-center" smooth>About Us</NavHashLink>
      <NavHashLink to="#contact" className="text-md hover:text-violet-600 place-content-center" smooth>Contact Us</NavHashLink>
     
        </div>
</div>

    </>
  );
};

export default NavBar;
