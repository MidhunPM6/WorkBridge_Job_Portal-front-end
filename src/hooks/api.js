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

export const useFetchCandidates = (url) => {
  return useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
          const res = await axiosInstance.get('/api/common/fetchCandidateData', {
            withCredentials: true
          })
         console.log(res.data.candidate);
         
          
          return res.data.candidate
        },
        refetchOnWindowFocus: false
      })
      
}