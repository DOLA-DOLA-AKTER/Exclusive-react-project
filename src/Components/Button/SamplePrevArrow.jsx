import React from 'react'
import { GoArrowLeft } from "react-icons/go";

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute md:-top-25 -top-15 right-15 z-10 bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition'
            onClick={onClick}
        >
            <GoArrowLeft className='text-2xl font-normal' />
        </div>
    );
}

export default SamplePrevArrow

