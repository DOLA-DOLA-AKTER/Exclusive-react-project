import React from 'react'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";



export const Flash = ({ peragraph, title, className }) => {
  return (
    <div className="lg:py-25 py-20">
        <Container>
            <div className="flex items-end justify-between">
                <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:items-end">
                    <Heading
                        peragraph="Today’s"
                        title="Flash Sales"
                    />
                    <div className="flex items-center gap-4">
                        <div>
                            <p className="text-[12px] font-medium leading-6.5">Days</p>
                            <h3 className='text-3xl font-bold leading-7.5'>03</h3>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                        </div>

                        <div>
                            <p className="text-[12px] font-medium leading-6.5">Hours</p>
                            <h3 className='text-3xl font-bold leading-7.5'>23</h3>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                        </div>

                        <div>
                            <p className="text-[12px] font-medium leading-6.5">Minutes</p>
                            <h3 className='text-3xl font-bold leading-7.5'>19</h3>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                        </div>

                        <div>
                            <p className="text-[12px] font-medium leading-6.5">Seconds</p>
                            <h3 className='text-3xl font-bold leading-7.5'>56</h3>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className="bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
                        <GoArrowLeft className='text-2xl font-normal active:font-bold'/>

                    </div>
                    <div className="bg-[#F5F5F5] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
                        <GoArrowRight className='text-2xl font-normal active:font-bold'/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
