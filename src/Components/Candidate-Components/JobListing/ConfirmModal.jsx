import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import useJobList from '../../../hooks/candidate/useJobList'
import { setAppliedJobs } from '../../../Redux/UserSlice'

const ConfirmModal = ({ setIsOpen }) => {
  const selectedJob = useSelector(state => state.selectedjob.jobSelected)
  const { fetchJobsAndAppliedStatus } = useJobList()
  const { handleConfirm } = useJobList()
  const dispatch = useDispatch()

  const handleModalClose = async () => {
    setIsOpen(false)

    const { response, success } = await fetchJobsAndAppliedStatus()
    if (success) {
      const { appliedRes } = response
      dispatch(setAppliedJobs(appliedRes.data.appliedJobs))
    }
  }
  const handleConfirmation = async () => {
    const job = {
      employerId: selectedJob.userID._id,
      jobId: selectedJob.id
    }
    const { response, success, error } = await handleConfirm(job)

    if (success) {
      toast.success(response.data.message, {
        duration: 1300
      })
    }
    if (error) {
      toast.error(error.response.data.message, {
        duration: 1300
      })
    }
    setTimeout(() => {
      handleModalClose()
    }, 1300)
  }

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
        <div className='bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden'>
          <div className='border-b px-6 py-4 flex justify-between items-center'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Confirm Application
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-400 hover:text-gray-500'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <div className='p-6 space-y-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 h-auto w-auto p-2 text-xs  bg-blue-100 rounded-md flex items-center justify-center'>
                <span className='text-blue-600 font-bold'>
                  {selectedJob.company_name}
                </span>
              </div>
              <div className='ml-4'>
                <h4 className='text-lg font-medium text-gray-900'>
                  {selectedJob.title}
                </h4>
                <p className='text-gray-600'>
                  {selectedJob.company_name} • {selectedJob.location}
                </p>
              </div>
            </div>

            <div className='border-t border-b border-gray-200 py-4 space-y-3'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Employment Type</span>
                <span className='font-medium'>{selectedJob.job_type}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Salary Range</span>
                <span className='font-medium'>{selectedJob.salary}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Posted</span>
                <span className='font-medium'>
                  {' '}
                  {new Date(selectedJob.updatedAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <div className='pt-2'>
              <p className='text-gray-700'>
                Are you sure you want to apply for this position?
              </p>
            </div>
          </div>

          <div className='bg-gray-50 px-6 py-4 flex justify-end space-x-3'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmation}
              className='px-4 py-2 bg-green-600 shadow-lg text-white rounded-md hover:bg-green-700'
            >
              Confirm Application
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmModal
