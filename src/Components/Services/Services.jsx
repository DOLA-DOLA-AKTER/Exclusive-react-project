import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { Container } from '../Container';

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
                        <div key={index}>
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
