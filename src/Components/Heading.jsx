import React from 'react'

export const Heading = ({ title, heading, className, titleCss }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex items-center md:gap-4 gap-3'>
        <div className='bg-red rounded md:w-5 w-4 md:h-10 h-8'></div>
        <p className={`text-red text-base font-semibold leading-5 ${titleCss}`}> {title} </p>

      </div>
      <h2 className={`text-[26px] md:text-[32px] lg:text-[36px] leading-6 md:leading-9 lg:leading-12 text-black font-inter font-semibold tracking-[0.04em] ${className}`}>
        {heading}
      </h2>
    </div>
  )
}

