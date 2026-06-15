import React from 'react'
import { Header } from '../Components/Header/Header'
import { Navber } from '../Components/Navber/Navber'
import { Banner } from '../Components/Banner/Banner'
import { Flash } from '../Components/Flash/Flash'
import { Categories } from '../Components/Categories/Categories'
import { ThisMonth } from '../Components/ThisMonth/ThisMonth'
import { Music } from '../Components/Music/Music'

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
    </div>
  )
}
