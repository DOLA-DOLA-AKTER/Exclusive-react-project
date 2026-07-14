import React from 'react'
import img1 from '../../assets/img1.png'
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { RedButton } from '../Button/RedButton';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { CartReducer } from '../../Slices/ProductSlice';


export const Card = ({ img, img_title, percentCss, percent, title, className, discountPrice, previousPrice, children, review, priceCss,ProductDetails, id, productDetails }) => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ProductDetails/${id}`);
  };

  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(CartReducer(productDetails))
  }


  return (
    <div className='w-67.5 mx-auto group cursor-pointer'>
      <div className='relative'>
        <img onClick={handleClick}
         src={img}
         alt={img_title} 
         />

        <div className='absolute top-0 left-0 flex justify-between w-full px-3 pt-3'>
          <div>
            <p className={`text-white text-xs font-normal leading-4.5 bg-red rounded py-1 px-3 ${percentCss}`}>-{percent}%</p>
          </div>
          <div className='space-y-2'>
            <GoHeart className='text-3xl p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110' />
            <IoEyeOutline className='text-3xl p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110' />
          </div>
        </div>

        <div className='group-hover:block hidden duration-300 md:-mt-10 -mt-9 '>
          <button
            onClick={handleCart}
            className=' bg-black text-white font-medium rounded-b text-sm md:text-base w-full py-2 cursor-pointer'>Add To Cart</button>
        </div>

      </div>

      <div className="pt-4 text-base font-medium leading-6">
        <h4>{title}</h4>

        <div className={`${className}`}>
          <div className="flex items-center gap-2 py-2">
            <span className="text-red">${discountPrice}</span>
            <del className={`text-gray-400 ${priceCss}`}>${previousPrice}</del>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-golden text-[20px]">
              {children}
            </div>
            <p className="text-gray-400 text-[14px] font-semibold">({review})</p>
          </div>
        </div>
      </div>
    </div>
  )
}
