import React from 'react'
import { Container } from './Container/Container'
import { Heading } from './Heading'
import { RedButton } from './Button/RedButton'
import { Card } from './Card/Card'
import coat from '../assets/coat.png'
import bag from '../assets/bag.png'
import cooler from '../assets/cooler.png'
import bookSelf from '../assets/book-self.png'
import { FaStar } from "react-icons/fa";
import half_star from "../assets/star-half.png";


export const ThisMonth = () => {
    return (
        <div>
            <Container>
                <div className='flex flex-col md:flex-row justify-between md:items-end gap-5'>
                    <Heading
                        title="This Month"
                        heading="Best Selling Products"
                    />
                    <div className='flex justify-end'>
                        <RedButton>View All</RedButton>
                    </div>
                </div>
                <div className='md:pt-15 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-7.5'>
                    <div>
                        <Card
                        img={coat}
                        img_title="coat"
                        percentCss='hidden'
                        title='The north coat'
                        discount='260'
                        price='360'
                        review='65'
                        >
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </Card>
                    </div>

                    <div>
                        <Card
                        img={bag}
                        img_title="bag"
                        percentCss='hidden'
                        title='Gucci duffle bag'
                        discount='960'
                        price='1160'
                        review='65'
                        >
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar className='text-gray-300' />
                        </Card>
                    </div>

                    <div>
                        <Card
                        img={cooler}
                        img_title="cooler"
                        percentCss='hidden'
                        title='RGB liquid CPU Cooler'
                        discount='160'
                        price='170'
                        review='65'
                        >
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar className='text-gray-300' />
                        </Card>
                    </div>

                    <div>
                        <Card
                        img={bookSelf}
                        img_title="bookSelf"
                        percentCss='hidden'
                        title='Small BookSelf'
                        discount='360'
                        priceCss='hidden'
                        review='65'
                        >
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}
