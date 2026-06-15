import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export const Buttons = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className="bg-red w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
                <GoArrowLeft className='text-2xl font-normal active:font-bold' />

            </div>
            <div className="bg-golden w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
                <GoArrowRight className='text-2xl font-normal active:font-bold' />
            </div>
        </div>
    )
}
