import { genaratePKCE } from "./pkce"


const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID
const redirectURI = process.env.REACT_APP_REDIRECT_URI
const authServer = process.env.REACT_APP_AUTH_SERVER

export const authRedirect =async()=>{
 const {codeChallenge} = await genaratePKCE()
 
 const authUrl =`${authServer}?response_type=code&client_id=${clientID}&redirect_uri=${redirectURI}&scope=openid%20profile%20email&code_challenge=${codeChallenge}&code_challenge_method=S256&prompt=select_account`;

 window.location.href = authUrl;

}