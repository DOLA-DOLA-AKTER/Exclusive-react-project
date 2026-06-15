import React from 'react'
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

export const MonthCard = ({ img, img_title, title, num, del, children, star }) => {
    return (
        <div className='w-67.5 mx-auto cursor-pointer duration-300 hover:-translate-y-2'>
            <div className='relative overflow-hidden rounded'>
                <img src={img} alt={img_title} className='w-full object-cover' />
                <div className='absolute top-0 right-0 px-3 pt-3'>
                    <div className='space-y-2'>
                        <GoHeart className='text-3xl p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110' />
                        <IoEyeOutline className='text-3xl p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110' />
                    </div>
                </div>
            </div>
            <div className="pt-4 text-base font-medium leading-6">
                <h4>{title}</h4>

                <div className="flex items-center gap-2 py-2">
                    <span className="text-red">${num}</span>
                    <del className="text-gray-400">{del}</del>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-golden text-[20px]">
                        {children}
                    </div>
                    <p className="text-gray-400 text-[14px] font-semibold">({star})</p>
                </div>
            </div>
        </div>
    )
}
