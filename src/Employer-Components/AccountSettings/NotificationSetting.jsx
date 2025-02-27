import React from 'react'

const NotificationSetting = () => {
  return (
   <>
   <div className='text-black flex flex-col items-center w-full lg:h-auto h-[60vh]   mt-10'>
    <div className=''>
        <h1 className='text-2xl font-semibold'>Notification Preferences</h1>
    </div>
    <div className="mt-10  flex flex-col lg:justify-center  w-full py-2  ">
      <div className=" flex flex-col items-center   p-2 space-y-4">
       
      <div className="flex items-center justify-center w-full px-2 gap-x-5 ">
          <label className="font-medium w-1/5 text-sm shrink-0">Email Notifications</label>
          <span className="shrink-0">:</span>
          <select className="border border-gray-500 py-0.5 px-1 outline-none rounded-sm w-1/8 text-sm">
            <option value="enable">Enable</option>
            <option value="disable">Disable</option>
          </select>
        </div>
       

     
        <div className="flex items-center justify-center w-full px-2 gap-x-5">
          <label className="font-medium w-1/5 text-sm shrink-0">SMS Notifications</label>
          <span className="shrink-0">:</span>
          <select className="border border-gray-500 py-0.5 px-1 outline-none rounded-sm w-1/8 text-sm">
            <option value="enable">Enable</option>
            <option value="disable">Disable</option>
          </select>
        </div>

      
        <div className="flex items-center justify-center w-full px-2 gap-x-5">
          <label className="font-medium w-1/5 text-sm shrink-0">Job Alerts</label>
          <span className="shrink-0">:</span>
          <select className="border border-gray-500 py-0.5 px-1 outline-none rounded-sm w-1/8 text-sm">
            <option value="enable">Enable</option>
            <option value="disable">Disable</option>
          </select>
        </div>
        <div className='w-full flex justify-center'>
            <button className='bg-violet-900 text-white p-1 mt-10 px-10 hover:bg-violet-800'>Save changes </button>
        </div>

      </div>
    </div>
        
   </div>
   </>
  )
}

export default NotificationSetting
