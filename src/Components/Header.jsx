import React from 'react'
import { Container } from './Container/Container'
import { NavLink } from "react-router-dom";

export const Header = ({className}) => {
  return (
    <header className="md:py-4 py-3 bg-black text-white md:text-sm text-[12px] font-normal">
      <Container className='lg:py-0! py-0!'>
        
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div className="hidden md:block"></div>

          <div className="text-center">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <NavLink  to="/Shop" className="font-semibold underline pl-2">
                Shop Now
              </NavLink >
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <select className="cursor-pointer bg-black outline-none">
              <option>English</option>
              <option>Bangla</option>
              <option>Russian</option>
              <option>Japanese</option>
            </select>
          </div>

        </div>
      </Container>
    </header>
  )
}
