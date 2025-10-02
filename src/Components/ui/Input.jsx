import React from 'react'

const Input = ({ handleOnchange, className, placeholder, name, type,value }) => {
  
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleOnchange}
      value={value}
      className={` p-3 rounded-md  w-full flex text-start border border-gray-300  transition-all duration-300 ${className}`}
    />
  )
}

export default Input
