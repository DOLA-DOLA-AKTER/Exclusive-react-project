import React from 'react'
import { GoArrowRight } from "react-icons/go";

function SampleNextArrow (props) {
    const { onClick } = props;
    return (
        <div
            className='absolute -top-20 right-0 bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition'
            onClick={onClick}
        >
            <GoArrowRight className='text-2xl font-normal' />
        </div>
    );
}

export default SampleNextArrow