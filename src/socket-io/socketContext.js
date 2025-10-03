// SocketContext.js
import { createContext, useContext, useEffect, useState } from 'react'
import socket from './socket-io'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const user = useSelector(state => state?.user?.user ?? null)
  console.log('helo', user)

  useEffect(() => {
    socket.on('job-notification', data => {
      setNotifications(prev => [...prev, data])
      console.log(data)
       
      if (data.status === 'shortlisted') {
        console.log('This is working ')

        toast.success(
          `Your application for ${data.jobTitle} is ${data.message}`,
          {
            hideProgressBar: true,
            toastId: `${data.jobId}-shortlisted`
          }
        )
      } else if (data.status === 'rejected') {
        toast.error(
          `Your application for ${data.jobTitle} is ${data.message}`,
          {
            hideProgressBar: true,
            toastId: `${data.jobId}-rejected`
          }
        )
      }
    })

    return () => {
      socket.off('job-notification')
    }
  }, [])

  return (
    <SocketContext.Provider value={{ socket, notifications }}>
      {children}
    </SocketContext.Provider>
  )
}
    