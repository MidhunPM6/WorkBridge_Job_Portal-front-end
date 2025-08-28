import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import { axiosInstance } from '../../Axios/Axios-instance'
import { setUserDetails } from '../../Redux/UserSlice'
import { useNavigate } from 'react-router-dom'
import { apiCall } from '../apiCall'

const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async loginForm => {
    return apiCall(async () => {
      const response = await axiosInstance.post('api/auth/login', loginForm, {
        withCredentials: true
      })
      dispatch(setUserDetails(response.data.account))
      return response
    })
  }

  const handleSignup = async formData => {
    return apiCall(async () => {
      const response = await axiosInstance.post('/api/auth/signup', formData)
    })
  }

  return { handleSignup, handleLogin }
}

export default useAuth
