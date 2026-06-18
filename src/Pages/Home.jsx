import React from 'react'
import { Header } from '../Components/Header'
import { Navber } from '../Components/Navber'
import { Banner } from '../Components/Banner'
import { Flash } from '../Components/Flash'
import { Categories } from '../Components/Categories'
import { ThisMonth } from '../Components/ThisMonth'
import { Music } from '../Components/Music'
import { Products } from '../Components/Products'
import { Featured } from '../Components/Featured'
import { Services } from '../Components/Services'
import { Footer } from '../Components/Footer'



export const Home = () => {
  return (
    <div>
        <Header/>
        <Navber/>
        <Banner/>
        <Flash/>
        <Categories/>
        <ThisMonth/>
        <Music/>
        <Products/>
        <Featured/>
        <Services/>
        <Footer/>
    </div>
  )
}
