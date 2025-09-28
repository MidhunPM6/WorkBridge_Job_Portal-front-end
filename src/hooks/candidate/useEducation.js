import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useEducation = () => {
  const addEducation = async (formData) => {
    
    return apiCall(async () => {
      return await axiosInstance.post('/api/candidate/education',formData)
    })
  }

  const fetchAllEducations = async () => {
    return apiCall(async () => {
      return await axiosInstance.get('/api/candidate/education')
    })
  }

  const deleteEducation = async (eduID) => {
    return apiCall(async () => {
      return await axiosInstance.delete(`/api/candidate/education/${eduID}`)
    })
  }


  return {
    addEducation,
    fetchAllEducations,
    deleteEducation
  }
}

export default useEducation
