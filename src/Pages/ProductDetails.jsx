import React, { useEffect, useState } from 'react'
import { Container } from '../Components/Container/Container'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import sotoimg from '../assets/sotoimg.png'
import boroimg from '../assets/boroimg.png'
import { FaStar } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RedButton } from '../Components/Button/RedButton'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import { useParams } from "react-router";
import axios from 'axios'
import { Rate } from 'antd';


export const ProductDetails = () => {

    const [productData, setProductData] = useState({})
    const [productImages, setProductImages] = useState([])
    const [count, setCount] = useState(1)

    let { id } = useParams();

    async function getAlldata() {
        let data = await axios.get(`https://dummyjson.com/products/${id}`)
        setProductData(data.data)
        setProductImages(data.data.images)
    }

    useEffect(() => {
        getAlldata()
    }, [])

    return (
        <div>
            <Container>
                <BreadCrumb
                    cardtitle={productData.title}
                />
                <div className='flex justify-center gap-17.5'>
                    <div className='flex justify-center gap-7.5'>
                        <div className='space-y-4'>
                            {productImages.map((item) => {
                                return <img src={item} alt="Images" className='w-42.5' />
                            })}
                        </div>
                        <div className='w-125 h-150'>
                            <img src={productData.thumbnail} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold font-inter'> {productData?.title} </h2>
                        <div className='py-4 flex items-center gap-3'>

                            <Rate allowHalf value={Number(productData?.rating)} />
                            <p className='text-black/60 border-r-2 border-black/60 pr-4 '>({productData?.reviews?.length || 0} Reviews)</p>
                            <p className={`text-sm font-medium ${productData?.availabilityStatus === "In Stock" ? "text-green" : "text-red-600"}`}>
                                {productData?.availabilityStatus}
                            </p>
                        </div>
                        <h3 className='text-2xl'>${productData.price}</h3>
                        <p className='text-sm py-6 border-b border-black/60 w-93.25'> {productData.description} </p>
                        <div className='flex items-center gap-2 py-6'>
                            <p className='pr-4'>Colours:</p>
                            <span className='w-4.5 h-4.5 rounded-full bg-[#A0BCE0] border-2 border-white outline-2 outline-black'></span>
                            <span className='w-5 h-5 rounded-full bg-[#E07575]'></span>
                        </div>
                        <div className='flex items-center'>
                            <p className='pr-4'>Size:</p>
                            <div className='flex items-center gap-4'>
                                <span className='w-8 h-8 rounded-md border border-black/60 flex items-center justify-center text-sm cursor-pointer hover:bg-red hover:border-none duration-300 hover:text-white'>XS</span>
                                <span className='w-8 h-8 rounded-md border border-black/60 flex items-center justify-center text-sm cursor-pointer hover:bg-red hover:border-none duration-300 hover:text-white'>S</span>
                                <span className='w-8 h-8 rounded-md border border-black/60 flex items-center justify-center text-sm cursor-pointer hover:bg-red hover:border-none duration-300 hover:text-white'>M</span>
                                <span className='w-8 h-8 rounded-md border border-black/60 flex items-center justify-center text-sm cursor-pointer hover:bg-red hover:border-none duration-300 hover:text-white'>L</span>
                                <span className='w-8 h-8 rounded-md border border-black/60 flex items-center justify-center text-sm cursor-pointer hover:bg-red hover:border-none duration-300 hover:text-white'>XL</span>

                            </div>

                        </div>
                        <div className='flex items-center gap-4 py-6'>
                            <div className='border rounded-md flex items-center text-xl font-medium'>
                                <button onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1);
                                    }
                                }}
                                    className='py-2 px-2.5 cursor-pointer hover:bg-red hover:text-white duration-300 border-r hover:rounded-l-md'>-</button>
                                <span className='w-15 text-center'> {count} </span>
                                <button onClick={() => setCount(count + 1)} className='py-2 px-2.5 cursor-pointer hover:bg-red hover:text-white duration-300 border-l hover:rounded-r-md'>+</button>
                            </div>
                            <RedButton>Buy Now</RedButton>
                            <div className='w-12 h-12 flex items-center justify-center border rounded-md text-2xl cursor-pointer hover:bg-red hover:text-white duration-300 hover:border-none'><IoIosHeartEmpty /></div>
                        </div>
                        <div className='border rounded-md'>
                            <div className='flex items-center gap-4 pl-4 pt-5 pb-4 border-b'>
                                <TbTruckDelivery className='text-[40px]' />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='font-medium text-base'>Free Delivery</h4>
                                    <p className='text-xs font-medium'>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 pl-4 pt-5 pb-4'>
                                <TbTruckReturn className='text-[40px]' />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='font-medium text-base'>Return Delivery</h4>
                                    <p className='text-xs font-medium'>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
