import React from 'react'
import { GoArrowRight } from "react-icons/go";

export const RightButton = ({className}) => {
    return (
        <button className={`bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition ${className}`}>
            <GoArrowRight className='text-2xl font-normal' />
        </button>
    )
}
