import React from 'react'

export const Ul = ({children, className}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
        {children}
    </div>
  )
}
