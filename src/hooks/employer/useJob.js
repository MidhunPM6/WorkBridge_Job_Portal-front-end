import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useJob = () => {
  const getAllJobs = () => {
    return apiCall(async () => {
      return await axiosInstance.get('api/common/jobs')
    })
  }

  const update = formData => {
    return apiCall(async () => {
      return await axiosInstance.patch(
        `api/employer/updateJob/${formData._id}`,
        formData
      )
    })
  }
  const deleteJob = jobId => {
    return apiCall(async () => {
      return await axiosInstance.delete(`api/employer/deleteJob/${jobId}`)
    })
  }

  const getDesignationData = () => {
    return apiCall(async () => {
      const res = await fetch('/designationList.json')
      const data = await res.json()
      // Format data for react-select
      const mapped = data.map(d => ({
        label: d.title,
        value: d.title
      }))
      return mapped
    })
  }

  const getMyJobs = () => {
    return apiCall(async () => {
      return await axiosInstance.get('api/employer/myjobs')
    })
  }

  const postJob = formData => {
    return apiCall(async () => {
      return await axiosInstance.post('/api/employer/postjob', formData)
    })
  }

  const getReceviedApplications = () => {
    return apiCall(async () => {
      return await axiosInstance.get('/api/employer/applications')
    })
  }

  return {
    getAllJobs,
    update,
    deleteJob,
    getDesignationData,
    getMyJobs,
    postJob,
    getReceviedApplications
  }
}

export default useJob
