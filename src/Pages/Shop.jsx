import React, { useEffect, useState } from 'react'
import { Container } from '../Components/Container/Container'
import { Card } from '../Components/Card/Card'
import { FaStar } from 'react-icons/fa'
import img2 from '../assets/img2.png'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import { Paginate } from '../Components/Paginate'
import { Skeleton } from '../Components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Products } from '../Slices/ProductSlice'


export const Shop = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showValue, setShowValue] = useState(6);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allProducts.value)
  

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => dispatch(Products(data.products)))
      .then(() => setLoading(false));
  }, [])


return (
  <div>
    <Container>
      <div>
        <BreadCrumb />
      </div>
      <div className='flex justify-between'>
        <h3 className='font-bold text-xl text-black26'>Shop by Category</h3>
        <div className='space-x-3'>
          <span>Show : </span>
          <select onChange={(e)=> setShowValue(e.target.value)} name="" id="" className='border border-[#D9D9D9] rounded-md py-1 px-10 focus:outline-none'>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>

      </div>
      <div className='flex flex-col xl:flex-row xl:gap-11 gap-1 py-5 xl:py-0'>
        <div className='xl:w-[20%] w-full lg:pt-5 pt-5 flex items-center justify-center xl:block'>
          <ul className='md:text-base text-sm xl:leading-6 leading-4 font-normal flex flex-col space-y-4 mr-4'>
            {
              data.map((item) =>{
                return<li>{item.category}</li>;
              })
            }
            {/* <li><a href="#">Woman’s Fashion</a></li>
            <li><a href="#">Men’s Fashion</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Home & Lifestyle</a></li>
            <li><a href="#">Medicine</a></li>
            <li><a href="#">Sports & Outdoor</a></li>
            <li><a href="#">Baby’s & Toys</a></li>
            <li><a href="#">Groceries &</a></li>
            <li><a href="#">Health & Beauty</a></li> */}
          </ul>
        </div>
        <div className='xl:w-[80%] w-[95%] lg:pt-5 pt-5'>
          {
            loading ?
              <div className='flex flex-wrap justify-between items-center gap-7.5'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
              :
              <div>
                <Paginate itemsPerPage={showValue} />
              </div>
          }
        </div>
      </div>
    </Container>
  </div>
)
}
