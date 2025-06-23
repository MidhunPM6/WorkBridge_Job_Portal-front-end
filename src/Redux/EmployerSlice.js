import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    employer: null,
    jobs: [],
    applications: [],
    profile: null,
    candidateProfile: {}
}

const EmployerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {
        setEmployerDetails: (state, action) => {
            state.employer = action.payload;
        },
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        setApplications: (state, action) => {
            state.applications = action.payload;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setClearEmployer: (state) => {
            state.employer = null;
            state.jobs = [];
            state.applications = [];
            state.profile = null;
        },
        setCandidateProfile : (state, action) => {
            state.candidateProfile = action.payload;
        },
        logout: (state) => {
            state.employer = null;
            state.jobs = [];
            state.applications = [];
            state.profile = null;
        }
    }
});
export const {setEmployerDetails, logout, setJobs, setApplications, setProfile, setClearEmployer,setCandidateProfile} = EmployerSlice.actions;
export default EmployerSlice.reducer;