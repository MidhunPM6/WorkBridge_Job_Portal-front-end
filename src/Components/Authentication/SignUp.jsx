import React from "react";
import googleimg from "../../assets/google.png";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate= useNavigate()
  return (
    <>
      <div className="lg:flex font-poppins">
        <div className="h-32 lg:w-[40vw] lg:h-[100vh] bg-violet-600 opacity-75"></div>
        <div className="lg:w-[60vw] lg:h-[100vh]  lg: flex flex-col items-center lg:pt-36 pt-4 bg-slate-100 ">
          <div className="flex flex-col place-items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-lg">
            <h1 className="text-2xl lg:text-3xl font-semibold ">Sign Up</h1>
            <form
              action="submit"
              className="flex flex-col place-items-center p-4 lg:pt-6 "
            >
              <input
                type="text"
                placeholder="Enter your name"
                className="m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300  "
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300"
              />
              <input
                type="text"
                placeholder="Enter new password"
                className="m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300"
              />
              <button className="m-2 py-2 px-7 bg-violet-500 rounded-md text-white mt-3 hover:bg-violet-600">
                Sign Up
              </button>
             <button onClick={()=>navigate("/login")} className="pt-4 lg:hover:underline ">Already Account ?</button>

              <h1>or</h1>
              <div className="flex p-2 mt-2 border-2 border-gray-200 rounded-full ">
                <img src={googleimg} alt="" className="w-6 mr-2" />
                <p>Sign in with google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
