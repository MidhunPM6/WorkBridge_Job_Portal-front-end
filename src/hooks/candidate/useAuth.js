import { useDispatch } from 'react-redux'
import { axiosInstance } from '../../Axios/Axios-instance'
import { setUserDetails } from '../../Redux/UserSlice'
import { apiCall } from '../apiCall'

const useAuth = () => {
  const dispatch = useDispatch()

  const handleLogin = async loginForm => {
    return apiCall(async () => {
      const response = await axiosInstance.post('api/auth/login', loginForm)
      dispatch(setUserDetails(response.data.account))
      return response
    })
  }

  const handleSignup = async formData => {
    return apiCall(async () => {
      const response = await axiosInstance.post('/api/auth/signup', formData)
      return response
    })

  }

  return { handleSignup, handleLogin }
}

export default useAuth
