import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  experience: [],
  education : [],
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

    logout: state => {
      state.user = null
    }
  }
})

export const { setUserDetails, logout, setExperience ,setEducation} = UserSlice.actions
export default UserSlice.reducer
