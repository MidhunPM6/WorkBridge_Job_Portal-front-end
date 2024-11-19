import React from 'react'
import sortIimg from '../../assets/employer-mainpage/resume-sorting.png'

const SortingDes = () => {
  return (
    <>
      <div className='lg:flex lg:flex-row font-poppins flex flex-col  lg:h-[100vh] text-gray-800 place-items-center lg:mt-0 mt-10'>
        <div className='lg:ml-32 lg:m-32 lg:mt-56 items-center'>
          <div className='place-items-center pb-5'>
            <h1 className='text-xl font-semibold  '>Resume Sorting </h1>
          </div>

          <p className='leading-loose'>
            The resume sorting feature simplifies recruitment by organizing and{' '}
            <br />
            categorizing resumes based on predefined criteria such as skills,{' '}
            <br />
            qualifications, and experience. It ensures a structured and <br />
            efficient hiring process, allowing recruiters to focus on selecting{' '}
            <br />
            the best candidates quickly and effectively.
          </p>
        </div>
        <div>
          <img src={sortIimg} alt='' className='lg:w-[32vw] lg:m-20' />
        </div>
      </div>
    </>
  )
}

export default SortingDes
