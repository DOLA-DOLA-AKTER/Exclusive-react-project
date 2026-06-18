import React from 'react'
import { Container } from './Container/Container'
import { Heading } from './Heading'
import featured1 from "../assets/featured-1.png"
import featured2 from "../assets/featured-2.png"
import featured3 from "../assets/featured-3.png"
import featured4 from "../assets/featured-4.png"

export const Featured = () => {
    return (
        <div>
            <Container className='text-FAFAFA'>
                <div className='flex items-center justify-center'>
                    <Heading
                        title="Featured"
                        heading="New Arrival"
                    />
                </div>

                <div className="pt-10 md:pt-15 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">

                    <div className='relative'>
                        <img
                            src={featured1}
                            alt="PlayStation"
                            className='w-full h-full object-cover'
                        />

                        <div className='absolute bottom-4 left-4 md:bottom-8 md:left-8 max-w-60'>
                            <h4 className='text-xl md:text-2xl font-semibold'>
                                PlayStation 5
                            </h4>

                            <p className='text-xs md:text-sm py-2 md:py-4'>
                                Black and White version of the PS5 coming out on sale.
                            </p>

                            <a
                                href="#"
                                className='text-sm md:text-base font-medium underline'>
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className='grid gap-5 lg:gap-7.5'>

                        <div className='relative'>
                            <img
                                src={featured2}
                                alt="Women’s Collections"
                                className='w-full h-full object-cover' />

                            <div className='absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-63.75'>
                                <h4 className='text-xl md:text-2xl font-semibold'>
                                    Women’s Collections
                                </h4>

                                <p className='text-xs md:text-sm py-2 md:py-4'>
                                    Featured woman collections that give you another vibe.
                                </p>

                                <a
                                    href="#"
                                    className='text-sm md:text-base font-medium underline'
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7.5'>

                            <div className='relative'>
                                <img
                                    src={featured3}
                                    alt="Speakers"
                                    className='w-full object-cover'
                                />

                                <div className='absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-47.5'>
                                    <h4 className='text-xl md:text-2xl font-semibold'>
                                        Speakers
                                    </h4>

                                    <p className='text-xs md:text-sm py-2'>
                                        Amazon wireless speakers
                                    </p>

                                    <a
                                        href="#"
                                        className='text-sm md:text-base font-medium underline'
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                            <div className='relative'>
                                <img
                                    src={featured4}
                                    alt="Perfume"
                                    className='w-full object-cover'
                                />

                                <div className='absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-47.5'>
                                    <h4 className='text-xl md:text-2xl font-semibold'>
                                        Perfume
                                    </h4>

                                    <p className='text-xs md:text-sm py-2 uppercase'>
                                        Gucci Intense Oud Edp
                                    </p>

                                    <a
                                        href="#"
                                        className='text-sm md:text-base font-medium underline'
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}