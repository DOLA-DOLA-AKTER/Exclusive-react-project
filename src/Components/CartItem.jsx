import React from 'react'

export const CartItem = ({ ImgSrc, imgTitle, title, price, quantity, subTotal }) => {
  return (
    <div>
        <div className='flex items-center py-6 px-10 rounded-md shadow-sm'>
            <div className='flex items-center gap-5 text-base w-86.5'>
                <img src={ImgSrc} alt={imgTitle} className='w-13.5 h-13.5'/>
                <h5 className='text-base'> {title.slice(0,15)} </h5>
            </div>
            <h5 className='text-base w-82'> ${price} </h5>
            <h5 className='text-base '> {quantity} </h5>
            <h5 className='text-base w-90 flex justify-end text-left'> ${subTotal} </h5>
        </div>
    </div>
  )
}
