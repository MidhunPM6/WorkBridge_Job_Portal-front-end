import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6  border-b-2 border-gray-40 h-20   ">
        <div className="flex items-center ">
          <h1 className="text-4xl font-bricolage font-semibold  text-fuchsia-600 m-8 mb-7 hover:text-fuchsia-500">
            taskEasy
          </h1>

          <div className="space-x-10 ml-20 font-poppins ">
            <button className="text-md hover:text-fuchsia-600">Home</button>
            <button className="text-md hover:text-fuchsia-600">Services</button>
            <button className="text-md hover:text-fuchsia-600">
              About Us{" "}
            </button>
            <button className="text-md hover:text-fuchsia-600">
              Contact US
            </button>
            <button className="text-md border-2 border-gray-400 p-2 rounded-full px-4 hover:border-black">
              Task Management
            </button>
          </div>
        </div>
        <div className="pr-16">
          <button className="text-lg   bg-fuchsia-600 py-2 px-10 text-white rounded-md shadow-md hover:bg-fuchsia-700">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
