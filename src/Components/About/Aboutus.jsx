import React from "react";
import aboutimg from "../../assets/About/aboutimg.png";

const Aboutus = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row font-poppins mt-4 text-sm" id="about">
        <div className="place-items-center">
          <img src={aboutimg} alt="" className="w-[90vh] lg:m-10 lg:mt-32 " />
        </div>
        <div className="lg:mt-20 lg:w-[55vh] flex flex-col items-center lg:items-start">
          <h1 className="text-2xl  font-semibold text-violet-600 text-center lg:text-left mb-4 lg:mb-0">
            About Us
          </h1>
          <p className="p-4 text-gray-600 text-center  lg:text-left">
          Our job portal features advanced filtering options for job seekers, allowing users to narrow down opportunities based on location, industry, experience, and more. We offer skill assessments and resources like resume-building tools, interview guides, and career advice to empower candidates in their job search. With real-time job alerts and application tracking, candidates stay updated on the latest opportunities and follow their application progress easily.
          </p>

          <h1 className="text-2xl l font-semibold text-violet-600 text-center lg:text-left mt-6 lg:mt-12">
            Why Choose Us?
          </h1>
          <p className="p-4 text-gray-600 text-center lg:text-left">
          Experience tailored job matches with our advanced filtering tools that connect you with opportunities aligned to your skills and goals. Access valuable resources, including resume-building tools and skill assessments, to enhance your job search. Receive real-time job alerts to stay updated on the latest openings that fit your profile. Enjoy seamless application tracking to manage your progress effortlessly. Join us and connect with top employers looking for talent like you.
          </p>

          <button className="mt-4 mb-8 lg:mb-2 text-md  shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)] hover:text-violet-600 py-2 px-6 lg:px-8 rounded-md text-gray-600 hover:underline underline-offset-8   ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
