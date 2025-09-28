import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'
const useExperience = () => {
  const addExperience = formData => {
    return apiCall(() => {
      return axiosInstance.post('/api/candidate/experience', formData)
    })
  }

  const fetchAllExperiences = () => {
    return apiCall(() => {
      return axiosInstance.get('/api/candidate/experience')
    })
  }

  const deleteExperience = expID => {
    return apiCall(() => {
      return axiosInstance.delete(`/api/candidate/experience/${expID}`)
    })
  }

  return { addExperience, fetchAllExperiences, deleteExperience }
}

export default useExperience
