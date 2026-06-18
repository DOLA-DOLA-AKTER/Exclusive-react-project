import React from 'react'
import { Container } from '../Container'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoPaperAirplane } from "react-icons/go";
import { LuTwitter } from "react-icons/lu";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import qrCode from "../../assets/qr-code.png"
import google from "../../assets/google-play.png"
import appstore from "../../assets/appstore.png"


export const Footer = () => {
  return (
    <footer className='bg-black text-white'>
        <Container className="py-20!">
            <div className='flex flex-wrap justify-between gap-10'>
                <div>
                    <h4 className='text-2xl font-bold font-inter pb-6'>
                        Exclusive
                    </h4>
                    <ul className='text-base flex flex-col gap-4'>
                        <li className='text-xl font-medium pb-2'>
                            Subscribe
                        </li>
                        <li>Get 10% off your first order</li>
                        <li className='border-2 border-white rounded-md flex items-center w-54.25 px-4 py-3 gap-2'>
                            <input type="email" placeholder='Enter your email'
                            className='w-full focus:outline-none' />
                            <GoPaperAirplane className='text-white text-2xl ' />
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-2xl font-bold font-inter pb-6'>
                        Support
                    </h4>
                    <ul className='text-base flex flex-col gap-4'>
                        <li>
                            <span className='block'>111 Bijoy sarani, Dhaka,</span>  DH 1515, Bangladesh.
                        </li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-2xl font-bold font-inter pb-6'>
                        Account
                    </h4>
                    <ul className='text-base flex flex-col gap-4'>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-2xl font-bold font-inter pb-6'>
                        Quick Link
                    </h4>
                    <ul className='text-base flex flex-col gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-2xl font-bold font-inter pb-6'>
                        Download App
                    </h4>
                    <ul className='text-base flex flex-col gap-4'>
                        <li className='text-white/60'>Save $3 with App New User Only</li>

                        <li className='flex items-center gap-2'>
                            <div>
                                <img src={qrCode} alt="QrCode" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <img src={google} alt="GooglePlay" />
                                </div>
                                <div>
                                    <img src={appstore} alt="AppStore" />
                                </div>

                            </div>

                        </li>

                        <li className='flex items-center gap-6 text-white text-2xl'>
                            <RiFacebookLine className='cursor-pointer hover:text-red-500 duration-300' />
                            <LuTwitter className='cursor-pointer hover:text-red-500 duration-300' />
                            <IoLogoInstagram className='cursor-pointer hover:text-red-500 duration-300' />
                            <RiLinkedinLine className='cursor-pointer hover:text-red-500 duration-300' />
                        </li>

                    </ul>
                </div>
            </div>
        </Container>
        <div className='flex items-center justify-center py-5 md:text-base text-sm  text-white/30 gap-1 border-t border-white/30'>
            <AiOutlineCopyrightCircle />
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  )
}
