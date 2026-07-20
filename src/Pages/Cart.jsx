import React from 'react'
import { Container } from '../Components/Container/Container'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import { CartItem } from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { RedButton } from '../Components/Button/RedButton'
import { NavLink } from "react-router-dom";


export const Cart = () => {

    const data = useSelector((state) => state.allProducts.cart);

    return (
        <div>
            <Container>
                <BreadCrumb
                    className='text-black'
                />
                <div className='space-y-5'>
                    <div className='flex items-center justify-between py-6 px-10 rounded-md shadow-sm'>
                        <h5 className='text-base'>Product</h5>
                        <h5 className='text-base'>Price</h5>
                        <h5 className='text-base'>Quantity</h5>
                        <h5 className='text-base'>Subtotal</h5>
                    </div>
                    {data.map((item) => {
                        return <div key={item.id}>
                        <CartItem
                            id={item.id}
                            ImgSrc={item.thumbnail}
                            imgTitle={item.title}
                            title={item.title}
                            price={item.price}
                            quantity={item.price}
                            subTotal={item.price}
                        />
                    </div>
                    })}
                    <div className='flex items-center justify-between'>
                        <NavLink to="/Shop"><RedButton
                         className='bg-white! text-black! border border-gray'>Return To Shop</RedButton></NavLink>
                        <RedButton className='bg-white! text-black! border border-gray'>Update Cart</RedButton>
                    </div>
                    <div className='flex items-start justify-between pt-15'>
                        <div className='flex items-center gap-4'>
                            <RedButton className='bg-white! border border-gray text-gray! pr-41!'>Coupon Code</RedButton>
                            <RedButton>Apply Coupon</RedButton>
                        </div>
                        <div className='border-2 border-black rounded-md w-117.5'>
                            <div className='py-8 px-6'>
                                <h3 className='text-xl font-medium pb-6'>Cart Total</h3>
                                <div className='text-base flex items-center justify-between'>
                                    <span>Subtotal:</span>
                                    <span>$1750</span>
                                </div>
                                <div className='text-base flex items-center justify-between py-4 my-4 border border-l-0 border-r-0 border-gray'>
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className='text-base flex items-center justify-between'>
                                    <span>Total:</span>
                                    <span>$1750</span>
                                </div>
                                <div className='mt-4 flex items-center justify-center'>
                                    <RedButton>Procees to checkout</RedButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
