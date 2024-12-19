import axios from "axios";

export const axiosAuth=axios.create({

    baseURL : process.env.REACT_APP_AXIOS_AUTH_URL
     
})

export const axiosJobPost=axios.create({

    baseURL :process.env.REACT_APP_AXIOS_JOBPOST_URL
    
})

export const axiosJobDetails=axios.create({

    baseURL :process.env.REACT_APP_AXIOS_JOBDETAILS_URL
    
})

export const axiosJobApplication=axios.create({

    baseURL :process.env.REACT_APP_AXIOS_JOBAPPLICATION_URL
    
})

