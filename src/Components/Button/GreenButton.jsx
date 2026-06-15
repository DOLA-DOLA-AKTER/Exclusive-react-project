import React from 'react'

export const GreenButton = ({ children, className }) => {
    return (
        <button
            className={`bg-green text-white font-medium rounded text-sm md:py-3 md:px-6 md:text-base py-3 px-8 lg:px-12 cursor-pointer transition-all duration-300 ease-in-out ${className}`}>
            {children}
        </button>
    )
}
