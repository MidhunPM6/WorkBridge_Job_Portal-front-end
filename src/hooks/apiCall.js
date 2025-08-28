import toast from 'react-hot-toast'

export const apiCall = async fn => {
  try {
    const response = await fn()
    return { success: true, response }
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Something went wrong')
    return { success: false, error }
  }
}
 