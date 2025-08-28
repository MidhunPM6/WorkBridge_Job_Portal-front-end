import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employer: null,
  jobs: [],
  applications: [],
  profile: null,
  userProfile: {},
  companyProfile: {}
}

const EmployerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    setEmployerDetails: (state, action) => {
      state.employer = action.payload
    },
    setJobs: (state, action) => {
      state.jobs = action.payload
    },
    setApplications: (state, action) => {
      state.applications = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setClearEmployer: state => {
      state.employer = null
      state.jobs = []
      state.applications = []
      state.profile = null
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload
    },
    setCompanyProfile: (state, action) => {
      state.companyProfile = action.payload
    },
    logout: state => {
      state.employer = null
      state.jobs = []
      state.applications = []
      state.profile = null
    }
  }
})
export const {
  setEmployerDetails,
  logout,
  setJobs,
  setApplications,
  setProfile,
  setClearEmployer,
  setUserProfile,
  setCompanyProfile
} = EmployerSlice.actions
export default EmployerSlice.reducer
