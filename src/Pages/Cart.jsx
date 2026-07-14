import React from 'react'
import { Container } from '../Components/Container/Container'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import { CartItem } from '../Components/CartItem'
import { useSelector } from 'react-redux'

export const Cart = () => {

    const data = useSelector((state) => state.allProducts.cart)

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
                        return <div key={item}>
                        <CartItem
                            ImgSrc={item.thumbnail}
                            imgTitle={item.title}
                            title={item.title}
                            price={item.price}
                            // quantity=''
                            subTotal={item.price}
                        />
                    </div>
                    })}
                </div>
            </Container>
        </div>
    )
}
