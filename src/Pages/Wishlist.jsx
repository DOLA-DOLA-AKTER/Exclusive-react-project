import React from 'react'
import { Container } from '../Components/Container/Container'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import { RedButton } from '../Components/Button/RedButton'
import { Card } from '../Components/Card/Card'
import coat from '../assets/coat.png'
import bag from '../assets/bag.png'
import cooler from '../assets/cooler.png'
import bookSelf from '../assets/book-self.png'
import { FaStar } from "react-icons/fa";
import { Heading } from '../Components/Heading'



export const Wishlist = () => {
    return (
        <section>
            <Container>
                <div className='flex items-center justify-between'>
                    <BreadCrumb />
                    <RedButton className='bg-white! text-black! border border-gray'>Move All To Bag</RedButton>
                </div>
                <div className='md:pt-15 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-7.5'>
                    <div>
                        <Card
                            img={coat}
                            img_title="coat"
                            title='The north coat'
                            discountPrice='260'
                            previousPrice='360'
                            percent='37'
                            percentCss='hidden group-hover:block'
                            reviewCSS='hidden'
                            cartCss="block!"
                            eyeIconCss='hidden'
                            heartIconCss='hidden'
                            delettIconCss='block!'
                        />
                    </div>
                    <div>
                        <Card
                            img={bag}
                            img_title="bag"
                            title='Gucci duffle bag'
                            discountPrice='960'
                            previousPrice='1160'
                            percent='37'
                            percentCss='hidden group-hover:block'
                            reviewCSS='hidden'
                            cartCss="block!"
                            eyeIconCss='hidden'
                            heartIconCss='hidden'
                            delettIconCss='block!'
                        />

                    </div>
                    <div>
                        <Card
                            img={cooler}
                            img_title="cooler"
                            title='RGB liquid CPU Cooler'
                            discountPrice='160'
                            previousPrice='170'
                            percent='37'
                            percentCss='hidden group-hover:block'
                            reviewCSS='hidden'
                            cartCss="block!"
                            eyeIconCss='hidden'
                            heartIconCss='hidden'
                            delettIconCss='block!'
                        />

                    </div>
                    <div>
                        <Card
                            img={bookSelf}
                            img_title="bookSelf"
                            title='Small BookSelf'
                            discountPrice='360'
                            priceCss='hidden'
                            percent='37'
                            percentCss='hidden group-hover:block'
                            reviewCSS='hidden'
                            cartCss="block!"
                            eyeIconCss='hidden'
                            heartIconCss='hidden'
                            delettIconCss='block!'
                        />

                    </div>
                </div>
                <div className='pt-20'>
                    <div className='flex items-center justify-between'>
                        <Heading
                            title="Just For You"
                            titleCss='text-black! font-normal! text-xl'
                        />
                        <RedButton className='bg-white! text-black! border border-gray'>See All</RedButton>
                    </div>
                    <div className='md:pt-15 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-7.5'>
                        <div>
                            <Card
                                img={coat}
                                img_title="coat"
                                title='The north coat'
                                discountPrice='260'
                                previousPrice='360'
                                percent='37'
                                percentCss='hidden group-hover:block'
                                review='85'
                                cartCss="block!"
                                heartIconCss='hidden'
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
                                title='Gucci duffle bag'
                                discountPrice='960'
                                previousPrice='1160'
                                percent='37'
                                percentCss='hidden group-hover:block'
                                review='85'
                                cartCss="block!"
                                heartIconCss='hidden'
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
                                img={cooler}
                                img_title="cooler"
                                title='RGB liquid CPU Cooler'
                                discountPrice='160'
                                previousPrice='170'
                                percent='37'
                                percentCss='hidden group-hover:block'
                                review='65'
                                cartCss="block!"
                                heartIconCss='hidden'
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
                                img={bookSelf}
                                img_title="bookSelf"
                                title='Small BookSelf'
                                discountPrice='360'
                                priceCss='hidden'
                                percent='37'
                                percentCss='hidden group-hover:block'
                                review='65'
                                cartCss="block!"
                                heartIconCss='hidden'
                            >
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </Card>

                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}
