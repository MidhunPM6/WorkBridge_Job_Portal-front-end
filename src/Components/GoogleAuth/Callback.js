import React, { useEffect } from 'react'
import LazyLoad from '../lazyLoading/Loading'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../Axios/Axios-instance'
import  axios  from 'axios'

axios.defaults.withCredentials = true


const Callback = () => {
  const navigate = useNavigate('')
  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      if (!code) {
        console.error('Authorization code missing') 
        navigate('/')
        return
      }
      try {
        const codeVerifier = sessionStorage.getItem('code_verifier')
        if (!codeVerifier) {
          console.error('Code verifier missing.')
          navigate('/')
          return
        }
        console.log(code);
        

        const response = await axiosInstance.post('/api/auth/oauth', {
          code,
          codeVerifier,
          
          
        },{withCredentials: true})
        console.log(response)

        localStorage.removeItem('code_verifier')
        navigate('/jobview')
      } catch (error) {
        console.log(error)
      }

    }
    handleAuthCallback()
  },[])

  return (
    <div>
      <LazyLoad></LazyLoad>
    </div>
  )
}

export default Callback
