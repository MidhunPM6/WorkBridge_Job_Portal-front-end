import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useAuth = () => {
  const login = empLoginForm => {
    return apiCall(async () => {
      return await axiosInstance.post('/api/auth/login', empLoginForm)
    })
  }

  const signup = empSignupform => {
    return apiCall(async () => {
      return await axiosInstance.post('/api/auth/signup', empSignupform)
    })
  }

  return {
    login,
    signup
  }
}

export default useAuth
