import React from "react";
import aboutimg from "../../assets/About/aboutimg.png";

const Aboutus = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row font-poppins mt-20" id="about">
        <div>
          <img src={aboutimg} alt="" className="w-[90vh] lg:m-10 lg:mt-32 " />
        </div>
        <div className="lg:mt-20 lg:w-[55vh] flex flex-col items-center lg:items-start">
          <h1 className="text-2xl lg:text-3xl font-semibold text-violet-600 text-center lg:text-left mb-4 lg:mb-0">
            About Us
          </h1>
          <p className="p-4 text-gray-600 text-center lg:text-left">
            Welcome to TaskEasy, your one-stop platform designed to simplify and
            enhance the way you manage tasks, collaborate with teams, and bring
            creative ideas to life. Our mission is to empower individuals and
            businesses by offering a suite of powerful tools that blend
            productivity, creativity, and seamless collaboration.
          </p>

          <h1 className="text-2xl lg:text-3xl font-semibold text-violet-600 text-center lg:text-left mt-6 lg:mt-12">
            Why Choose Us?
          </h1>
          <p className="p-4 text-gray-600 text-center lg:text-left">
            We believe that productivity and creativity go hand-in-hand. Our
            platform is built for those who want to maximize efficiency without
            compromising on quality. By combining powerful features with a
            user-friendly interface, we provide a seamless experience for
            individuals, teams, and businesses alike.
          </p>

          <button className="mt-4 mb-8 lg:mb-2 text-lg border-2 border-violet-600 py-2 px-8 lg:px-12 rounded-md text-gray-600 hover:underline underline-offset-8 hover:text-violet-600 hover:border-gray-50">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
