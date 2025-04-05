import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  experience: [],
  education : [],
  profile : []
}
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload
    },
    setExperience: (state, action) => {
      state.experience = action.payload
    },
    setEducation: (state, action) => {
      state.education = action.payload
    },
    setProfile : (state,action)=>{
      state.profile = action.payload
    },

    logout: state => {
      state.user = null
      state.experience = []
      state.education =[]
      state.profile =null
    }
  }
})

export const { setUserDetails, logout, setExperience ,setEducation,setProfile} = UserSlice.actions
export default UserSlice.reducer
