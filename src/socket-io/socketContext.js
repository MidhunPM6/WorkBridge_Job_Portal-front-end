// SocketContext.js
import { createContext, useContext, useEffect, useState } from "react";
import socket from "./socket-io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {

  const [notifications, setNotifications] = useState([]);
  console.log("This is notiti",notifications);
  
    const user = useSelector(state => state?.user?.user ?? null);
    console.log("helo",user)
    const role = 'candidate'
  useEffect(() => {
   

    socket.on("job-notification", (data) => {
        console.log("Thissbjkbb kjvbv",data);
        
      setNotifications((prev) => [...prev, data]);
      toast.success(`Your application for ${data.jobTitle} is shortlisted`)
    });

    return () => {
      socket.off("job-notification");
    };
  }, [socket, user, role]);

  return (
    <SocketContext.Provider value={{ socket, notifications }}>
      {children}
    </SocketContext.Provider>
  );
}; 
