import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const headRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(headRef.current, {
                opacity: 0,
                y: -200,
              }, {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });
            
            gsap.fromTo(
                leftRef.current.children, // Target each child of the grid
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
                        trigger: leftRef.current,
                        start: 'top 90%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            gsap.fromTo(
                rightRef.current.children, // Target each child of the grid
                {
                    opacity: 0,
                    x: 200, // Start position (from the left)
                },
                {
                    opacity: 1,
                    x: 0, // End position (move to natural position)
                    delay: 0.4,
                    duration: 0.7,
                    ease: "power1.out",
                    stagger: 0.1, // Stagger animation by 0.2 seconds
                    scrollTrigger: {
                        trigger: rightRef.current,
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
                <div ref={headRef}>
                    <h2 className='text-buttonBlue text-center font-bold text-5xl mb-8'>Clients and Relevant Work Experience</h2>
                    <div className='flex flex-col justify-center items-center mt-3 gap-[6px] pb-10'>
                        <span className='block h-[1px] w-12 bg-customBlack'></span>
                        <span className='block h-[1px] w-8 bg-customBlack'></span>
                        <span className='block h-[1px] w-4 bg-customBlack'></span>
                    </div>
                    <p className='text-text text-center text-xl font-medium mb-8'>The firm has worked for various clients small and large belonging to the following industry verticals either directly or through its management team.</p>
                </div>
                <div className='w-4/5 max-2xl:w-full flex justify-between gap-[5%] max-lg:flex-col max-lg:gap-2'>
                    <div>
                        <ul className='text-text text-lg list-none ml-2 flex flex-col gap-2' ref={leftRef}>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>
                            Construction and Real Estate</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Beauty and Health Care</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Pharmacy manufacturers and dealers</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Medical Professionals</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Manufacturers and traders</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Foundry Business</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Agro based industry</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Packaging Industries</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Transport and Fleet Owners</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Financials advisory Companies</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-text text-lg list-none ml-2 flex flex-col gap-2' ref={rightRef}>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Engineering and Auto Industry</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Travel And Tourism</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Works contract Industry & Tower erection</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Cloth merchants</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Commodity Wholesale Dealers</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Ready mix food industry</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Charitable Organizations</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Software companies</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Stock Audit</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Fixed Assets Audit</li>
                            <li className='flex gap-4 items-center'>
                                <span>
                                    <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                                    <span className='block h-[1px] w-6 bg-customBlack'></span>
                                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                                    </div>
                                </span>Housing Society Audit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients
