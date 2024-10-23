import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Outsourcing = () => {
    const headRef = useRef(null);
    const listRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(headRef.current, {
                opacity: 0,
                y: -200,
              }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });

            gsap.fromTo(
                listRef.current.children, // Target each child of the grid
                {
                    opacity: 0,
                    x: -200, // Start position (from the left)
                },
                {
                    opacity: 1,
                    x: 0, // End position (move to natural position)
                    delay: 0.4,
                    duration: 0.7,
                    ease: "power1.out",
                    stagger: 0.1, // Stagger animation by 0.2 seconds
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 90%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            animationHasRun.current = true;
        }
    }, []);

  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-buttonBlue font-bold text-5xl mb-8 max-sm:text-4xl' ref={headRef}>Benefits of Outsourcing</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2' ref={listRef}>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Enables business to concentrate on core business activities.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Use of manpower for more important functions.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Investment in fixed assets reduced/minimized.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Substantial Savings in Cost.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Services of experts made available.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Improved Internal Controls.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Enhanced reporting capabilities to provide more timely and accurate financial data.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Off-site Backup of Data.</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default Outsourcing;
