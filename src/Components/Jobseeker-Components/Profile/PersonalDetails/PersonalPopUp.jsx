import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { generalSkills } from './skillsCollection'
import { axiosInstance } from '../../../../Axios/Axios-instance'

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

  const handleChange = e => {
    const changeData = { ...formData, [e.target.name]: e.target.value }
    setFormData(changeData)
    checkForChanges({ changeData })
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
    const response = await axiosInstance.post(
      '/api/candidate/profile',
      formData,
      { withCredentials: true }
    )
  }
  // checking the changing data
  const checkForChanges = newFormData => {
    const isChanged =
      JSON.stringify(newFormData) !== JSON.stringify(initialFormData)
    setIsFormChanged(isChanged)
  }
  return (
    <div className='  flex flex-col lg:w-[38vw] w-full items-center  '>
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
              <input
                type='text'
                name='designation'
                onChange={handleChange}
                placeholder='Enter Designation'
                className='py-2 lg:w-[18vw] p-2 w-full   border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
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
                className='py-2 lg:w-[18vw] p-2 w-full   border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
              />
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
              className={`mt-2 text-md px-6 p-2 rounded shadow-xl ${
                isFormChanged
                  ? 'bg-violet-900 text-white hover:bg-violet-800'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              Save changes
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
  )
}

export default PersonalPopUp
