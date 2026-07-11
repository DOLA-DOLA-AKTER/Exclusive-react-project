import React from 'react'
import { Container } from './Container/Container'
import { Heading } from './Heading'
import coat from '../assets/coat.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import { FaStar } from 'react-icons/fa'
import { Card } from './Card/Card'


export const RelatedItem = () => {
    return (
        <div>
            <Container>
                <div>
                    <Heading
                        title="Related Item"
                    />
                    <div className='md:pt-15 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-7.5'>                        
                        <div>
                            <Card
                                img={img1}
                                img_title='gamepad'
                                percent='40'
                                title="HAVIT HV-G92 Gamepad"
                                discountPrice="120"
                                previousPrice="160"
                                review='88'
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
                                discountPrice="960"
                                previousPrice="1160"
                                review='75'
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
                                discountPrice="370"
                                previousPrice="400"
                                review='99'
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
                                discountPrice="375"
                                previousPrice="400"
                                review='99'
                            >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Card>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}
