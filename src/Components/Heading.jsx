import React from 'react'

export const Heading = ({ peragraph, title, className }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex items-center gap-4'>
        <div className='bg-red rounded w-5 h-10'></div>
        <div className='text-red text-base font-semibold leading-5'> {peragraph} </div>

      </div>
      <div className={`text-[26px] md:text-[32px] lg:text-[36px] leading-6 md:leading-9 lg:leading-12 text-black font-inter font-Inter tracking-[0.04em] ${className}`}>
        {title}
      </div>
    </div>
  )
}
