import React from 'react'
import { Header } from './Components/Header'
import { Navber } from './Components/Navber'
import { Footer } from './Components/Footer'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <Header/>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
