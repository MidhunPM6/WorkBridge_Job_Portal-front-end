import { useEffect, useRef, useState } from 'react'
import Footer from '../../Empolyer-Components/Footer/Footer'
import Footer2 from '../../Candidate-Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import NavBar from '../../Candidate-Components/LandingPage/NavBar'
import socket from '../../../socket-io/socket-io'
import { useFetchEmployer, useFetchCandidates } from '../../../hooks/api'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Navbar from '../../Empolyer-Components/Employer_main/Navbar'
import useChat from '../../../hooks/common/useChat'

const ChatWindow = () => {
  const location = useLocation()
  const userType = location.state.userType
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [notification, setNotification] = useState(false)
  const { data: employer } = useFetchEmployer()
  const { data: candidates } = useFetchCandidates()
  const candidate = useSelector(state => state.user.user)
  const employers = useSelector(state => state.employer.employer)
  const bottomRef = useRef(null)
  const { getChatHistory } = useChat()

  let loggedInUser
  if (userType === 'candidate') {
    loggedInUser = candidate
  } else {
    loggedInUser = employers
  }

 

  useEffect(() => {
    console.log(messages)

    socket.on('connect', socket => {
      console.log('a user connected')
    })

    socket.on('receive_message', data => {
      setMessages(prev => [...prev, data])
    })

    return () => {
      socket.off('connect')
      socket.off('receive_message')
    }
  }, [])

  const handleSendMessage = () => {
    const newMessage = {
      toUserId: selectedUser.userID._id,
      message: message
    }
    socket.emit('send-message', newMessage)
    setMessage('')
  }
  //  Fetching the Chat History
  const handleFetchHistory = async (e, selectedUser) => {
    e.preventDefault()
    setSelectedUser(selectedUser)
    const { success, response } = await getChatHistory(selectedUser.userID._id)
    console.log(response)

    if (success) {
      setMessages(response.data.chatHistory)
    }
  }
  return (
    <>
      <div className='flex flex-col min-h-screen '>
        {userType === 'candidate' && <NavBar />}
        {userType === 'employer' && <Navbar />}
        <Toaster></Toaster>

        <div className='flex flex-col lg:flex-row justify-center pt-6 min-h-[700px]   pb-6 bg-gray-50 '>
          <div className='flex flex-col items-center  w-full lg:w-1/4 border-r border-t border-gray-200 bg-white h-[700px] overflow-y-auto '>
            <div className='flex justify-center items-center min-h-[8vh] w-full gap-2 p-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='purple'
                className='size-8'
              >
                <path d='M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z' />
                <path d='M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z' />
              </svg>
              <h1 className='text-lg text-gray-600'>Messages</h1>
            </div>
            {userType === 'candidate'
              ? employer?.map(item => (
                  <div
                    key={item.userID.id}
                    className='p-2 w-full overflow-y-auto'
                    onClick={e => handleFetchHistory(e, item)}
                  >
                    <div
                      className={`flex group h-20 w-full items-center p-2 gap-5 cursor-pointer rounded-md transition-all duration-300
  ${
    selectedUser?.userID === item.userID
      ? 'bg-indigo-600 text-white'
      : 'bg-white text-gray-600'
  }`}
                    >
                      <div>
                        <img
                          src={item.userID.profilePic || ''}
                          alt=''
                          className='w-12 h-12 rounded-full'
                        />
                      </div>
                      <div>
                        <h1 className='text-lg  tracking-wide group-focus:text-white'>
                          {item.companyName}
                        </h1>
                        <p className='text-sm  group-focus:text-white'>
                          How are you?
                        </p>
                      </div>
                      <div className='ml-auto'>
                        <p className='text-sm  group-focus:text-white'>
                          12:00pm
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : candidates?.map(item => (
                  <div
                    key={item._id}
                    className='p-2 w-full  '
                    onClick={e => handleFetchHistory(e, item)}
                  >
                    <div
                      className={`flex group h-20 w-full items-center p-2 gap-5 cursor-pointer rounded-md transition-all duration-300
  ${
    selectedUser?.userID === item.userID
      ? 'bg-indigo-600 text-white'
      : 'bg-white text-gray-600'
  }`}
                    >
                      <div>
                        <img
                          src={item.userID?.profilePic || ''}
                          alt=''
                          className='w-12 h-12 rounded-full object-cover'
                        />
                      </div>
                      <div>
                        <h1 className='text-lg  tracking-wide group-focus:text-white'>
                          {item.userID?.name || ''}
                        </h1>
                        <p className='text-sm  group-focus:text-white'>
                          How are you?
                        </p>
                      </div>
                      <div className='ml-auto'>
                        <p className='text-sm  group-focus:text-white'>
                          12:00pm
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          {selectedUser ? (
            <div className='flex flex-col  w-full lg:w-1/2 border-r border-t border-gray-200 bg-white '>
              <div className='flex items-center border-b min-h-[8vh] justify-between'>
                <div className='flex items-center gap-4 pl-4'>
                  <img
                    src={selectedUser?.userID?.profilePic}
                    alt=''
                    className='w-14 h-14 rounded-full'
                  />
                  <h1 className='text-lg text-gray-700 tracking-wide'>
                    {selectedUser?.companyName || selectedUser?.userID?.name}
                  </h1>
                </div>
                <div className='flex items-center gap-4 p-4 text-gray-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path d='M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z' />
                  </svg>
                </div>
              </div>

              <div className=' flex-1 overflow-y-auto h-[600px] p-4'>
                {messages.map(message =>
                  message.sender?.toString() ===
                  loggedInUser._id?.toString() ? (
                    <div className='flex flex-col  '>
                      <p className='ml-auto bg-indigo-600 text-white p-3 rounded-bl-lg rounded-tr shadow-md max-w-xs break-words'>
                        {message.message}
                      </p>
                      <div className='flex items-end text-sm mt-1 gap-3 text-gray-600'>
                        <p className='ml-auto'>
                          {new Date(message.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          }) ||
                            new Date().toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                        </p>
                        <div className='pr-2'>
                          <svg
                            id='Layer_1'
                            data-name='Layer 1'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 122.88 74.46'
                            className='size-4'
                          >
                            <path d='M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='flex justify-start pb-2'>
                      <p className='bg-gray-100 p-3 rounded-bl-lg rounded-tr max-w-xs break-words'>
                        {message.message}
                      </p>

                      <p className='flex items-end text-sm pl-2 text-gray-600'>
                        {new Date(message.createdAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  )
                )}
                <div ref={bottomRef}></div>
              </div>

              <div className='flex border-t'>
                <div className='relative flex items-center w-full mb-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-6 absolute left-3 text-gray-600'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z'
                      clipRule='evenodd'
                    />
                  </svg>

                  <input
                    type='text'
                    placeholder='Type a message'
                    className='w-full h-full outline-none p-4 pl-12 pr-12'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <button onClick={handleSendMessage}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='purple'
                      className='size-6 absolute right-3 cursor-pointer'
                    >
                      <path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        {userType === 'candidate' && <Footer2 />}
        {userType === 'employer' && <Footer />}
      </div>
    </>
  )
}

export default ChatWindow
