import { useEffect, useState, useRef } from 'react'
import React from 'react'
import { setSelectedJob } from '../../../Redux/SelectedJobSlice'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import logo from '../../../assets/lightlogo.png'
import Modal from 'react-modal'
import JobSubmittion from '../JobSubmit/JobSubmittion'
import SearchBar from '../LandingPage/SearchBar'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const JobMain = () => {
 
  const [ jobDetails, setJobDetails ] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const dispatch = useDispatch()
  
 
  const options = [
    'Software Engineer',
    'IT Support',
    'Teacher',
    'Marketing Executive',
    'Sales',
    'Service'
  ]
 
  // Modal Styles 
  const customStyles = {
    overlay: {
      opacity: '100%',
      transition: 'opacity 3000ms ease-in-out',
      'overflow-y': 'auto',
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      'max-height': '90vh',
      "transition": '.9s',
      overflow: 'auto',
      
    }
  }

  const handleDropdownChange = selectedOption => {
    console.log(selectedOption)
    setIsDropdownOpen(false)
  }

  const handleApply = job => {
    console.log(job);
    
    dispatch(setSelectedJob(job))
    
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsResponse = await axios.get(
          '/storedjobdetails'
        )
        console.log(jobDetailsResponse.data)
        if (jobDetailsResponse.status === 200) {
          setJobDetails(jobDetailsResponse.data)
        }
      } catch (error) {
        alert(error + 'ERROR')
      }
    }
    fetchJobDetails()
  }, [])


  useEffect(() => {
    const checkDropdownOpen = () => {
      const dropdownMenu = document.querySelector('.Dropdown-menu')
      setIsDropdownOpen(dropdownMenu !== null)
    }

    document.addEventListener('click', checkDropdownOpen)
    return () => {
      document.removeEventListener('click', checkDropdownOpen)
    }
  }, [])

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className='lg:flex-row flex flex-col gap-7 justify-center  items-center '>
        <div className='lg:flex-col flex flex-row  justify-center   lg:gap-0 gap-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-950 via-black to-black shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)] lg:w-[20vw] w-full rounded-sm text-white p-10 lg:m-0 m-10'>
          <div className='lg:flex hidden justify-center'>
            <img src={logo} alt='' className='w-24' />
          </div>
          <div className='text-sm'>

          <div className='flex justify-center items-center mb-3  lg:w-3/4 w-full  bg-slate-900 p-1 rounded-full '>
            <label htmlFor=''> Select your position</label>
          </div>
          <div className='flex justify-center'>
            <Dropdown
              options={options}
              placeholder='Select Category'
              onChange={handleDropdownChange}
              className='custom-dropdown lg:w-[15vw] w-[32vw] text-xs  '
              menuClassName='lg:h-32 h-20'
              />
          </div>
          <div
            className={`flex flex-col items-center transition-all duration-200  ${
              isDropdownOpen ? 'lg:mt-36 mt-28' : 'mt-4'
            }`}
          >
            <button className='bg-violet-900 hover:bg-violet-800 flex justify-center w-20 py-1 rounded shadow-[0px_0px_16px_0px_rgba(0,0,0,0.3)] '>
              search
            </button>
          </div>
              </div>
          <div className='lg:flex flex-col items-center text-lg tracking-wide pt-10 hidden  '>
            <h1>Filter</h1>
            <hr class='h-px my-2 w-40  bg-gray-400 border-0 dark:bg-gray-700'></hr>
          </div>
          <div className='lg:p-4 text-sm'>
            <form action=''>
              <h1 className='text-md bg-slate-900 p-1 rounded-full'>Skills</h1>
              <input
                type='text'
                className='mt-3 p-2 outline-none bg-slate-50 rounded text-gray-800 placeholder:p-2'
                placeholder='Enter skills'
              />
              <h1 className='mt-6 text-md bg-slate-900 p-1  rounded-full'>
                Job type
              </h1>
              <div className='flex flex-col mt-3'>
                <div className='flex items-center text-sm'>
                  <label htmlFor=''>Full time</label>
                  <input type='checkbox' name='' id='' className='ml-2' />
                  <label htmlFor='' className='ml-3'>
                    Part time
                  </label>
                  <input type='checkbox' name='' id='' className='ml-2' />
                </div>
                <div>
                  <label htmlFor=''>Remote</label>
                  <input type='checkbox' name='' id='' className='ml-2 mt-2' />
                </div>
              </div>
              <div className='flex justify-center mt-5'>
                <button className='bg-violet-900 hover:bg-violet-800 py-1 w-20 rounded'>
                  {' '}
                  Find
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='flex flex-col items-center py-6 h-screen overflow-auto  bg-gray- font-poppins  lg:w-[50vw] w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pb-10 '>
          {jobDetails.map((jobObj, index) => (
            <div
              key={jobObj._id}
              className='flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mt-6 w-[90%] md:w-[50vw] bg-white rounded-lg shadow-md p-6'
            >
              <div className='flex flex-col flex-1'>
                <h1 className='text-xl font-semibold'>{jobObj.tittle}</h1>
                <h2 className='mt-2 text-sm'>
                  {jobObj.comapany_name}
                  <span className='font-light'> {jobObj.location}</span>
                </h2>
                <span className='mt-2 font-medium text-gray-600 text-sm'>
                  <span className='font-Kaushan font-semibold'>₹</span>
                  {jobObj.salary}
                </span>
                <p className='mt-2 text-sm font-semibold'>Job Description</p>
                <p className='text-sm whitespace-pre-line mt-2 w-full max-h-52 overflow-hidden text-ellipsis leading-relaxed overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:rounded-full'>
                  {jobObj.job_description}
                </p>
              </div>

              <div className='flex flex-col items-start md:items-end gap-2'>
                <button
                  onClick={() => handleApply(jobObj)}
                  className='bg-violet-900 text-white p-2  text-sm rounded hover:bg-violet-800'
                >
                  Apply now
                </button>
              </div>
            </div>
          ))}
          
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
           style={customStyles}
          contentLabel='Example Modal'
          
        >
          <JobSubmittion setIsOpen={setIsOpen}></JobSubmittion>
        </Modal>
      </div>
    </>
  )
}
export default JobMain
