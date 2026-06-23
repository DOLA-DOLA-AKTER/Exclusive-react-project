import React from 'react'
import { Banner } from '../Components/Banner'
import { Flash } from '../Components/Flash'
import { Categories } from '../Components/Categories'
import { ThisMonth } from '../Components/ThisMonth'
import { Music } from '../Components/Music'
import { Products } from '../Components/Products'
import { Featured } from '../Components/Featured'
import { Services } from '../Components/Services'


export const Home = () => {
  return (
    <div>
        <Banner/>
        <Flash/>
        <Categories/>
        <ThisMonth/>
        <Music/>
        <Products/>
        <Featured/>
        <Services/>
    </div>
  )
}
