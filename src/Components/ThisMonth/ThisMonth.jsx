import React from 'react'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { RedButton } from '../Button/RedButton'
import { Card } from '../Card/Card'
import { MonthCard } from '../Card/MonthCard'
import coat from '../../assets/coat.png'
import bag from '../../assets/bag.png'
import cooler from '../../assets/cooler.png'
import bookSelf from '../../assets/book-self.png'
import { FaStar } from "react-icons/fa";
import half_star from "../../assets/star-half.png";


export const ThisMonth = () => {
    return (
        <div className="lg:py-25 py-20">
            <Container>
                <div className='flex justify-between items-end'>
                    <Heading
                        title="This Month"
                        heading="Best Selling Products"
                    />
                    <RedButton>View All</RedButton>
                </div>
                <div className='pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-7.5'>
                    <MonthCard
                    img={coat}
                    img_title='coat'
                    title='The north coat'
                    num='260'
                    del='$360'
                    star='65'
                    >
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </MonthCard>

                    <MonthCard
                    img={bag}
                    img_title='bag'
                    title='Gucci duffle bag'
                    num='960'
                    del='$1160'
                    star='65'
                    >
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <img src={half_star} alt="HalfStar" />
                    </MonthCard>

                    <MonthCard
                    img={cooler}
                    img_title='cooler'
                    title='RGB liquid CPU Cool er'
                    num='160'
                    del='$170'
                    star='65'
                    >
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <img src={half_star} alt="HalfStar" />
                    </MonthCard>

                    <MonthCard
                    img={bookSelf}
                    img_title='bookSelf'
                    title='Small BookSelf'
                    num='360'
                    star='65'
                    >
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </MonthCard>
                </div>
            </Container>
        </div>
    )
}
