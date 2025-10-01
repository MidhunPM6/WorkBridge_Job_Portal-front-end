import React from 'react'
import toast from 'react-hot-toast'
import useJob from '../../../../hooks/employer/useJob'

const DeleteJobModal = ({ setDeleteModelOpen, jobId }) => {
  const { deleteJob } = useJob()

  const handleDeleteJob = async () => {
    const { success, response } = await deleteJob(jobId)
    if (success) {
      toast.success('Job deleted successfully!', {
        duration: 1200
      })
      setTimeout(() => {
        setDeleteModelOpen(false)
      }, 1300)
    }
  }
  return (
    <>
      <div class='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
        <div class='bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden'>
          <div class='p-6 border-b border-gray-100'>
            <h3 class='text-xl font-bold text-gray-900'>Delete Confirmation</h3>
          </div>

          <div class='p-6'>
            <div class='flex items-start'>
              <div class='flex-shrink-0 mt-0.5'>
                <svg
                  class='h-6 w-6 text-red-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
              </div>
              <div class='ml-3'>
                <p class='text-gray-700'>
                  Are you sure you want to delete this item? This action cannot
                  be undone.
                </p>
              </div>
            </div>
          </div>

          <div class='px-6 py-4 bg-gray-50 flex justify-end space-x-3'>
            <button
              onClick={() => setDeleteModelOpen(false)}
              className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-150'
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteJob}
              class='px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md transition-colors duration-150'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteJobModal
