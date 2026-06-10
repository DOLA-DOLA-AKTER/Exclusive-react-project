import React from 'react'
import { Header } from '../Components/Header/Header'
import { Navber } from '../Components/Navber/Navber'
import { Banner } from '../Components/Banner/Banner'
import { Flash } from '../Components/Flash/Flash'


export const Home = () => {
  return (
    <div>
        <Header/>
        <Navber/>
        <Banner/>
        <Flash/>
    </div>
  )
}
