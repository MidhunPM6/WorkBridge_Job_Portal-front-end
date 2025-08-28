import React from 'react'
import { logout, setClearUser} from '../../Redux/UserSlice'
import { useDispatch } from 'react-redux'

import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useAccountSettings = () => {
  const dispatch = useDispatch()
 
  const logoutUser = async () => {
    return apiCall(async () => {
      const response = await axiosInstance.post(
        'api/auth/logout',
        {},
        {
          withCredentials: true
        }
      )
      dispatch(logout())
      return response
    })
  }

  const deleteAccount = async () => {
    return apiCall(async () => {
      const response = await axiosInstance.delete(
        '/api/candidate/deleteAccount',
        {
          withCredentials: true
        }
      )
      dispatch(setClearUser())
      return response
    })
  }

  const changeUsername = async usernameFormData => {
    return apiCall(async () => {
      const response = await axiosInstance.post(
        '/api/candidate/changename',
        usernameFormData,
        {
          withCredentials: true
        }
      )
      return response
    })
  }

  const passwordOtpVerification = async (changePassword, email) => {
    return apiCall(async () => {
      const response = await axiosInstance.post(
        '/api/candidate/changepassword',
        {
          email: email,
          password: changePassword.currentPassword
        },
        {
          withCredentials: true
        }
      )
      return response
    })
  }

  const otpVerifiy = async (email, verificationCode, changePassword) => {
    return apiCall(async () => {
      const response = await axiosInstance.post(
        '/api/candidate/verifyOtp',
        {
          email: email,
          verificationCode: verificationCode,
          newPassword: changePassword.newPassword
        },
        {
          withCredentials: true
        }
      )
      return response
    })
  }

  return {
    logoutUser,
    deleteAccount,
    changeUsername,
    passwordOtpVerification,
    otpVerifiy
  }
}

export default useAccountSettings
