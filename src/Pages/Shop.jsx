import React, { useEffect, useState } from 'react'
import { Container } from '../Components/Container/Container'
import { Card } from '../Components/Card/Card'
import { FaStar } from 'react-icons/fa'
import img2 from '../assets/img2.png'
import { BreadCrumb } from '../Components/Container/BreadCrumb'
import { Paginate } from '../Components/Paginate'
import { Skeleton } from '../Components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { CategorieReducer, Products } from '../Slices/ProductSlice'
import axios from "axios";


export const Shop = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showValue, setShowValue] = useState(6);
  const [uniCategory, setUniCategory] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.allProducts.value)

  async function getAlldata () {
    let data = await axios.get('https://dummyjson.com/products')
    dispatch(Products(data.data.products))
    setAllProducts(data.data.products)
    setLoading(false)
  }
  

  useEffect(() => {
   getAlldata()
  }, [])

  useEffect(() => {
    const uniqueCategory = [...new Set(data.map((item) => item.category ))]
    setUniCategory(uniqueCategory)
  }, [])
    
    const handleFilterItem = (item) => {      
      const filterItem = allProducts.filter((categoryItem) => categoryItem.category == item)  
      dispatch(CategorieReducer(filterItem))
    }



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
          <ul className='md:text-base text-sm xl:leading-6 leading-4 font-normal flex flex-col space-y-4 mr-4 capitalize'>
            <li onClick={() => dispatch(Products(allProducts))} className='hover:text-red cursor-pointer duration-300'>All Products</li>
            {
              uniCategory.map((item) =>{
                return<li 
                key={item.id} 
                onClick={()=> handleFilterItem(item)} className='hover:text-red cursor-pointer duration-300'>{item}</li>;
              })
            }

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
