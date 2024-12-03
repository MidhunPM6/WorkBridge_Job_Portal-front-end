import axios from "axios";

export const axiosAuth=axios.create({

    baseURL : process.env.REACT_APP_AXIOS_AUTH_URL
     
})

export const axiosJobPost=axios.create({

    baseURL :process.env.REACT_APP_AXIOS_JOBPOST_URL
    
})