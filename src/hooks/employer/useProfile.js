import React from 'react'
import { apiCall } from '../apiCall'
import { axiosInstance } from '../../Axios/Axios-instance'

const useProfile = () => {
  const apiCalls = [
    axiosInstance.get('api/employer/profileData'),
    axiosInstance.get('api/employer/getCandidates')
  ]

  const getCompanyProfile = async () => {
    return apiCall(async () => {
      const [comapanyProfile, candidates] = await Promise.all(apiCalls)
      return { comapanyProfile, candidates }
    })
  }

  const uploadFile = async (formData, { onFinally }) => {
    return apiCall(
      async () => {
        return await axiosInstance.post('/api/common/fileupload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      },
      { onFinally }
    )
  }

  const profileDataUpload = async data => {
    return apiCall(async () => {
      return await axiosInstance.post('/api/employer/profile', data)
    })
  }

  return {
    getCompanyProfile,
    uploadFile,
    profileDataUpload
  }
}

export default useProfile
