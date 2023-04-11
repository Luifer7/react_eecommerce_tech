

import React, { useState } from 'react';

const NotificationContext = React.createContext({
  notification: null,
  notificationText: null,
  isActive: false,
  success: () => {},
})

const NotificationProvider = (props) => {
  
  const [notification, setNotification] = useState(null)
  const [notificationText, setNotificationText] = useState(null)
  const [isActive, setIsActive] = useState(null)
  
  const success = (text) => {
      setIsActive(true)
      setNotificationText(text)
      setNotification('success')
      setTimeout(() => {
        setNotification('fff')
        setIsActive(false)
      }, 2000);
    }
  
    return (
      <NotificationContext.Provider
        value={{
          success, notification, notificationText, isActive
        }}
      >
        {props.children}
      </NotificationContext.Provider>
    )
  }

export { NotificationProvider };
export default NotificationContext;



 
  
  

  
  
  
  
  