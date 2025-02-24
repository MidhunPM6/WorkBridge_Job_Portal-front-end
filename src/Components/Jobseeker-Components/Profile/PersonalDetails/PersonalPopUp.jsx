import axios from 'axios'
import React, { useState } from 'react'

const PersonalPopUp = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: '',
    designation: '',
    linkedin: '',
    wesite: '',
    about: ''
  })

  const handleChange = e => {
    const newData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newData)
  }

  const handleSubmit = async () => {
    const response = await axios.post(
      'http://localhost:5001/api/auth/test',
      formData
    )
  }

  const handleFileChange = e => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }
  return (
    <div>
      <div className='  flex flex-col items-center  '>
        <div className='flex justify-center'>
          <h1 className='text-xl font-semibold'>Personal Details</h1>
        </div>
        <div className='flex flex-col text-sm pt-3'>
          <form action=''>
            <div className='flex justify-start items-center mt-4 gap-6 text-xs '></div>
            <div className='flex gap-5 mt-4 '>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  placeholder='Enter your name'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]   focus:border-2 focus:border-slate-600  boder-blue-600  outline-none rounded-sm bg-gray-50 '
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Mobile
                </label>
                <input
                  type='text'
                  name='mobile'
                  onChange={handleChange}
                  placeholder='Mobile number'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
                />
              </div>
            </div>
            <div className='flex gap-5 mt-4'>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  placeholder='Enter your email'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600  outline-none rounded-sm  bg-gray-50 '
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Location
                </label>
                <input
                  type='text'
                  name='location'
                  onChange={handleChange}
                  placeholder='Enter current location'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
                />
              </div>
            </div>
            <div className='flex gap-5 mt-4'>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Designation
                </label>
                <input
                  type='text'
                  name='designation'
                  onChange={handleChange}
                  placeholder='Enter Designation'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  LInkedIn
                </label>
                <input
                  type='text'
                  name='link'
                  placeholder='LinkedIn Profile (optional)'
                  className='py-2 px-3  border-2 border-transparent focus:border-2 focus:border-slate-600 outline-none rounded-sm  bg-gray-50 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] '
                />
              </div>
            </div>
            <div className='flex gap-5 mt-4'>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                  Portfolio
                </label>
                <input
                  type='text'
                  name='website'
                  onChange={handleChange}
                  placeholder='Portfolio Website (optional)'
                  className='py-2 px-3  border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600  outline-none rounded-sm  bg-gray-50 '
                />
              </div>
            </div>

            <div className='flex flex-col gap-5 mt-4'>
              <textarea
                type='text'
                name='about'
                onChange={handleChange}
                placeholder='Briefly describe your background, skills, and career goals...'
                className=' w-full h-20 max-h-32 border-2 focus:border-2 focus:border-slate-600  outline-none rounded-sm hadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  p-2'
              />
            </div>
            <div className='flex flex-col justify-center  items-center mt-3'>
              <button
                type='button'
                onClick={handleSubmit}
                className=' bg-violet-900 text-white mt-2 text-md px-6 p-1 rounded shadow-xl hover:bg-violet-800  '
              >
                Save
              </button>
              <div>
                <p className='text-xs mt-2 text-gray-600'>
                  Make sure all your details are accurate before saving
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PersonalPopUp
