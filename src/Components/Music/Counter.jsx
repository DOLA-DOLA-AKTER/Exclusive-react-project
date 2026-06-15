import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

export const Counter = () => {

    let [count, setCount] = useState({});
    let [timeUp, setTimeUp] = useState(false);

    const conduct_date = '2026-07-06 12:00:00';

    useEffect(() => {

        let interval;

        let updateCountDown = () => {
            const countDown = countDownDateAndTime(conduct_date);

            //  time up condition
            if (countDown.days <= 0 && countDown.hours <= 0 && countDown.minutes <= 0 && countDown.seconds <= 0) {

                setTimeUp(true);
                clearInterval(interval);
            } else {
                setCount(countDown);
            }
        }

        updateCountDown();
        interval = setInterval(updateCountDown, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [conduct_date])

    return (
        <div className='text-black'>
            {
                timeUp ?
                    <h2 className='text-red-500 text-3xl font-semibold'>Time's Up</h2>
                    :
                    <div className="flex items-center gap-6 flex-wrap">

                        <div className='flex flex-col justify-center items-center w-15 h-15 rounded-full bg-white'>
                            <h3 className='text-base font-semibold leading-5'>{count.hours}</h3>
                            <p className="text-[11px] font-normal leading-4.5">Hours</p>
                        </div>

                        <div className='flex flex-col justify-center items-center w-15 h-15 rounded-full bg-white'>
                            <h3 className='text-base font-semibold leading-5'>{count.days}</h3>
                            <p className="text-[11px] font-normal leading-4.5">Days</p>
                        </div>

                        <div className='flex flex-col justify-center items-center w-15 h-15 rounded-full bg-white'>
                            <h3 className='text-base font-semibold leading-5'>{count.minutes}</h3>
                            <p className="text-[11px] font-normal leading-4.5">Minutes</p>
                        </div>

                        <div className='flex flex-col justify-center items-center w-15 h-15 rounded-full bg-white'>
                            <h3 className='text-base font-semibold leading-5'>{count.seconds}</h3>
                            <p className="text-[11px] font-normal leading-4.5">Seconds</p>
                        </div>
                    </div>
            }
        </div>
    )
}
