import {useQuery,} from '@tanstack/react-query'
import { axiosInstance } from '../Axios/Axios-instance'

export const useFetchEmployer = (url) => {
  return useQuery({
        queryKey: ['employer'],
        queryFn: async () => {
          const res = await axiosInstance.get('/api/common/fetchEmployerData', {
            withCredentials: true
          })
         
          
          return res.data.employer
        },
        refetchOnWindowFocus: false
      })
      
}