import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleimg from "../../assets/google.png";
import axios from "axios";
import {LoginValidation} from '../Authentication/Validation'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAuth } from "../../Axios/Axios-instance";


const Login = () => {
  const navigate = useNavigate();

const [error,setError]=useState('')

  // Login form data
 const[loginForm,SetLoginForm]=useState({
  email:"",
  password:"",
 })
  
 const handleOnchange=(e)=>{
    const validationErrors={...loginForm,[e.target.name]:e.target.value}
    SetLoginForm(validationErrors)

 }

  
  //Handler of validation 
  const handleValidation=(e)=>{
    e.preventDefault();
    const errors=LoginValidation(loginForm)
    setError(errors)
    return Object.keys(errors).length === 0


  }
  
  //Handler of login through axios
  const handlelogin = async (e) => {
    e.preventDefault();
    if (!handleValidation(e)) return

    await axiosAuth
      .post("/login",loginForm)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Login Success',{
            onClose:()=>navigate('/')


          })
        } 
      })
      .catch((error) => {   
        toast.error('Invaild Credential',{
         
        })  
      });
      
  };

  return (
    <>
      <div className="lg:flex font-poppins">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
        <div className="h-32 lg:w-[40vw] lg:h-[100vh] bg-violet-600 opacity-75 place-content-center">
          <h1 className="lg:flex lg:place-content-center text-white lg:text-6xl lg:mb-32 font-Kaushan text-3xl flex place-content-center">
            WorkBridge
          </h1>
        </div>
        <div className="lg:w-[60vw] lg:h-[100vh]  lg: flex flex-col items-center lg:pt-36 pt-4 bg-slate-100 ">
          <div className="flex flex-col place-items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-lg">
            <h1 className="text-2xl lg:text-3xl font-semibold  ">Login</h1>
            <form
              action=""
              className="flex flex-col place-items-center p-4 lg:pt-6 "
              onSubmit={handlelogin}
            >
              <input
              
                type="email"
                name="email"
                placeholder="Enter your email"
              
                onChange={handleOnchange}
                className="m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300"
              />
              {error.email && <p className="text-red-800">{error.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
             
                onChange={handleOnchange}
                className="m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300"
              />
              {error.password && <p className="text-red-800">{error.password}</p>}
              <button
              type="submit"
                
                className="m-2 py-2 px-7 bg-violet-500 rounded-md text-white mt-3 hover:bg-violet-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="pt-4 hover:underline "
              >
                Create new account ?
              </button>

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

export default Login;
