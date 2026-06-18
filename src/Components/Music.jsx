import React from 'react'
import { Container } from './Container/Container'
import music from '../assets/music.png'
import { RedButton } from './Button/RedButton'
import { Countdown } from './Countdown/Countdown'

export const Music = () => {
  return (
    <div>
      <Container className='lg:py-0! py-0!'>
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
              <Countdown
              colon='hidden'
              className='flex flex-col-reverse items-center justify-center bg-white rounded-full md:w-15 w-13 h-13 md:h-15'
              counts="!text-base !font-semibold !leading-5"
              countText="!text-xs !font-normal md:!leading-3 !leading-2"
              />
            </div>

            <RedButton className="bg-green!">Buy Now!</RedButton>
          </div>
        </div>
      </Container>
    </div>
  )
}