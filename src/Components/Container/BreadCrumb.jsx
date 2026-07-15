import React from 'react'
import { useLocation } from 'react-router'


export const BreadCrumb = ({ cardtitle, className }) => {

    let {pathname} = useLocation()

    let PathLocation = pathname.slice(1)
    
  return (
    <div className='flex gap-4 lowercase text-black/30 pb-12.5'>
        <h2>Home</h2>
        <h2>/</h2>
        <h2 className={`${className}`}>{PathLocation}</h2>
        <h2 className='text-black/80 capitalize'>{cardtitle}</h2>
    </div>
  )
}



