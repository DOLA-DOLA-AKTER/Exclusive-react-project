import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { Container } from './Container/Container';

export const Services = () => {
    const services = [
        {
            icon: <TbTruckDelivery />,
            title: "Free And Fast Delivery",
            description: "Free delivery for all orders over $140",
        },
        {
            icon: <SlEarphonesAlt />,
            title: "24/7 customer service",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: <GoShieldCheck />,
            title: "Money back guarantee",
            description: "We return money within 30 days",
        },
    ];
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-22 text-center">
                    {services.map((service, index) => (
                        <div key={index} className='shadow-md rounded-2xl px-5 py-7 hover:shadow-2xl duration-300'>
                            <div className='w-19 h-19 bg-black rounded-full text-FAFAFA flex items-center justify-center mx-auto text-[40px] outline-10 outline-black/30'>
                                {service.icon}
                            </div>
                            <h3 className="pt-6 pb-2 text-xl font-semibold uppercase">
                                {service.title}
                            </h3>
                            <p className="text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}
