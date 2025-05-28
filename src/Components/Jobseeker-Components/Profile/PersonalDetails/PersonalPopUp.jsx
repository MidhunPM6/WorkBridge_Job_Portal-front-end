import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { generalSkills } from './skillsCollection'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import SelectDrop from 'react-select'
import { useSelector } from 'react-redux'
import toast, { ToastBar } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'




const PersonalPopUp = () => {
  const initialFormData = {
    designation: '',
    mobile: '',
    location: '',
    linkedin: '',
    portfolio: '',
    about: '',
    skills: []
  }
  //   states to controller fromData.
  const [formData, setFormData] = useState(initialFormData)
  const [skills, setSkills] = React.useState([])
  const [isFormChanged, setIsFormChanged] = useState(false)
  const [designationData, setDesignationData] = useState([])
  const [district, setDistrict] = useState('')
  const [districtOptions, setDistrictOptions] = useState([])
  const profile = useSelector(state => state.profile.profile)
  const navigate = useNavigate()

  // To Fetch the location data from the json file
  useEffect(() => {
    const fetchLocation = async () => {
      console.log(profile)

      try {
        const response = await fetch('/districtList.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (Array.isArray(data.states)) {
          const districts = data.states.flatMap(state => state.districts)
          setDistrict(districts)
          const formatted = districts.map(d => ({ label: d, value: d }))
          setDistrictOptions(formatted)
        } else {
          console.error(
            'Expected data to be an array, but got:',
            typeof data,
            data
          )
        }
      } catch (error) {
        console.error('Error fetching district list:', error)
      }
    }
    fetchLocation()
  }, [])

  useEffect(() => {
    const fetchDesignationdata = async () => {
      try {
        const res = await fetch('/designationList.json')
        const data = await res.json()

        // Format data for react-select
        const mapped = data.map(d => ({
          label: d.title,
          value: d.title
        }))
        setDesignationData(mapped)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDesignationdata()
  }, [])

  useEffect(() => {
    if (profile) {
      setFormData({
        designation: profile.designation || '',
        mobile: profile.mobile || '',
        location: profile.location || '',
        linkedin: profile.linkedin || '',
        portfolio: profile.portfolio || '',
        about: profile.about || '',
        skills: profile.skills || []
      })
      setSkills(profile.skills || [])
    }
  }, [profile])

  //  Multi Select Dropdwon alignments.
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  }

  //  Method to fetch the change in Dropdown and fromData.
  const handleChangeSkill = event => {
    const {
      target: { value }
    } = event

    const selectedSkills = typeof value === 'string' ? value.split(',') : value
    setSkills(selectedSkills)
    const updatedForm = { ...formData, skills: selectedSkills }
    setFormData(updatedForm)
    checkForChanges(updatedForm)
  }
  //  Handles the change in input fields
  const handleChange = e => {
    const changeData = { ...formData, [e.target.name]: e.target.value }
    setFormData(changeData)
    checkForChanges({ changeData })
  }
  // handles the chanege in location input field
  const handleDistrictChange = selectedOption => {
    const updatedForm = {
      ...formData,
      location: selectedOption?.value || ''
    }
    setFormData(updatedForm)
    checkForChanges({ changeData: updatedForm })
  }
  const handleDesignationChange = selectedOption => {
    const updatedForm = {
      ...formData,
      designation: selectedOption?.value || ''
    }
    setFormData(updatedForm)
    checkForChanges({ changeData: updatedForm })
  }

  // Merge skills data to formData.
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      skills
    }))
  }, [skills])

  // This method is used to call api with the formData using post method.
  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        '/api/candidate/profile',
        formData,
        { withCredentials: true }
      )
      toast.success(response.data.message, {})
      setTimeout(() => {
        navigate(0)
      }, 2000)
    } catch (error) {
      console.error(error);
      
      toast.error(error.response?.data?.message || 'Server Error', {
        duration: 1300
      })
    }
  }
  // checking the changing data
  const checkForChanges = newFormData => {
    const isChanged =
      JSON.stringify(newFormData) !== JSON.stringify(initialFormData)
    setIsFormChanged(isChanged)
  }

  return (
    <div className='  flex flex-col  w-full items-center justify-center bg-white  p-4'>
      <div className='flex justify-center '>
        <h1 className='text-xl font-semibold'>Personal Details</h1>
      </div>
      <div className='flex flex-col text-sm pt-3'>
        <form action=''>
          <div className='flex justify-start items-center mt-4 gap-6 text-xs '></div>

          <div className='flex gap-5 mt-4'>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Designation
              </label>
              <div className='w-full lg:w-[18vw]'>
                <SelectDrop
                  name='designation'
                  options={designationData}
                  value={designationData.find(
                    opt => opt.value === formData.designation
                  )}
                  onChange={handleDesignationChange}
                  isClearable
                  placeholder=''
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Location
              </label>
              <div className='w-full lg:w-[18vw]'>
                <SelectDrop
                  name='district'
                  options={districtOptions}
                  value={districtOptions.find(
                    opt => opt.value === formData.location || null
                  )}
                  onChange={handleDistrictChange}
                  isClearable
                  placeholder='Select a district'
                />
              </div>
            </div>
          </div>
          <div className='flex gap-5 mt-4'>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Mobile
              </label>
              <input
                type='text'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                placeholder='Mobile number'
                className='py-2 lg:w-[18vw] p-2 w-full    border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                LinkedIn
              </label>
              <input
                type='text'
                value={formData.linkedin}
                onChange={handleChange}
                required
                name='linkedin'
                placeholder='LinkedIn Profile (optional)'
                className='py-2 lg:w-[18vw] p-2 w-full   border-2 border-transparent focus:border-2 focus:border-slate-600 outline-none rounded-sm  bg-gray-50 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] '
              />
            </div>
          </div>
          <div className='flex gap-5 mt-4'>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Portfolio Link
              </label>
              <input
                type='text'
                value={formData.portfolio}
                name='portfolio'
                onChange={handleChange}
                placeholder='Portfolio Website (optional)'
                className='py-2 lg:w-[18vw] p-2 w-full   border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600  outline-none rounded-sm  bg-gray-50 '
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Skills
              </label>

              <Select
                labelId='demo-multiple-checkbox-label'
                id='demo-multiple-checkbox'
                multiple
                sx={{ width: { xs: 182, lg: 260 }, height: 41, fontSize: 14 }}
                value={skills}
                onChange={handleChangeSkill}
                input={<OutlinedInput />}
                renderValue={selected =>
                  selected.length ? selected.join(', ') : 'Select skills...'
                }
                MenuProps={MenuProps}
                label='Select skills'
              >
                {generalSkills.map(skill => (
                  <MenuItem key={skill} value={skill}>
                    <Checkbox
                      checked={skills.includes(skill)}
                      sx={{ fontSize: 14 }}
                    />
                    <ListItemText primary={skill} />
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className='flex flex-col gap-5 mt-4'>
            <textarea
              type='text'
              name='about'
              value={formData.about}
              onChange={handleChange}
              placeholder='Briefly describe your background, skills, and career goals...'
              className=' w-full h-20 max-h-32 border-2 focus:border-2 focus:border-slate-600  outline-none rounded-sm hadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  p-2'
            />
          </div>
          <div className='flex flex-col justify-center  items-center mt-3'>
            <button
              disabled={!isFormChanged}
              type='button'
              onClick={handleSubmit}
              className={`mt-10 text-md px-6 p-2 rounded shadow-xl ${
                isFormChanged
                  ? 'bg-violet-900 text-white hover:bg-violet-800'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              Save changes
            </button>
            <div>
              <p className='text-xs mt-4 text-gray-600'>
                Make sure all your details are accurate before saving
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalPopUp
