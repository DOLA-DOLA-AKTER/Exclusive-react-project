import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import { Container } from './Container/Container'
import { Heading } from './Heading'
import { Card } from './Card/Card'
import { FaStar } from "react-icons/fa";
import SampleNextArrow from './Button/SampleNextArrow';
import SamplePrevArrow from './Button/SamplePrevArrow';
import { RedButton } from './Button/RedButton';

export const Products = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            <Container>
                <div>
                    <Heading
                        title='Our Products'
                        heading='Explore Our Products'
                    />
                </div>
                <div className="pb-10 md:pt-15 pt-10">
                    <Slider {...settings}>
                        <div className='space-y-15'>
                            <Card
                                img={img5}
                                img_title="DogFood"
                                percentCss='hidden'
                                title='Breed Dry Dog Food'
                                className='flex gap-2'
                                discount='100'
                                priceCss='hidden'
                                review='35'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar  className='text-gray-300'/>
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img5}
                                img_title="DogFood"
                                percentCss='hidden'
                                title='Breed Dry Dog Food'
                                className='flex gap-2'
                                discount='100'
                                priceCss='hidden'
                                review='35'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar  className='text-gray-300'/>
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img6}
                                img_title="Camera"
                                percentCss='hidden'
                                title='CANON EOS DSLR Camera'
                                className='flex gap-2'
                                discount='360'
                                priceCss='hidden'
                                review='95'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img6}
                                img_title="Camera"
                                percentCss='hidden'
                                title='CANON EOS DSLR Camera'
                                className='flex gap-2'
                                discount='360'
                                priceCss='hidden'
                                review='95'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img7}
                                img_title="Laptop"
                                percentCss='hidden'
                                title='ASUS FHD Gaming Laptop'
                                className='flex gap-2'
                                discount='700'
                                priceCss='hidden'
                                review='325'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                                <FaStar />
                            </Card>
                            <Card
                                img={img7}
                                img_title="Laptop"
                                percentCss='hidden'
                                title='ASUS FHD Gaming Laptop'
                                className='flex gap-2'
                                discount='700'
                                priceCss='hidden'
                                review='325'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                                <FaStar />
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img8}
                                img_title="Curology"
                                percentCss='hidden'
                                title='Curology Product Set '
                                className='flex gap-2'
                                discount='500'
                                priceCss='hidden'
                                review='145'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img8}
                                img_title="Curology"
                                percentCss='hidden'
                                title='Curology Product Set '
                                className='flex gap-2'
                                discount='500'
                                priceCss='hidden'
                                review='145'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>

                        <div className='space-y-15'>
                            <Card
                                img={img5}
                                img_title="DogFood"
                                percentCss='hidden'
                                title='Breed Dry Dog Food'
                                className='flex gap-2'
                                discount='100'
                                priceCss='hidden'
                                review='35'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar  className='text-gray-300'/>
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img5}
                                img_title="DogFood"
                                percentCss='hidden'
                                title='Breed Dry Dog Food'
                                className='flex gap-2'
                                discount='100'
                                priceCss='hidden'
                                review='35'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar  className='text-gray-300'/>
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img6}
                                img_title="Camera"
                                percentCss='hidden'
                                title='CANON EOS DSLR Camera'
                                className='flex gap-2'
                                discount='360'
                                priceCss='hidden'
                                review='95'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img6}
                                img_title="Camera"
                                percentCss='hidden'
                                title='CANON EOS DSLR Camera'
                                className='flex gap-2'
                                discount='360'
                                priceCss='hidden'
                                review='95'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img7}
                                img_title="Laptop"
                                percentCss='hidden'
                                title='ASUS FHD Gaming Laptop'
                                className='flex gap-2'
                                discount='700'
                                priceCss='hidden'
                                review='325'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                                <FaStar />
                            </Card>
                            <Card
                                img={img7}
                                img_title="Laptop"
                                percentCss='hidden'
                                title='ASUS FHD Gaming Laptop'
                                className='flex gap-2'
                                discount='700'
                                priceCss='hidden'
                                review='325'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                                <FaStar />
                            </Card>
                        </div>
                        <div className='space-y-15'>
                            <Card
                                img={img8}
                                img_title="Curology"
                                percentCss='hidden'
                                title='Curology Product Set '
                                className='flex gap-2'
                                discount='500'
                                priceCss='hidden'
                                review='145'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                            <Card
                                img={img8}
                                img_title="Curology"
                                percentCss='hidden'
                                title='Curology Product Set '
                                className='flex gap-2'
                                discount='500'
                                priceCss='hidden'
                                review='145'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300'/>
                            </Card>
                        </div>
                    </Slider>
                </div>
                <div>
                    <RedButton className='mx-auto block'>View All Products</RedButton>
                </div>
            </Container>
        </div>
    )
}
