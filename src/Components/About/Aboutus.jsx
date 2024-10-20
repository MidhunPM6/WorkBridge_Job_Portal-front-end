import React from "react";
import aboutimg from "../../assets/About/aboutimg.png";

const Aboutus = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row font-poppins mt-20" id="about">
        <div>
          <img src={aboutimg} alt="" className="w-[90vh] lg:m-10 lg:mt-32 " />
        </div>
        <div className=" lg:flex-col lg:mt-20 lg:w-[55vh]  ">
          <h1 className="pl-[17vh] lg:pl-[17vh] font-semibold text-3xl text-violet-600">
            About Us
          </h1>
          <p className="p-4 text-gray-600">
            Welcome to TaskEasy, your one-stop platform designed to simplify and
            enhance the way you manage tasks, collaborate with teams, and bring
            creative ideas to life. Our mission is to empower individuals and
            businesses by offering a suite of powerful tools that blend
            productivity, creativity, and seamless collaboration.
          </p>

          <h1 className="pl-[11vh] lg:pl-[11vh] font-semibold text-3xl text-violet-600">
            Why Choose Us ?
          </h1>

          <p className="p-4 text-gray-600">
            We believe that productivity and creativity go hand-in-hand. Our
            platform is built for those who want to maximize efficiency without
            compromising on quality. By combining powerful features with a
            user-friendly interface, we provide a seamless experience for
            individuals, teams, and businesses alike.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
