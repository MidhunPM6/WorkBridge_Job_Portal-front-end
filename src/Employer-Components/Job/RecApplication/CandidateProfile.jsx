import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CandidateProfile = () => {
  const candidateProfile = useSelector(
    state => state.candidateProfile.candidateProfile
  )

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='max-w-4xl   bg-white rounded-lg shadow-md w-full mt-6'>
          <div
            className={`relative flex justify-center items-center  h-40 lg:h-48  rounded-t-lg w-full   ${
              candidateProfile.userID?.profileCoverPic ? '' : 'bg-violet-950'
            }`}
            style={
              candidateProfile.userID?.profileCoverPic
                ? {
                    backgroundImage: `url("${candidateProfile.userID?.profileCoverPic}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                : undefined
            }
          >
            <div className='absolute left-4 -bottom-10 w-24 h-24 lg:w-32  lg:h-32 justify-center items-center bg-gray-200 rounded-md flex  p-1 overflow-hidden'>
              <img src={candidateProfile.userID?.profilePic} alt='' />
            </div>
          </div>

          <div className='mb- flex flex-col gap-4 p-6'>
            <div className='flex-1 pt-10'>
              <h1 className='text-3xl font-bold text-gray-800'>
                {candidateProfile.userID?.name}
              </h1>
              <h2 className='text-xl text-blue-600 mb-4'>
                {candidateProfile.profileId?.designation}
              </h2>

              <div className='flex flex-wrap gap-4'>
                <a
                  href={`tel:${candidateProfile.profileId?.mobile}`}
                  className='flex items-center text-gray-600 hover:text-blue-500'
                >
                  <svg
                    className='w-5 h-5 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  {candidateProfile.profileId?.mobile ||
                    'No mobile number available.'}
                </a>

                <div className='flex items-center text-gray-600'>
                  <svg
                    className='w-5 h-5 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {candidateProfile.profileId?.location}
                </div>

                <a
                  href={`mailto:midhunpm7@gmail.com`}
                  className='flex items-center text-gray-600 hover:text-blue-500'
                >
                  <svg
                    className='w-5 h-5 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  {candidateProfile.userID?.email}
                </a>
              </div>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>About</h3>
            <p className='text-gray-600 leading-relaxed'>
              {candidateProfile.profileId?.about || 'No description available.'}
            </p>
          </div>

          <div className='mb-8 pl-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Skills</h3>
            <div className='flex flex-wrap gap-2'>
                {candidateProfile.profileId?.skills?.length > 0 ? (
                  candidateProfile.profileId?.skills?.map((skill, index) => (
                    <p
                      key={index}
                      className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm'
                    >
                      {skill}
                    </p>
                  ))
                ) : (
                  <p className='text-gray-500'>No skills listed.</p>
                )}
            </div>
          </div>

          <div className='mb-8 pl-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Links</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <a
                href={candidateProfile.profileId?.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50'
              >
                <div className='bg-blue-600 text-white p-2 rounded mr-3'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500 '>LinkedIn</p>
                  
                </div>
              </a>

              <a
                href={candidateProfile.profileId?.portfolio}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50'
              >
                <div className='bg-purple-600 text-white p-2 rounded mr-3'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Portfolio</p>
                  
                </div>
              </a>

              <a
                href={candidateProfile.profileId?.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50'
              >
                <div className='bg-green-600 text-white p-2 rounded mr-3'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Resume</p>
                  <p className='text-blue-600'>Download PDF</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CandidateProfile
