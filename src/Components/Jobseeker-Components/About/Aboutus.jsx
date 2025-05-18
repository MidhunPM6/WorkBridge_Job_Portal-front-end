import React from "react";
import aboutimg from "../../../assets/About/aboutimg.png";

const Aboutus = () => {
  return (
    <>
      <div className=" bg-stone-50 " id="about">
        <div className="flex flex-col justify-center items-center pt-20 gap-4 w-full p-10 ">
          <h1 className="font-bold lg:text-4xl text-2xl">About Us & Our Commitment</h1>
          <p className="text-gray-600 text-sm">Connecting talent with opportunity — and doing it better than anyone else.</p>

        </div>
        <div className="flex flex-col lg:justify-around justify-center items-center lg:flex-row font-poppins mt-4 text-sm  pb-20">


        <div className="">
          <img src={aboutimg} alt="" className="lg:w-[35vw] w-[90vw] lg:m-1 " />
        </div>
        <div className="lg:mt-20 lg:w-[55vh] flex flex-col items-center lg:items-start">
          <h1 className="text-xl  font-semibold  text-center lg:text-left mb-4 lg:mb-0">
            About Us
          </h1>
          <p className="p-4 text-gray-600 text-center  lg:text-left leading-6">
          Our job portal features advanced filtering options for job seekers, allowing users to narrow down opportunities based on location, industry, experience, and more. We offer skill assessments and resources like resume-building tools, interview guides, and career advice to empower candidates in their job search. With real-time job alerts and application tracking, candidates stay updated on the latest opportunities and follow their application progress easily.
          </p>

          <h1 className="text-xl l font-semibold text-center lg:text-left mt-6 lg:mt-12">
            Why Choose Us?
          </h1>
        
          
          <p className="p-4 text-gray-600 text-center lg:text-left leading-6">
          Experience tailored job matches with our advanced filtering tools that connect you with opportunities aligned to your skills and goals. Access valuable resources, including resume-building tools and skill assessments, to enhance your job search. Receive real-time job alerts to stay updated on the latest openings that fit your profile. Enjoy seamless application tracking to manage your progress effortlessly. Join us and connect with top employers looking for talent like you.
          </p>

          <button className="mt-4 mb-8 lg:mb-2 text-md  shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)] hover:text-violet-600 py-2 px-6 lg:px-8 rounded-md text-gray-600  hover:scale-105 transition-all duration-300  ">
            Learn More
          </button>
        </div>
         </div>
      </div>
    </>
  );
};

export default Aboutus;
