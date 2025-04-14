[1mdiff --git a/src/Components/Jobseeker-Components/Profile/AccountSettings/AccountSetting.jsx b/src/Components/Jobseeker-Components/Profile/AccountSettings/AccountSetting.jsx[m
[1mindex cc79379..4895fd5 100644[m
[1m--- a/src/Components/Jobseeker-Components/Profile/AccountSettings/AccountSetting.jsx[m
[1m+++ b/src/Components/Jobseeker-Components/Profile/AccountSettings/AccountSetting.jsx[m
[36m@@ -1,4 +1,4 @@[m
[31m-import React, { useState } from 'react'[m
[32m+[m[32mimport React, { useEffect, useState } from 'react'[m
 import { useNavigate } from 'react-router-dom'[m
 import { useDispatch, useSelector } from 'react-redux'[m
 import { logout, setUserDetails } from '../../../../Redux/UserSlice'[m
[36m@@ -13,16 +13,65 @@[m [mconst AccountSetting = () => {[m
   const [modalIsOpen, setIsOpen] = useState(false)[m
   const [isVisible, setIsVisible] = useState(false)[m
   const [verificationInput, setVerificationInput] = useState(false)[m
[32m+[m[32m  const [seconds, setSeconds] = useState(60)[m
[32m+[m[32m  const [isActive, setIsActive] = useState(false)[m
[32m+[m[32m  const [showResend, setShowResend] = useState(false)[m
   const [usernameFormData, setUsernameFormData] = useState({[m
     name: '',[m
[31m-    password: ''[m
[32m+[m[32m    password: '',[m
[32m+[m[32m    code: ''[m
   })[m
   const [changePassword, setChangePassword] = useState({[m
     currentPassword: '',[m
[31m-    oldPassword: ''[m
[32m+[m[32m    newPassword: ''[m
   })[m
[31m-[m
   const dispatch = useDispatch()[m
[32m+[m
[32m+[m[32m  const startTimer = () => {[m
[32m+[m[32m    setIsActive(true)[m
[32m+[m[32m    setShowResend(false)[m
[32m+[m[32m  }[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    let timer[m
[32m+[m[32m    if (isActive && seconds > 0) {[m
[32m+[m[32m      timer = setInterval(() => {[m
[32m+[m[32m        setSeconds(prev => prev - 1)[m
[32m+[m[32m      }, 1000)[m
[32m+[m[32m    } else if (seconds === 0) {[m
[32m+[m[32m      setIsActive(false)[m
[32m+[m[32m      setShowResend(true)[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    return () => clearInterval(timer)[m
[32m+[m[32m  }, [isActive, seconds])[m
[32m+[m
[32m+[m[32m  const formatTime = () => {[m
[32m+[m[32m    const min = Math.floor(seconds / 60)[m
[32m+[m[32m    const sec = seconds % 60[m
[32m+[m[32m    return `${min}:${sec < 10 ? '0' + sec : sec}`[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const handleVerification = () => {[m
[32m+[m[32m    otpVerificationPassword()[m
[32m+[m[32m    startTimer()[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const handleResendOTP = () => {[m
[32m+[m[32m    setSeconds(60)[m
[32m+[m[32m    startTimer()[m
[32m+[m[32m    otpVerificationPassword()[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const handleCancel = () => {[m
[32m+[m[32m    setIsVisible(false)[m
[32m+[m[32m    setIsOpen(false)[m
[32m+[m[32m    setVerificationInput(false)[m
[32m+[m[32m    setShowResend(false)[m
[32m+[m[32m    setSeconds(60)[m
[32m+[m[32m    setIsActive(false)[m
[32m+[m[32m    setChangePassword(false)[m
[32m+[m[32m  }[m
[32m+[m
   //Custom Styles for First Modal[m
   const customStyles = {[m
     overlay: {[m
[36m@@ -111,16 +160,31 @@[m [mconst AccountSetting = () => {[m
       })[m
     }[m
   }[m
[32m+[m
[32m+[m[32m  const handleChangePassword = e => {[m
[32m+[m[32m    const changeData = { ...changePassword, [e.target.name]: e.target.value }[m
[32m+[m[32m    setChangePassword(changeData)[m
[32m+[m[32m  }[m
[32m+[m[32m  // Method to use change password[m
   const otpVerificationPassword = async () => {[m
     setVerificationInput(true)[m
[31m-    console.log(user.email);[m
[31m-    [m
[32m+[m[32m    console.log(changePassword)[m
[32m+[m
     try {[m
[32m+[m[32m      if ([m
[32m+[m[32m        !changePassword.currentPassword ||[m
[32m+[m[32m        !changePassword.newPassword ||[m
[32m+[m[32m        changePassword.currentPassword.length < 6 ||[m
[32m+[m[32m        changePassword.newPassword.length < 6[m
[32m+[m[32m      ) {[m
[32m+[m[32m        alert('Fill all the fileds with minimum 6 characters')[m
[32m+[m[32m        setVerificationInput(false)[m
[32m+[m[32m        return[m
[32m+[m[32m      }[m
       const response = await axiosInstance.post([m
         '/api/candidate/changepassword',[m
         {[m
[31m-[m
[31m-          email:user.email,[m
[32m+[m[32m          email: user.email[m
         },[m
         {[m
           withCredentials: true[m
[36m@@ -262,7 +326,9 @@[m [mconst AccountSetting = () => {[m
                 <div className='flex gap-4 mt- text-sm'>[m
                   <button[m
                     className='bg-gray-200 hover:bg-gray-100 p-2 px-6 rounded-sm shadow-md'[m
[31m-                    onClick={() => setIsOpen(false)}[m
[32m+[m[32m                    onClick={() => {[m
[32m+[m[32m                      setIsOpen(false)[m
[32m+[m[32m                    }}[m
                   >[m
                     Cancel[m
                   </button>[m
[36m@@ -313,47 +379,65 @@[m [mconst AccountSetting = () => {[m
                     type='text'[m
                     className='bg-gray-50 mt-4 py-2 p-2  text-sm lg:w-[90%] border rounded-sm shadow-md'[m
                     placeholder='Enter old password  '[m
[31m-                    name='name'[m
[31m-                    onChange={handleChangeUsername}[m
[32m+[m[32m                    name='currentPassword'[m
[32m+[m[32m                    onChange={handleChangePassword}[m
                   />[m
                   <input[m
[31m-                    type='password'[m
[32m+[m[32m                    type='text'[m
                     className='bg-gray-50 mt-4 py-2 text-sm p-2 lg:w-[90%] border rounded-sm shadow-md'[m
                     placeholder='Enter a new  password '[m
[31m-                    name='password'[m
[31m-                    onChange={handleChangeUsername}[m
[32m+[m[32m                    name='newPassword'[m
[32m+[m[32m                    onChange={handleChangePassword}[m
                   />[m
                 </form>[m
                 <div className='flex gap-4 mt-4 text-sm'>[m
                   <button[m
                     className='bg-gray-100 hover:bg-gray-50 p-2 px-6 rounded-sm shadow-md'[m
[31m-                    onClick={() => {[m
[31m-                      setIsVisible(false)[m
[31m-                      setVerificationInput(false)[m
[31m-                    }}[m
[32m+[m[32m                    onClick={handleCancel}[m
                   >[m
                     Cancel[m
                   </button>[m
                   <button[m
[31m-                    onClick={otpVerificationPassword}[m
[31m-                    className=' p-2 px-6 rounded-sm bg-violet-900 text-white hover:bg-violet-950 shadow-md  '[m
[32m+[m[32m                    onClick={handleVerification}[m
[32m+[m[32m                    disabled={verificationInput}[m
[32m+[m[32m                    className={` p-2 px-6 rounded-sm bg-violet-900 text-white hover:bg-violet-950 shadow-md ${[m
[32m+[m[32m                      verificationInput &&[m
[32m+[m[32m                      'cursor-not-allowed hover:bg-gray-300'[m
[32m+[m[32m                    } `}[m
                   >[m
                     Confirm[m
                   </button>[m
                 </div>[m
                 {verificationInput && ([m
                   <div className='flex flex-col justify-center items-center w-full '>[m
[31m-                    <label htmlFor="" className='mt-3 text-xs text-gray-600'>OTP has been sent to your registered email ID.</label>[m
[32m+[m[32m                    <label htmlFor='' className='mt-3 text-xs text-gray-600'>[m
[32m+[m[32m                      OTP has been sent to your registered email ID.[m
[32m+[m[32m                    </label>[m
[32m+[m[32m                    <p className='text-xs mt-3 text-gray-600'>[m
[32m+[m[32m                      Resend otp in : {formatTime()}[m
[32m+[m[32m                    </p>[m
[32m+[m
[32m+[m[32m                    {showResend && ([m
[32m+[m[32m                      <button[m
[32m+[m[32m                        onClick={handleResendOTP}[m
[32m+[m[32m                        className='text-sm mt-1 mb-2 text-blue-500'[m
[32m+[m[32m                      >[m
[32m+[m[32m                        Resend OTP[m
[32m+[m[32m                      </button>[m
[32m+[m[32m                    )}[m
                     <input[m
                       type='password'[m
[32m+[m[32m                      name='code'[m
                       className='bg-gray-50 mt-1 py-2 text-sm p-2 lg:w-[68%] border rounded-sm shadow-md'[m
                       placeholder='Enter the OTP '[m
[31m-                      name='password'[m
[32m+[m[32m                      onChange={handleChangePassword}[m
                     />[m
                     <button[m
                       onClick={otpVerificationPassword}[m
                       className=' p-1 px-6 mt-3 rounded-sm text-sm bg-blue-100 text-blue-500 hover:bg-blue-200 shadow-md  '[m
[31m-                    >Verify and update </button>[m
[32m+[m[32m                    >[m
[32m+[m[32m                      Verify and update{' '}[m
[32m+[m[32m                    </button>[m
                   </div>[m
                 )}[m
 [m
