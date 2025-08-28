import React from 'react'

const Input = ({ handleOnchange, className, placeholder, name, type }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleOnchange}
      className={`m-2 p-3 rounded-md  w-full flex text-start border border-gray-300  bg-gray-50 transition-all duration-300 ${className}`}
    />
  )
}

export default Input
