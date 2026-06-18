import React, { useState } from 'react'
import { Container } from './Container/Container'
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../assets/banner.jpg'
import { TbCategory } from "react-icons/tb";


export const Banner = () => {

    const [show, setShow] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#000000",
                    padding: "3px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="bg-white/50 md:w-3 w-2 md:h-3 h-2 rounded-full"></div>
        ),
    };
    return (
        <div>
            <Container className='lg:py-0! py-0!'>

                <div className='flex flex-col xl:flex-row  xl:gap-11 gap-1 py-5 xl:py-0'>
                    <div className='p-1 rounded-full block mx-auto xl:hidden text-2xl cursor-pointer duration-300 hover:scale-115 hover:shadow-xl'>
                        <TbCategory 
                        onClick={() => setShow(!show)}
                    />
                    </div>
                    <div className={`${show ? "block" : "hidden"} xl:w-[20%] w-full xl:border-r xl:border-black/30 lg:pt-10 pt-5 flex items-center justify-center xl:block`}>
                        <ul className='md:text-base text-sm xl:leading-6 leading-4 font-normal flex flex-col space-y-4 mr-4'>
                            <li className="flex items-center justify-between"><a href="#">Woman’s Fashion</a> <MdKeyboardArrowRight className='text-xl' /></li>
                            <li className="flex items-center justify-between"><a href="#">Men’s Fashion</a> <MdKeyboardArrowRight className='text-xl' /></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Home & Lifestyle</a></li>
                            <li><a href="#">Medicine</a></li>
                            <li><a href="#">Sports & Outdoor</a></li>
                            <li><a href="#">Baby’s & Toys</a></li>
                            <li><a href="#">Groceries &</a></li>
                            <li><a href="#">Health & Beauty</a></li>
                        </ul>
                    </div>

                    <div className='xl:w-[70%] w-[95%] lg:pt-10 pt-5'>
                        <Slider {...settings}>
                            <div>
                                <img src={banner} alt="banner 1" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} alt="banner 2" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} alt="banner 3" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} alt="banner 4" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} alt="banner 5" className='w-full h-full object-cover' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}
