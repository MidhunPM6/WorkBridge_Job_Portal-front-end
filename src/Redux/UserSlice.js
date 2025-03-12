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
        state.id=action.payload.id;
        state.name=action.payload.name;
        state.id=action.payload.email;

    },
    logout: (state) => {
      state.name = null;
      state.id =null
      state.email = null;
    },
  }
})

export const { setUserDetails,logout } = UserSlice.actions;
export default UserSlice.reducer;      