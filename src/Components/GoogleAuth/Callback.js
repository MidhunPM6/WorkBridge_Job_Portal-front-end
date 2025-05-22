import React, { useEffect } from 'react'
import LazyLoad from '../lazyLoading/Loading'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../Axios/Axios-instance'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setEmployerDetails } from '../../Redux/EmployerSlice'
import { setUserDetails } from '../../Redux/UserSlice'

const Callback = () => {
  const navigate = useNavigate('')
  const dispatch = useDispatch()
  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      console.log('code is  : ' + code)

      const stateEncoded = urlParams.get('state')
      const { role } = JSON.parse(atob(stateEncoded))
      console.log(role)
      if (!code) {
        console.error('Authorization code missing')
        navigate('/')
        return
      }
      try {
        const codeVerifier = localStorage.getItem('code_verifier')
        console.log('code verifier' + codeVerifier)

        if (!codeVerifier) {
          console.error('Code verifier missing.')
          navigate('/')
          return
        }
        console.log(code)

        const response = await axiosInstance.post(
          '/api/auth/oauth',
          {
            code,
            codeVerifier,
            role
          },
          {
            baseURL: process.env.REACT_APP_AXIOS_URL,
            withCredentials: true
          }
        )
        console.log(response)

        localStorage.removeItem('code_verifier')
        if (response.status === 200) {
          console.log('Login Success')
        }

        if (response.data.user.role === 'candidate') {
          dispatch(setUserDetails(response.data.user))
          navigate('/')
        } else if (response.data.user.role === 'employer') {
          dispatch(setEmployerDetails(response.data.user))
          navigate('/employer')
        }
      } catch (error) {
        console.log(error)
      }
    }
    handleAuthCallback()
  }, [])

  return (
    <div>
      <LazyLoad></LazyLoad>
    </div>
  )
}

export default Callback
