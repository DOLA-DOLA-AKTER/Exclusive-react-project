import React from 'react'

export const Peragraph = ({children, className}) => {
  return (
    <div className={`text-sm md:text-base leading-6 text-gray ${className}`}>
        {children}
    </div>
  )
}
