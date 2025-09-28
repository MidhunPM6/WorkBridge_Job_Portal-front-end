import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useProfile = () => {
  const getLocation = async () => {
    return apiCall(async () => {
      return await fetch('/districtList.json')
    })
  }

  const getDesignation = async () => {
    return apiCall(async () => {
      return await fetch('/designationList.json')
    })
  }

  const saveProfileData = async formData => {
    return apiCall(async () => {
      return await axiosInstance.post('/api/candidate/profile', formData)
    })
  }

  const uploadProfilePic = async (formData, { onFinally } = {}) => {
    return apiCall(
      async () =>
        await axiosInstance.post('/api/common/fileupload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
      { onFinally }
    )
  }

  const uploadProfileCoverPic = (formData, { onFinally }) => {
    return apiCall(
      async () =>
        await axiosInstance.post('/api/common/fileupload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
      { onFinally }
    )
  }

  const getProfile = ({onFinally}) => {
    return apiCall(
      async () => {
        return await axiosInstance.get('/api/candidate/profile')
      },
      { onFinally }
    )
  }

  const uploadResume =(formData,{onFinally})=>{
    return apiCall(
      async () => {
        return await axiosInstance.post('/api/candidate/resumeUpload',formData)
      },
      { onFinally }
    )

  } 

  const deleteResume = async () => {
    return apiCall(async () => {
      return await axiosInstance.delete('/api/candidate/deleteResume')
    })
  }


  return {
    getLocation,
    getDesignation,
    saveProfileData,
    uploadProfilePic,
    uploadProfileCoverPic,
    getProfile,
    uploadResume,
    deleteResume,
  }
}

export default useProfile
