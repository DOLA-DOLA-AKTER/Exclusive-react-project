import React from 'react'

export const RedButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red text-white font-medium rounded text-sm md:py-3 md:px-6 md:text-base py-3 px-8 lg:px-12 cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 hover:shadow-xl ${className}`}>
      {children}
    </button>
  )
}
