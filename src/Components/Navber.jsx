import React, { useState } from 'react'
import { Container } from './Container/Container'
import { Ul } from './Container/Ul'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Navber = () => {

  const data = useSelector((state) => state.allProducts.cart)

  const wishlistData = useSelector((state) => state.allProducts.wishlist);
  

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='lg:py-7 py-4 border-b border-black/30'>
      <Container className='lg:py-0! py-0!'>

        <div className="flex items-center justify-between">

          <NavLink to="/" className='font-bold text-2xl font-inter leading-6 cursor-pointer'>
            Exclusive
          </NavLink >

          {/* desktop menu */}
          <Ul className="hidden lg:flex gap-12 text-[16px] font-normal">
            <li><NavLink to="/" className="navber transition-all duration-300 ease-in-out">Home</NavLink ></li>
            <li><NavLink to="/Contact" className="navber transition-all duration-300 ease-in-out">Contact</NavLink ></li>
            <li><NavLink to="/" className="navber transition-all duration-300 ease-in-out" href="#">About</NavLink></li>
            <li><a className="navber transition-all duration-300 ease-in-out" href="#">Sign Up</a></li>
          </Ul>

          <div className="hidden lg:flex items-center gap-6">
            <div className='bg-[#F5F5F5] w-65 h-9.5 rounded-sm flex items-center gap-2 px-4'>
              <input
                type="text"
                placeholder="What are you looking for?"
                className='bg-transparent w-full border-none focus:outline-none '
              />
              <HiMagnifyingGlass className='text-xl' />
            </div>

            <div className="flex items-center gap-4 text-2xl">
              <div
              onClick={() => navigate("/Wishlist")} 
              className="relative cursor-pointer">
                <GoHeart/>
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red text-white text-xs flex items-center justify-center">
                  {wishlistData.length}
                </span>
              </div>

              <div
              onClick={() => navigate("/Cart")} 
              className="relative cursor-pointer">
                <IoCartOutline />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red text-white text-xs flex items-center justify-center">
                  {data.length}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='lg:hidden text-3xl'>
            {showMenu ? <HiXMark className='cursor-pointer' /> : <HiBars3 className='cursor-pointer' />}
          </button>

        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="lg:hidden mt-6 border-t pt-6 bg-black rounded-2xl text-white p-5">

            <Ul className="flex flex-col items-center gap-5 text-[16px] font-normal">
              <li><a className="snavber" href="#">Home</a></li>
              <li><a className="snavber" href="#">Contact</a></li>
              <li><a className="snavber" href="#">About</a></li>
              <li><a className="snavber" href="#">Sign Up</a></li>
            </Ul>

            <div className="mt-6">
              <div className='bg-[#F5F5F5] md:py-2.5 md:px-4 p-2 rounded-2xl flex items-center gap-5'>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className='text-black bg-transparent w-full border-none focus:outline-none'
                />
                <HiMagnifyingGlass className='text-2xl text-black' />
              </div>

              <div className="flex justify-center gap-6 mt-5 text-2xl">
                <GoHeart />
                <IoCartOutline />
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}