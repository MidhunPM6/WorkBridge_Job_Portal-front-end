import React  from 'react'
import { useState,useEffect } from 'react'
import { axiosInstance } from '../../Axios/Axios-instance'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProfileFormPopup = () => {

const companyProfile =useSelector(state => state.companyProfile.companyProfile)
   const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website:'',
    headquarter: '',
    sizeOfCompany: '',
    overview: '',
    about: ''
  })
  const [changeData,setChangeData] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    const newObject = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObject)
    setChangeData (true)
  }
  //   API Post Method to save the profile data
 

  useEffect(() => {
    
    
    if (companyProfile) {

      setFormData({
        companyName: companyProfile.companyName || '',
        industry: companyProfile.industry || '',
        website: companyProfile.website || '',
        headquarter: companyProfile.headquarter || '',
        sizeOfCompany: companyProfile.sizeOfCompany || '',
        overview: companyProfile.overview || '',
        about: companyProfile.about || ''
      })
      setLoading(false)
    }
  }, [companyProfile])


   const submitProfile = async () => {
    try {
     
      const response = await axiosInstance.post(
        '/api/employer/profile',
        formData,
        {
          withCredentials: true
        }
      )
      toast.success(response.data.message, {
        duration: 1300
      })
      console.log(response);
      
      setTimeout(() => {
        navigate(0)
      }, 1400)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 1300
      })
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col  '>
      <Toaster position='top-center'></Toaster>
      <form action='' className='flex flex-col justify-center gap-4 pb-10 '>
        <div className='flex  justify-center mb-6 text-2xl font-semibold'>
          <h1>Enter your compnay profile</h1>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600 z'>
              Comapany
            </label>

            <input
              type='text'
              value={formData.companyName}
              placeholder='Enter the comapny name'
              onChange={handleChange}
              name='companyName'
              className='p-2  rounded-md border border-gray-300 lg:w-64 w-full '
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600 '>
              Which type of industry
            </label>
            <input
              type='text'
              value={formData.industry}
              placeholder='Industry'
              onChange={handleChange}
              name='industry'
              className='p-2  rounded-md border border-gray-300 lg:w-64 w-full  '
            />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600 '>
              {' '}
              Enter the website{' '}
            </label>
            <input
              type='text'
              name='website'
              value={formData.website}
              placeholder='Website'
              onChange={handleChange}
              className='p-2  rounded-md border border-gray-300 lg:w-64 w-full    '
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600 '>
              {' '}
              Headquarter of the company
            </label>
            <input
              type='text'
              name='headquarter'
              placeholder='Headquarter'
              value={formData.headquarter}
              onChange={handleChange}
              className='p-2  rounded-md border border-gray-300 lg:w-64 w-full   '
            />
          </div>
        </div>
        <div className='flex gap-8 '>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='' className='text-sm text-gray-600 '>
              Size of the company
            </label>
            <input
              type='number'
              name='sizeOfCompany'
              value={formData.sizeOfCompany}
              placeholder='No of Employees'
              onChange={handleChange}
              className='p-2  rounded-md border border-gray-300  w-full    '
            />
          </div>
        </div>
        <div className='flex flex-col gap-4  '>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-sm text-gray-600'>
              {' '}
              Overview
            </label>
            <textarea
              type='text'
              name='overview'

              value={formData.overview}
              placeholder='Enter a brief description about your company'
              onChange={handleChange}
              className='h-32 max-h-40 border border-stone-200 p-2 rounded-sm'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <label htmlFor='' className='text-sm text-gray-600'>
              {' '}
              About your company
            </label>
            <textarea
              type='text'
              name='about'
              value={formData.about}
              placeholder='Enter a brief description about your services'
              onChange={handleChange}
              className='h-32 max-h-40 border border-stone-200 p-2  rounded-sm'
            />
          </div>
        </div>
      </form>
      <div className='flex w-full justify-center'>
        <button
          onClick={submitProfile}
          disabled={!changeData}
          className={`mt-3 bg-violet-900 p-3 ${!changeData? "cursor-not-allowed": "cursor-pointer"} rounded-md lg:w-40 w-full hover:bg-violet-950 text-white `}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ProfileFormPopup
