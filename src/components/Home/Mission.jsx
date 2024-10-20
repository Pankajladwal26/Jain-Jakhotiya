import React, { useRef, useEffect } from 'react';
import { Missionbg } from '../../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const divRef = useRef(null);
    const headRef = useRef(null);
    const gridRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(divRef.current, {
                opacity: 0,
                x: -2000,
              }, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: divRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });
            gsap.fromTo(headRef.current, {
                opacity: 0,
                x: 200,
              }, {
                opacity: 1,
                x: 0,
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
                gridRef.current.children, // Target each child of the grid
                {
                    opacity: 0,
                    x: 200, // Start position (from the left)
                },
                {
                    opacity: 1,
                    x: 0, // End position (move to natural position)
                    delay: 0.3,
                    duration: 1,
                    ease: "power1.out",
                    stagger: 0.2, // Stagger animation by 0.2 seconds
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            animationHasRun.current = true;
        }
    }, []);

  return (
    <div 
        className='flex justify-center items-center w-full h-[900px] mb-28'
        style={{
            backgroundImage: `url(${Missionbg})`,
            backgroundPosition: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        ref={divRef}
    >
        <div className='max-w-800px w-[80%] max-md:w-[90%] flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center justify-end'>
            <div className='flex justify-center flex-col items-end max-md:items-start w-full mb-28'>
                <div className='flex flex-col gap-8' ref={headRef}>
                    <h1 className='text-customBlack text-center self-center font-bold text-5xl'>Our <span className='text-buttonBlue'>Mission</span> </h1>
                    <div className='flex flex-col self-center justify-center items-center mt-3 gap-[6px] pb-10'>
                        <span className='block h-[1px] w-12 bg-customBlack'></span>
                        <span className='block h-[1px] w-8 bg-customBlack'></span>
                        <span className='block h-[1px] w-4 bg-customBlack'></span>
                    </div>
                </div>
                <div className='max-xl:order-2 pt-4 pl-6 flex flex-col items-end justify-end gap-4 flex-wrap mb-6 max-xl:mb-10'>
                    <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-8' ref={gridRef}>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Quality Service</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Delivering excellence in every interaction.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Professional Ethics</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Upholding the highest standards of integrity and honesty.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Healthy Client Relationships</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Fostering trust and collaboration.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Employee Satisfaction</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Valuing and supporting our team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Mission;