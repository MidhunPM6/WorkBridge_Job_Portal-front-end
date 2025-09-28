import React, { useState } from 'react'


const AccountSetting = () => {
  const [activeTab, setActiveTab] = useState('security')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Account Settings</h1>
          <p className='mt-2 text-sm text-gray-600'>
            Manage your employer account information and security settings
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex border-b border-gray-200 mb-8'>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'security'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('danger')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'danger'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Danger Zone
          </button>
        </div>

        {activeTab === 'security' && (
          <div className='bg-white shadow rounded-lg p-6'>
            <h2 className='text-lg font-medium text-gray-900 mb-6'>
              Security Settings
            </h2>

            <div className='space-y-8'>
              <div className='border-b border-gray-200 pb-6'>
                <h3 className='text-md font-medium text-gray-900 mb-4'>
                  Change Password
                </h3>
                <form className='space-y-4'>
                  <div>
                    <label
                      htmlFor='current-password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Current Password
                    </label>
                    <input
                      type='password'
                      id='current-password'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='new-password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      New Password
                    </label>
                    <input
                      type='password'
                      id='new-password'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='confirm-password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Confirm New Password
                    </label>
                    <input
                      type='password'
                      id='confirm-password'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border'
                    />
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>

              <div className='pt-4'>
                <h3 className='text-md font-medium text-gray-900 mb-4'>
                  Two-Factor Authentication
                </h3>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm text-gray-600'>
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'danger' && (
          <div className='bg-white shadow rounded-lg p-6'>
            <h2 className='text-lg font-medium text-gray-900 mb-6'>
              Danger Zone
            </h2>

            <div className='space-y-6'>
              <div className='border border-red-200 rounded-lg p-4 bg-red-50'>
                <h3 className='text-md font-medium text-red-800 mb-2'>
                  Delete Account
                </h3>
                <p className='text-sm text-red-600 mb-4'>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className='inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                >
                  Delete Account
                </button>
              </div>

              <div className='border border-yellow-200 rounded-lg p-4 bg-yellow-50'>
                <h3 className='text-md font-medium text-yellow-800 mb-2'>
                  Temporarily Deactivate Account
                </h3>
                <p className='text-sm text-yellow-600 mb-4'>
                  Your profile will be hidden but can be restored later.
                </p>
                <button
                  type='button'
                  className='inline-flex items-center rounded-md border border-yellow-300 bg-white px-3 py-2 text-sm font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'
                >
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div
                className='fixed inset-0 transition-opacity'
                aria-hidden='true'
              >
                <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
              </div>
              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
                <div>
                  <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                    <svg
                      className='h-6 w-6 text-red-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                      />
                    </svg>
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      Delete account
                    </h3>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Are you sure you want to delete your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                    <div className='mt-4'>
                      <label
                        htmlFor='delete-confirm'
                        className='block text-sm font-medium text-gray-700 text-left'
                      >
                        Type "DELETE MY ACCOUNT" to confirm
                      </label>
                      <input
                        type='text'
                        id='delete-confirm'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm'
                  >
                    Delete Account
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:col-start-1 sm:text-sm'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountSetting
