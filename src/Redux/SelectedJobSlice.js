import { createSlice } from '@reduxjs/toolkit'

 const initialState={
  jobSelected : null
 }
const SelectedJob=createSlice({

   name : "selectjob",
   initialState,
   reducers : {

    setSelectedJob:(state,action)=> {

      state.jobSelected=action.payload
    }
    
   }  
})

export const  {setSelectedJob}=SelectedJob.actions
export default SelectedJob.reducer