import { apiCall } from '../apiCall'
import { axiosInstance } from '../../Axios/Axios-instance'

const useJobList = () => {
  const fetchJobsAndAppliedStatus = async () => {
    return apiCall(async () => {
      const [jobsRes, appliedRes] = await Promise.all([
        axiosInstance.get('/api/common/jobs'),
        axiosInstance.get('/api/candidate/appliedJobs')
      ])
      return { jobsRes, appliedRes }
    })
  }

  const handleConfirm = async job => {
    return apiCall(async () => {
      const response = await axiosInstance.post('/api/candidate/applyJob', job)
      return response
    })
  }

  return { fetchJobsAndAppliedStatus, handleConfirm }
}
export default useJobList
