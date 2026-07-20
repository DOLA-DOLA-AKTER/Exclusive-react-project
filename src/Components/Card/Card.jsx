import React, { useState } from 'react'
import img1 from '../../assets/img1.png'
import { GoHeart } from "react-icons/go";
import { IoCartOutline, IoEyeOutline, IoHeart } from "react-icons/io5";
import { RedButton } from '../Button/RedButton';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer, RemoveWishlist, WishlistReducer } from '../../Slices/ProductSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaHeart } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { toast, Bounce } from 'react-toastify';


export const Card = ({ img, img_title, percentCss, percent, title, className, discountPrice, previousPrice, children, review, priceCss, ProductDetails, id, productDetails, reviewCSS, cartCss, eyeIconCss, heartIconCss, delettIconCss, cartIcon }) => {



  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/ProductDetails/${id}`);
  };

  // Cart Functionality

  const cartSuccess = () => toast.success("Product added to cart!");
  const cartRemove = () => toast.info("Product is already in cart!");

  const cart = useSelector((state) => state.allProducts.cart)
  const isProduct = cart.find((item) => item.id === id);

  const handleCart = () => {
    if(!isProduct){
      dispatch(CartReducer(productDetails))
      cartSuccess()
    }else{
      cartRemove()
    }
  };

  // Wishlist Heart Functionality

  const wishlistSuccess = () => toast.success("Product added to wishlist!");
  const wishlistRemove = () => toast.info("Product removed from wishlist!");

  const wishlist = useSelector((state) => state.allProducts.wishlist);
  const isLiked = wishlist.find((item) => item.id === id);

  const handleHeart = () => {
    if (!isLiked) {
      dispatch(WishlistReducer(productDetails));
      wishlistSuccess()
    } else {
      dispatch(RemoveWishlist(id));
      wishlistRemove()
    }
  };


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
          <div className='space-y-2 text-3xl'>
            <RiDeleteBinLine
              onClick={() => {
                dispatch(RemoveWishlist(id));
                wishlistRemove();
              }}
              className={`hidden p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110 ${delettIconCss}`}
            />

            <div onClick={handleHeart}>
              {isLiked ?
                <IoHeart className={`p-1.25 bg-white rounded-full transition text-red hover:scale-110 ${heartIconCss}`} />
                :
                <GoHeart
                  className={`p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110 ${heartIconCss}`} />
              }
            </div>

            <IoEyeOutline className={`p-1.25 bg-white rounded-full transition hover:text-red hover:scale-110 ${eyeIconCss}`} />
          </div>
        </div>

        <div className={`absolute w-full group-hover:block hidden duration-300 md:-mt-10 -mt-9 ${cartCss}`}>
          <button
            onClick={handleCart}
            className="w-full py-2 bg-black text-white rounded-b flex items-center justify-center gap-2 text-sm md:text-base font-medium cursor-pointer hover:bg-orange duration-300"
          >
            <IoCartOutline className={`text-lg hidden ${cartIcon}`} />
            <span>Add To Cart</span>
          </button>
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
            <p className={`text-gray-400 text-[14px] font-semibold ${reviewCSS}`}>({review})</p>
          </div>
        </div>
      </div>
    </div>
  )
};
