import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { generalSkills } from './skillsCollection'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Dropdown from '../../../ui/Dropdown'
import useFetchJson from '../../../../hooks/localFetch/useFetchJson'
import useProfile from '../../../../hooks/candidate/useProfile'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button' 
const PersonalModal = ({ setIsOpen, setUpdateData }) => {
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
  const [districtOptions, setDistrictOptions] = useState([])
  const profile = useSelector(state => state.profile.profile)
  const { fetchLocation, fetchDesignation } = useFetchJson()
  const {saveProfileData}= useProfile()

  // To Fetch the location data from the json file
  useEffect(() => {
    const getLocation = async () => {
      const { district, formatted } = await fetchLocation()
      setDistrictOptions(formatted)
    }
    getLocation()
  }, [])

  useEffect(() => {
    const getDesignation = async () => {
      const response = await fetchDesignation()
      setDesignationData(response)
    }
    getDesignation()
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

   // checking the changing data
  const checkForChanges = newFormData => {
    const isChanged =
      JSON.stringify(newFormData) !== JSON.stringify(initialFormData)
    setIsFormChanged(isChanged)
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
    console.log(formData)
      const { response} = await saveProfileData(formData)
      if(response){
        toast.success(response.data.message, {})
        setIsOpen(false)
        setUpdateData(true)
      }
    } 
    
  
 

  return (
    <div className='  flex flex-col  lg:min-w-[40dvw] lg:min-h-[80dvh] min-h-[30dvh] items-center justify-center bg-white  p-4'>
      <div className='flex justify-center '>
        <h1 className='text-2xl font-semibold'>Personal Details</h1>
      </div>
      <div className='flex flex-col  pt-3'>
        <form action=''>
          <div className='lg:flex-row  flex flex-col gap-5 mt-4'>
            <div className='flex flex-col '>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Designation
              </label>
              <div className='w-full lg:w-[18vw]'>
                <Dropdown
                  name='designation'
                  options={designationData}
                  value={designationData.find(
                    opt => opt.value === formData.designation
                  )}
                  handleChange={handleDesignationChange}
                  placeholder='Designation'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Location
              </label>
              <div className='w-full lg:w-[18vw]'>
                <Dropdown
                  name='district'
                  options={districtOptions}
                  value={districtOptions.find(
                    opt => opt.value === formData.location || null
                  )}
                  handleChange={handleDistrictChange}
                  placeholder='Select a district'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-5 mt-4 w-full '>
            <div className='flex flex-col w-full'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Mobile
              </label>
              <Input
                type='text'
                name='mobile'
                value={formData.mobile}
                handleOnchange={handleChange}
                placeholder='Mobile number'
                className='w-full'
              />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                LinkedIn
              </label>
              <Input
                type='text'
                value={formData.linkedin}
                handleOnchange={handleChange}
                required
                name='linkedin'
                placeholder='LinkedIn Profile (optional)'
                className='w-full '
              />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col gap-5 mt-4 w-full '>
            <div className='flex flex-col w-full'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Portfolio Link
              </label>
              <Input
                type='text'
                value={formData.portfolio}
                name='portfolio'
                handleOnchange={handleChange}
                placeholder='Portfolio Website (optional)'
                className='w-full '
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='' className='text-xs mb-2 text-gray-600'>
                Skills
              </label>
              <div className=''>
                
              <Select
                labelId='checkbox-label'
                id='checkbox'
                multiple
                sx={{
                  width: { xs: '100%', lg: 260 },
                  height: 36,
                  fontSize: 14
                }}
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
          </div>

          <div className='flex flex-col gap-5 mt-4'>
            <textarea
              type='text'
              name='about'
              value={formData.about}
              onChange={handleChange}
              placeholder='Briefly describe your background, skills, and career goals...'
              className=' w-full h-32 max-h-44 border p-3'
            />
          </div>
          <div className='flex flex-col justify-center  items-center mt-7'>
            <Button
              disabled={!isFormChanged}
              type='button'
              handleClick={handleSubmit}
              className={`w-full flex justify-center items-center py-3 ${
                isFormChanged
                  ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              Save changes
            </Button>
            <div>
              <p className='text-sm mt-4 text-gray-600'>
                Make sure all your details are accurate before saving
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalModal
