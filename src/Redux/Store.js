import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice.js'
import selectedJobReducer from './SelectedJobSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const presistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(presistConfig, userReducer)

const store = configureStore({
  reducer: {
    user: persistedReducer,
    selectedjob:selectedJobReducer
  }
})

export const persistor = persistStore(store)
export default store
