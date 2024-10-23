import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceTax = () => {
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
                <h2 className='text-buttonBlue font-bold text-5xl mb-8 max-sm:text-4xl' ref={headRef}>Service Tax</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2' ref={listRef}>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Registration under Service tax.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Consultancy for maintenance of proper records.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Consultancy for proper accounting for Service tax.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Consultancy on various issues relating to Service Tax.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Compilation of data of Cenvat credit.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Assistance in availment of notified Abatements.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Utilization and availment of service tax credit in accordance with the Service Tax Credit Rules.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Computation of Service tax payable.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Preparation and filing Returns.</li>
                    <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Getting assessments done.</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default ServiceTax;
