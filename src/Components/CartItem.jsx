import React from 'react'

export const CartItem = ({ ImgSrc, imgTitle, title, price, quantity, subTotal }) => {
  return (
    <div>
        <div className='flex items-center justify-between py-6 px-10 rounded-md shadow-sm'>
            <div className='flex items-center gap-5 text-base'>
                <img src={ImgSrc} alt={imgTitle} className='w-13.5 h-13.5'/>
                <h5 className='text-base'> {title.slice(0,15)} </h5>
            </div>
            <h5 className='text-base'> ${price} </h5>
            <h5 className='text-base'> {quantity} </h5>
            <h5 className='text-base'> ${subTotal} </h5>
        </div>
    </div>
  )
}
