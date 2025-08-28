// Generating random code for code verifier

export const generateRandomString = (length = 43) => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  let result = ''
  const cryptoObj = window.crypto || window.msCrypto

  const randomValues = new Uint8Array(length)
  cryptoObj.getRandomValues(randomValues)

  for (let i = 0; i < length; i++) {
    // Use modulo operation to get a value between 0 and charset.length - 1
    const randomIndex = randomValues[i] % charset.length
    result += charset[randomIndex]
  }

  return result
}

//  hashed the code verifier
export const sha256 = async plain => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/=/g, '') 
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}


export const genaratePKCE =async()=>{
    const codeVerifier = generateRandomString()
    const codeChallenge= await sha256(codeVerifier)

   localStorage.setItem('code_verifier',codeVerifier)

    return {codeVerifier,codeChallenge} 

}  