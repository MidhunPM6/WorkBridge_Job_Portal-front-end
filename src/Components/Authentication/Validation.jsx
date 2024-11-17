// Register Errror
export const registerValidation=(values)=>{
    const registerError={}

    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


    if(!values.name){
        registerError.name="Name Required"
    }

    if(values.email===""){
        registerError.email="Email Required"

    }else if(!email_pattern.test(values.email)){
        registerError.email="Invalid Email"
    }


    if(!values.password){
        registerError.password="Password required"
    }else if(!password_pattern.test(values.password)){
        registerError.password="Password not Strong"
    }
    return registerError
    }



    //Login Error 
    export const LoginValidation=(values)=>{
        const LoginError={}

        const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

        if(!values.email){
            LoginError.email="Email Required"
        }else if(!emailpattern.test(values.email)){
            LoginError.email="Email Invalid"

        }

        if(!values.password){
            LoginError.password="Enter the password"
        }
        return LoginError
        
    }