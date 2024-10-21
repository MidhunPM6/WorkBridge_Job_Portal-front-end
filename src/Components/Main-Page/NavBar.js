import React from "react";
import { useNavigate } from "react-router-dom";

import { NavHashLink } from 'react-router-hash-link';


const NavBar = () => {
  const navigate = useNavigate()

  
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center p-6 border-b-2 border-gray-200 h-auto lg:h-20">
  <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
    <h1 className="text-3xl lg:text-4xl font-poppins font-semibold text-violet-600 m-6 mb-2 lg:mb-7 tracking-[.1em]">
      TaskEasy
    </h1>

    <div className="hidden lg:flex space-x-10 ml-0 lg:ml-20 font-poppins mt-4 lg:mt-0 text-gray-600">
      <button className="text-md hover:text-violet-600">Home</button>
      <NavHashLink to="#service" className="text-md hover:text-violet-600 place-content-center" smooth>Service</NavHashLink>
      <NavHashLink to="#about" className="text-md hover:text-violet-600 place-content-center" smooth>About Us</NavHashLink>
      <NavHashLink to="#contact" className="text-md hover:text-violet-600 place-content-center" smooth>Contact Us</NavHashLink>
      <button className="text-md border-2 border-gray-300 p-2 rounded-full px-4 hover:border-black text-black" >
        Task Management
      </button>
    </div>
  </div>

  <div className="flex justify-between w-full lg:w-auto mt-4 lg:mt-0">
    <div className="pr-0 lg:pr-16 font-poppins">
      <button onClick={()=>navigate('/signup')} className="text-lg bg-violet-600 py-2 px-6 lg:px-10 text-white rounded-md shadow-md hover:bg-violet-700">
        Login
      </button>
    </div>

    <div className="lg:hidden flex items-center">
      <button  className="text-violet-600 text-3xl focus:outline-none">
        &#9776;
      </button>
    </div>
  </div>

  
  <div  className=" flex-col space-y-4 mt-6 lg:hidden hidden">
    <button className="text-md hover:text-violet-600">Home</button>
    <button className="text-md hover:text-violet-600">Services</button>
    <button className="text-md hover:text-violet-600">About Us</button>
    <button className="text-md hover:text-violet-600">Contact Us</button>
    <button className="text-md border-2 border-gray-300 p-2 rounded-full px-4 hover:border-black">
      Task Management
    </button>
  </div>
</div>

    </>
  );
};

export default NavBar;
