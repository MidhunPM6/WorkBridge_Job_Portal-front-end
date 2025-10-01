import { axiosInstance } from "../../Axios/Axios-instance"
import { apiCall } from "../apiCall"



const useChat = ( ) => {
  const getChatHistory = (userId) => {
    return apiCall(async()=>{
        return await axiosInstance.get(
        `/api/common/fetchChatHistory/${userId}`)
    })
  }
  return {
    getChatHistory
  }
}

export default useChat
