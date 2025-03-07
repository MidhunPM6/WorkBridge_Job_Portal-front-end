import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserSlice/UserSlice'

const store =configureStore({
    reducers : {
        user : userReducer,
    }
})


export default store 