import React from 'react'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { RedButton } from '../Button/RedButton';
import { Card } from '../Card/Card';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import { FaStar } from "react-icons/fa";
import half_star from "../../assets/star-half.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Countdown } from '../Countdown';
import SampleNextArrow from '../Button/SampleNextArrow';
import SamplePrevArrow from '../Button/SamplePrevArrow';


export const Flash = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Container>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-22">
                    <Heading
                        title="Today’s"
                        heading="Flash Sales"
                    />
                    <Countdown />
                </div>
                <div className="pb-10 md:pt-15 pt-20">
                    <Slider {...settings}>
                        <div >
                            <Card
                                img={img1}
                                img_title='gamepad'
                                percent='40'
                                title="HAVIT HV-G92 Gamepad"
                                num="120"
                                del="160"
                                star='88'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img2}
                                img_title='keyboard'
                                percent='32'
                                title="AK-900 Wired Keyboard"
                                num="960"
                                del="1160"
                                star='75'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300' />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img3}
                                img_title='monitor'
                                percent='30'
                                title="IPS LCD Gaming Monitor"
                                num="370"
                                del="400"
                                star='99'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img4}
                                img_title='chair'
                                percent='25'
                                title="S-Series Comfort Chair "
                                num="375"
                                del="400"
                                star='99'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <img src={half_star} alt="" />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img3}
                                img_title='monitor'
                                percent='30'
                                title="IPS LCD Gaming Monitor"
                                num="370"
                                del="400"
                                star='99'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img4}
                                img_title='chair'
                                percent='25'
                                title="S-Series Comfort Chair "
                                num="375"
                                del="400"
                                star='99'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <img src={half_star} alt="" />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img1}
                                img_title='gamepad'
                                percent='40'
                                title="HAVIT HV-G92 Gamepad"
                                num="120"
                                del="160"
                                star='88'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Card>
                        </div>
                        <div>
                            <Card
                                img={img2}
                                img_title='keyboard'
                                percent='32'
                                title="AK-900 Wired Keyboard"
                                num="960"
                                del="1160"
                                star='75'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-300' />
                            </Card>
                        </div>
                    </Slider>
                </div>

                <div>
                    <RedButton className="block mx-auto">
                        View All Products
                    </RedButton>
                </div>
            </Container>
        </div>
    )
}
