import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CandidateProfile = () => {
  const [showMore, setShowMore] = useState(false)

  const candidateProfile = useSelector(
    state => state.candidateProfile.candidateProfile
  )

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='max-w-4xl   bg-white rounded-lg shadow-md w-full mt-6'>
          <div
            className={`relative flex justify-center items-center  h-40 lg:h-48  rounded-t-lg w-full   ${
              candidateProfile.candidateData?.profileCoverPic
                ? ''
                : 'bg-violet-950'
            }`}
            style={
              candidateProfile.candidateData?.profileCoverPic
                ? {
                    backgroundImage: `url("${candidateProfile.candidateData?.profileCoverPic}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                : undefined
            }
          >
            <div className='absolute left-4 -bottom-10 w-24 h-24 lg:w-32  lg:h-32 justify-center items-center bg-gray-200 rounded-md flex  p-1 overflow-hidden'>
              <img src={candidateProfile.candidateData?.profilePic} alt='' />
            </div>
          </div>

          <div className='mb- flex flex-col gap-4 p-6'>
            <div className='flex-1 pt-10'>
              <h1 className='text-3xl font-bold text-gray-800'>
                {candidateProfile.candidateData?.name}
              </h1>
              <h2 className='text-xl text-blue-600 mb-4'>
                {candidateProfile.profileData?.designation}
              </h2>

              <div className='flex flex-wrap gap-4'>
                <a
                  href={`tel:${candidateProfile.profileData?.mobile}`}
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
                  {candidateProfile.profileData?.mobile ||
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
                  {candidateProfile.profileData?.location}
                </div>

                <a
                  href={`mailto:${candidateProfile.candidateData?.email}`}
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
                  {candidateProfile.candidateData?.email}
                </a>
              </div>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>About</h3>
            <p className='text-gray-600 leading-relaxed'>
              {candidateProfile.profileData?.about ||
                'No description available.'}
            </p>
          </div>

          <div className='mb-8 pl-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {candidateProfile.profileData?.skills?.length > 0 ? (
                candidateProfile.profileData?.skills?.map((skill, index) => (
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

          <div className='mb-8 p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Links</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <a
                href={candidateProfile.profileData?.linkedin}
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
                href={candidateProfile.profileData?.portfolio}
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
                href={candidateProfile.profileData?.resume}
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

          {/* Experience Section and Education section */}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showMore ? 'max-h-[1000px]' : 'max-h-0'
            }`}
            id='experience'
          >
            <div className='relative flex-col lg:justify-normal justify-center lg:p-8 p-8 lg:h-auto  w-full'>
              {/* Experience  */}

              <div className='flex justify-between p-4 items-center bg-violet-50 text-violet-700  rounded-md'>
                <h1 className='text-2xl font-semibold'>Experience</h1>
              </div>

              {/* Experience List */}
              <div className='mt-8 flex flex-col gap-5'>
                {candidateProfile?.experienceData?.length > 0 ? (
                  candidateProfile.experienceData.map((expObj, index) => (
                    <div
                      key={index}
                      className='flex flex-col  gap-3 border border-gray-200 rounded-lg p-6 '
                    >
                      <div className='flex justify-between items-start'>
                        <div className='space-y-2'>
                          <h1 className='font-bold text-lg text-gray-900'>
                            {expObj.position}
                          </h1>
                          <div className='flex'>
                            <span className='bg-lime-100 text-lime-800 rounded-full px-3 py-1 text-sm font-medium'>
                              {expObj.company}
                            </span>
                          </div>
                          <div className='flex gap-2 text-gray-600'>
                            <h1>{expObj.StartDate}</h1>
                            <span>—</span>
                            <h1>{expObj.EndDate}</h1>
                          </div>
                        </div>
                      </div>

                      {/* Description with better readability */}
                      <div className='mt-2'>
                        <h2 className='font-semibold text-gray-900 mb-1'>
                          Description
                        </h2>
                        <p className='text-gray-800 leading-relaxed whitespace-pre-line'>
                          {expObj.tasks}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='text-center py-12'>
                    <div className='mx-auto max-w-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-12 h-12 mx-auto text-gray-400'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                        />
                      </svg>
                      <h3 className='mt-4 text-xl font-medium text-gray-500'>
                        No experience added
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='flex flex-col w-full h-auto' id='education'>
              <div className='relative flex-col lg:justify-normal justify-center lg:p-8 p-8 lg:h-auto  w-full'>
                {/* Education  */}

                <div className='flex justify-between p-4 items-center bg-violet-50 text-violet-700  rounded-md'>
                  <h1 className='text-2xl font-semibold'>Education</h1>
                </div>

                {/* Education List */}
                <div className='mt-6 flex flex-col gap-4'>
                  {candidateProfile?.educationData.length > 0 ? (
                    candidateProfile.educationData.map(educationObj => (
                      <div
                        key={educationObj.id}
                        className='flex flex-col gap-3 p-5 border  '
                      >
                        <div className='flex justify-between items-start'>
                          <div className='flex-1'>
                            <h2 className='text-lg font-semibold text-gray-800'>
                              {educationObj.college || 'Untitled Education'}
                            </h2>
                            <p className='text-gray-600 mt-1'>
                              {educationObj.field}
                            </p>
                            <div className='flex gap-2 text-sm text-gray-500 mt-2'>
                              <span>{educationObj.StartDate}</span>
                              <span>—</span>
                              <span>{educationObj.Passed}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='flex flex-col items-center justify-center py-12 text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-16 h-16 text-gray-300 mb-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1}
                          d='M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1}
                          d='M9 3v18m6-18v18M4 12h16M3 6h18'
                        />
                      </svg>
                      <h3 className='text-xl font-medium text-gray-500 mb-2'>
                        No education added yet
                      </h3>
                      <p className='text-gray-400 mb-4'>
                        Your education history will appear here
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='px-6 pb-4 w-full  flex flex-col justify-between items-center'>
            <button
              onClick={() => setShowMore(!showMore)}
              className='flex items-center text-blue-600 font-medium'
            >
              {showMore ? 'Show less' : 'Show more'}
              <svg
                className={`w-5 h-5 ml-1 transition-transform ${
                  showMore ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CandidateProfile
