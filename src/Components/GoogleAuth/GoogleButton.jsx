import React from 'react'
import { authRedirect } from './googleAuth'

const GoogleButton =  ({ role }) => {
  // handle submit function
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('Role:', role)
    await authRedirect({ role })
  }

  return (
    <div className='flex w-full'>
      <button
        onClick={handleSubmit}
        className=' w-full p-3 justify-center border  flex gap-2 border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-500 hover:shadow transition duration-150'
      >
        <img
          className='w-6 h-6'
          src='https://www.svgrepo.com/show/475656/google-color.svg'
          loading='lazy'
          alt='google logo'
        />
        <span>Continue with Google </span>
      </button>
    </div>
  )
}
 
export default GoogleButton
