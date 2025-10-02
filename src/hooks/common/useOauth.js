import { axiosInstance } from '../../Axios/Axios-instance'
import { apiCall } from '../apiCall'

const useOauth = () => {
  const handleGoogleAuth = (googleToken,role) => {
    return apiCall(async () => {
      return await axiosInstance.post('api/auth/oauth', {
        googleToken,
        role: role
      })
    })
  }

  return {handleGoogleAuth}
}

export default useOauth
