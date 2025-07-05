import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice.js'
import experienceReducer from './UserSlice.js'
import selectedJobReducer from './SelectedJobSlice.js'
import EducationReducer from './UserSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import ProfileReducer from './UserSlice.js'
import storage from 'redux-persist/lib/storage'
import employerReducer   from './EmployerSlice.js'



const presistConfig = {
  key: 'user',
  storage
}
const employerPersistConfig = {
  key: 'employer',
  storage
}

const persistedReducer = persistReducer(presistConfig, userReducer)
const persistedEmployerReducer = persistReducer(employerPersistConfig, employerReducer)

const store = configureStore({
  reducer: {
    user: persistedReducer,
    selectedjob: selectedJobReducer,
    experience: experienceReducer,
    education: EducationReducer,
    profile: ProfileReducer,
    employer: persistedEmployerReducer,
    candidateProfile: persistedEmployerReducer,
    companyProfile: persistedEmployerReducer,
    appliedJobs: persistedReducer,
  }
})

export const persistor = persistStore(store)
export default store
