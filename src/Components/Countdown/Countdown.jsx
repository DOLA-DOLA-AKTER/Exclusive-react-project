import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

export const Countdown = ({ colon, className, countText, counts }) => {

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
        <div>
            {
                timeUp ?
                    <h2 className='text-red-500 text-3xl font-semibold'>Time's Up</h2>
                    :
                    <div className={`flex flex-wrap items-center md:gap-4 gap-3`}>
                        <div className={`${className}`}>
                            <p className={`text-[12px] font-medium leading-6.5 ${countText}`}>Days</p>
                            <h3 className={`md:text-3xl text-2xl font-bold leading-7.5 font-inter ${counts}`}>{count.days}</h3>
                        </div>
                        <span className={`text-red text-4xl ${colon}`}>:</span>

                        <div className={`${className}`}>
                            <p className={`text-[12px] font-medium leading-6.5 ${countText}`}>Hours</p>
                            <h3 className={`md:text-3xl text-2xl font-bold leading-7.5 font-inter ${counts}`}>{count.hours}</h3>
                        </div>
                        <span className={`text-red text-4xl ${colon}`}>:</span>

                        <div className={`${className}`}>
                            <p className={`text-[12px] font-medium leading-6.5 ${countText}`}>Minutes</p>
                            <h3 className={`md:text-3xl text-2xl font-bold leading-7.5 font-inter ${counts}`}>{count.minutes}</h3>
                        </div>
                        <span className={`text-red text-4xl ${colon}`}>:</span>

                        <div className={`${className}`}>
                            <p className={`text-[12px] font-medium leading-6.5 ${countText}`}>Seconds</p>
                            <h3 className={`md:text-3xl text-2xl font-bold leading-7.5 font-inter ${counts}`}>{count.seconds}</h3>
                        </div>
                    </div>
            }
        </div>
    )
}






// import React, { useEffect, useState } from 'react'
// import { countDownDateAndTime } from 'countdown-date-time';

// export const Countdown = () => {

//     let [count, setCount] = useState({});
//     let [timeUp, setTimeUp] = useState(false);

//     const conduct_date = '2026-07-06 12:00:00';

//     useEffect(() => {

//         let interval;

//         let updateCountDown = () => {
//             const countDown = countDownDateAndTime(conduct_date);

//             //  time up condition
//             if (countDown.days <= 0 && countDown.hours <= 0 && countDown.minutes <= 0 && countDown.seconds <= 0) {

//                 setTimeUp(true);
//                 clearInterval(interval);
//             } else {
//                 setCount(countDown);
//             }
//         }

//         updateCountDown();
//         interval = setInterval(updateCountDown, 1000);

//         return () => {
//             clearInterval(interval);
//         }

//     }, [conduct_date])


//     return (
//         <div>
//             {
//                 timeUp ?
//                     <h2 className='text-red-500 text-3xl font-semibold'>Time's Up</h2>
//                     :
//                     <div className="flex items-center gap-4">
//                         <div>
//                             <p className="text-[12px] font-medium leading-6.5">Days</p>
//                             <h3 className='text-3xl font-bold leading-7.5 font-inter'>{count.days}</h3>
//                         </div>
//                         <span className='text-red text-4xl'>:</span>

//                         <div>
//                             <p className="text-[12px] font-medium leading-6.5">Hours</p>
//                             <h3 className='text-3xl font-bold leading-7.5 font-inter'>{count.hours}</h3>
//                         </div>
//                         <span className='text-red text-4xl'>:</span>

//                         <div>
//                             <p className="text-[12px] font-medium leading-6.5">Minutes</p>
//                             <h3 className='text-3xl font-bold leading-7.5 font-inter'>{count.minutes}</h3>
//                         </div>
//                         <span className='text-red text-4xl'>:</span>

//                         <div>
//                             <p className="text-[12px] font-medium leading-6.5">Seconds</p>
//                             <h3 className='text-3xl font-bold leading-7.5 font-inter'>{count.seconds}</h3>
//                         </div>
//                     </div>
//             }
//         </div>
//     )
// }
