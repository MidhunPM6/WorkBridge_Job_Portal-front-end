import { motion } from "framer-motion"



const ExperienceDelete = ({setOpen , handleDeleteExperience}) => {
  return (
    <>
    <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 z-50 min-w-60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 items-center '>
                <svg
                  class='text-red-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='70'
                  height='70'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <h1 className='text-2xl text-gray-700 '>Are you sure ?</h1>
                <p className='text-xs text-gray-500 leading-5 tracking-wide'>
                  Do you really want to delete these records? <br />
                  <span className='flex w-full justify-center '>
                    This process cannot be undone
                  </span>
                </p>
                <div className='text-black flex gap-3'>
                  <button
                    onClick={() => setOpen(false)}
                    className='bg-gray-200 p-2 px-6 mt-10  rounded-md shadow-md hover:bg-gray-300 '
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteExperience}
                    className='bg-red-600 bg-opacity-95 p-2 px-6 mt-10 text-white rounded-md shadow-md hover:bg-red-700'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
    </>
  )
}

export default ExperienceDelete