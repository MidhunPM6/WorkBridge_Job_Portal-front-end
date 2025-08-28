import React from 'react'

const Button = ({ type, children, className, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={` py-2  rounded-lg font-medium
        ${className}
                
                transition-colors duration-200 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-indigo-300 `}
    >
      {children}
    </button>
  )
}

export default Button
