import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { setUserDetails } from '../../../Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import useOauth from '../../../hooks/common/useOauth'
import { useNavigate } from 'react-router-dom'
import { setEmployerDetails } from '../../../Redux/EmployerSlice'

const GoogleButton = ({ role }) => {
  const dispatch = useDispatch()
  const { handleGoogleAuth } = useOauth()
  const navigate = useNavigate()
  // handle submit function
  const handleSuccess = async credentialResponse => {
    const googleToken = credentialResponse.credential

    // Send Google token to backend
    const { success, response } = await handleGoogleAuth(googleToken, role)
    if (success) {
      if (response.data.User.role === 'candidate') {
        dispatch(setUserDetails(response.data.User))
        navigate('/')
      } else if (response.data.User.role === 'employer') {
        dispatch(setEmployerDetails(response.data.User))
        navigate('/employer')
      }
    }
  } 

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ToastContainer></ToastContainer>
        <div className=' flex flex-col items-center gap-4 w-full'>
          <h2 className='text-gray-600'>Login with Google</h2>
          <div className='w-full'>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => console.log('Login Failed')}
            />
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default GoogleButton
