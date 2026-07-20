import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { RemoveReducer } from '../Slices/ProductSlice'

export const CartItem = ({ ImgSrc, imgTitle, title, price, quantity, subTotal, id }) => {

  let dispatch = useDispatch()

  return (
    <div>
        <div className='flex items-center py-6 px-10 rounded-md shadow-sm'>
            <div className='relative flex items-center gap-5 text-base w-86.5'>
                <span
                 onClick={()=> dispatch(RemoveReducer(id))}
                 className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-red text-white text-xs flex items-center justify-center cursor-pointer">
                  <IoMdClose/>
                </span>
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

