import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import logo from '../../../assets/lightlogo.png'
import { useState } from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const FilterPanel = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const options = [
    'Software Engineer',
    'IT Support',
    'Teacher',
    'Marketing Executive',
    'Sales',
    'Service'
  ]
  const jobTypes = [
    'Full Time',
    'Part Time',
    'Internship',
    'Temporary',
    'Contract'
  ]

  const handleDropdownChange = selectedOption => {
    console.log(selectedOption)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <div className='p-6'>
        <div className='flex flex-col items-center mb-6'>
          <img src={logo} alt='Company Logo' className='w-20 mb-4' />
          <h2 className='text-xl font-semibold text-gray-800'>
            Find Your Dream Job
          </h2>
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Select your position
          </label>
          <Dropdown
            options={options}
            placeholder='Select Category'
            onChange={handleDropdownChange}
            className='w-full text-sm  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            menuClassName='max-h-64 overflow-auto'
          />
        </div>

        <div className='mb-6'>
          <h3 className='text-sm font-medium text-gray-700 mb-2'>Skills</h3>
          <Input
            type='text'
            className='w-full py-2'
            placeholder='Enter skills'
          />
        </div>

        <div className='mb-6'>
          <h3 className='text-sm font-medium text-gray-700 mb-2'>Job Type</h3>
          <div className='space-y-2'>
            {jobTypes?.map(type => (
              <div key={type} className='flex items-center'>
                <input
                  type='checkbox'
                  id={type}
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <label htmlFor={type} className='ml-2 text-sm text-gray-700'>
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button className='w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium '>
          Find Jobs
        </Button>
      </div>
    </>
  )
}

export default FilterPanel
