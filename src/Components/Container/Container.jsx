import React, { Children } from 'react'

export const Container = ({children, className}) => {
  return (
    <div className={`container mx-auto px-5 lg:px-0 lg:py-25 py-20 ${className}`}>
        {children}
    </div>
  )
}

