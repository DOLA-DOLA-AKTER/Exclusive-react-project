import React from 'react'
import { CiMobile3 } from "react-icons/ci";

export const CategoriesCard = ({children, peragraph}) => {
  return (
    <div className='w-42.5 h-36.25 mx-auto rounded border border-black/30 flex items-center justify-center group hover:bg-red duration-300 hover:border-none cursor-pointer'>
        <div className='flex flex-col items-center gap-2 group-hover:text-white duration-300'>
            <div className='text-[56px]'>
                {children}
            </div>
            <p className='md:text-base text-sm font-normal'>{peragraph}</p>
        </div>
    </div>
  )
}
