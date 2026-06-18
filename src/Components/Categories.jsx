import React from 'react'
import { Heading } from './Heading'
import { Container } from './Container/Container'
import { Card } from './Card/Card'
import { CategoriesCard } from './Card/CategoriesCard'
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { SlCamera } from "react-icons/sl";
import { PiHeadphonesLight } from "react-icons/pi";
import { RiGamepadLine } from "react-icons/ri";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SampleNextArrow from './Button/SampleNextArrow';
import SamplePrevArrow from './Button/SamplePrevArrow';



export const Categories = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div>
            <Container className='border-y border-black/30'>
                <div>
                    <Heading
                        title="Categories"
                        heading="Browse By Category"
                    />
                </div>
                <div className='md:pt-15 pt-10'>
                    <Slider {...settings}>

                        <div>
                            <CategoriesCard
                                peragraph="Phones">
                                <CiMobile3 />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="Computers">
                                <HiOutlineComputerDesktop />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="SmartWatch">
                            <IoWatchOutline />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="Camera">
                                <SlCamera />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="HeadPhones">
                                <PiHeadphonesLight />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="Gaming">
                                <RiGamepadLine />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="SmartWatch">
                            <IoWatchOutline />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="Computers">
                                <HiOutlineComputerDesktop />
                            </CategoriesCard>
                        </div>

                        <div>
                            <CategoriesCard
                                peragraph="HeadPhones">
                                <PiHeadphonesLight />
                            </CategoriesCard>
                        </div>

                    </Slider>
                </div>

            </Container>
        </div>
    )
}

