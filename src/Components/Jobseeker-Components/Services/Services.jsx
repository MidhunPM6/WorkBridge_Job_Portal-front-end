import React from 'react'
import jobsearch_img from '../../../assets/services/Job_Search.png'
import resume_buildimg from '../../../assets/services/resume.png'
import assessment_img from '../../../assets/services/assessment.png'
import notification_img from '../../../assets/services/notification.png'
import tracking_img from '../../../assets/services/tracking.png'
import careergd_img from '../../../assets/services/career_guidance.png'

const Services = () => {
  return (
    <>
      <div
        className='flex flex-col font-poppins bg-slate-50 relative'
        id='service'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-20 pb-28 max-w-4xl mx-auto w-[70vw] text-sm '>
          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md hover:scale-105 transition-all duration-500'>
            <img
              src={jobsearch_img}
              alt='Job Search and Filtering'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Job Search and Filtering
            </h1>
            <p className='pt-2 text-center hover:text-violet-600 transition-all duration-500'>
              Allows candidates to search for jobs using filters such as
              location,
              <br />
              industry, experience level, salary range, and employment.
            </p>
          </div>

          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md hover:scale-105 transition-all duration-500'>
            <img
              src={resume_buildimg}
              alt='Profile and Resume Creation'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Profile and Resume Creation
            </h1>
            <p className='pt-2 text-center hover:text-violet-600 transition-all duration-500'>
              Enables job seekers to create profiles and upload or build
              resumes,
              <br />
              showcasing their skills, experience, and qualifications.
            </p>
          </div>

          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col justify-center items-center bg-white rounded-md shadow-md transition-all duration-500 hover:scale-105'>
            <img
              src={assessment_img}
              alt='Skill Assessments'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Skill Assessments
            </h1>
            <p className='pt-2 text-center   hover:text-violet-600 transition-all duration-500'>
              Offers skill assessments and certification tests that candidates
              can
              <br />
              take to prove their abilities, increasing their chances of
              standing out
              <br />
              to recruiters.
            </p>
          </div>

          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-500 hover:scale-105'>
            <img
              src={notification_img}
              alt='Job Alerts and Notifications'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Job Alerts and Notifications
            </h1>
            <p className='pt-2 text-center  hover:text-violet-600 transition-all duration-500'>
              Sends personalized job alerts and notifications when relevant job
              <br />
              openings become available, helping candidates stay updated.
            </p>
          </div>

          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-500 hover:scale-105'>
            <img
              src={tracking_img}
              alt='Application Tracking'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Application Tracking
            </h1>
            <p className='pt-2 text-center hover:text-violet-600 transition-all duration-500'>
              Allows job seekers to track the status of their applications,
              <br />
              view responses, and follow up on interview requests.
            </p>
          </div>

          <div className='p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-500 hover:scale-105'>
            <img
              src={careergd_img}
              alt='Career Guidance and Resources'
              className='w-12'
            />
            <h1 className='pt-2 text-md scale-105 font-semibold text-center'>
              Career Guidance and Resources
            </h1>
            <p className='pt-2 text-center hover:text-violet-600 transition-all duration-500'>
              Provides resources such as resume-writing tips, interview
              preparation
              <br />
              guides, career advice, and industry trends to help job seekers
              <br />
              succeed in their job search.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
