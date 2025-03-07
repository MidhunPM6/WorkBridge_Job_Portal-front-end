import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    email: null
  }
  ,
reducers :{
    setUserDetails:(state,action)=>{
        return action.payload
    }
  }
})

export const { setUserDetails } = UserSlice.actions;
export default UserSlice.reducer;     