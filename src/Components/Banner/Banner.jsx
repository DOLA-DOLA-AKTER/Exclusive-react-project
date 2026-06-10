import React from 'react'
import { Container } from '../Container'
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../../assets/banner.jpg'


export const Banner = () => {
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
            <div className="dot-bar"></div>
        ),
    };
    return (
        <div>
            <Container className="py-0">
                <div className='flex flex-col lg:flex-row  lg:gap-11 gap-1 py-5 lg:py-0'>
                    <div className='lg:w-[20%] w-full lg:border-r lg:border-black/30 lg:pt-14 pt-5 flex items-center justify-center lg:block'>
                        <ul className='md:text-base text-sm lg:leading-6 leading-4 font-normal flex flex-col gap-5 mr-4'>
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
                    <div className='lg:w-[80%] w-[95%] pt-10'>
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
