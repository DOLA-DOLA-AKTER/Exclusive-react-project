import React from 'react'
import { Container } from '../Components/Container/Container'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import sotoimg from '../assets/sotoimg.png'
import boroimg from '../assets/boroimg.png'

export const ProductDetails = () => {
    return (
        <div>
            <Container>
                <BreadCrumb />
                <div className='flex justify-center gap-10'>
                    <div className='space-y-4'>
                        <img src={sotoimg} alt="" />
                        <img src={sotoimg} alt="" />
                        <img src={sotoimg} alt="" />
                        <img src={sotoimg} alt="" />
                    </div>
                    <div>
                        <img src={boroimg} alt="" />
                    </div>
                    <div>
                        <h2>Havic HV G-92 Gamepad</h2>
                        <h3>$1323.23</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, perspiciatis! </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
