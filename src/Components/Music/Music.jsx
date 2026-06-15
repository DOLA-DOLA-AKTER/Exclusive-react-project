import React from 'react'
import { Container } from '../Container'
import music from '../../assets/music.png'
import { GreenButton } from '../Button/GreenButton'
import { Counter } from './Counter'

export const Music = () => {
  return (
    <div>
      <Container>
        <div className="relative">
          <img
            src={music}
            alt="music"
            className="w-full object-cover min-h-75 md:min-h-100"
          />

          <div className="absolute top-6 left-4 md:top-12 md:left-10 lg:top-17.5 lg:left-15">
            <h5 className="text-green text-sm md:text-base font-semibold">
              Categories
            </h5>

            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight text-white font-inter font-semibold py-3 md:py-6 lg:py-8">
              <span className="block">Enhance Your</span>
              Music Experience
            </h2>

            <div className="pb-5 md:pb-8 lg:pb-10">
              <Counter />
            </div>

            <GreenButton>Buy Now!</GreenButton>
          </div>
        </div>
      </Container>
    </div>
  )
}