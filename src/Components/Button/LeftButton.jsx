import React from 'react'
import { GoArrowLeft } from "react-icons/go";

export const LeftButton = ({className}) => {
    return (
        <button
            className={`bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition ${className}`}
            >
            <GoArrowLeft className='text-2xl font-normal' />
        </button>
    )
}
