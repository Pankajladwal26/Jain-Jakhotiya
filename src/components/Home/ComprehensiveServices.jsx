import React, { useRef, useEffect } from 'react';
import { CompServices } from '../../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComprehensiveServices = () => {
    const divRef = useRef(null);
    const headRef = useRef(null);
    const gridRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(divRef.current, {
                opacity: 0,
                x: 2000,
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
                x: -200,
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
                    x: -200, // Start position (from the left)
                },
                {
                    opacity: 1,
                    x: 0, // End position (move to natural position)
                    delay: 0.4,
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
        className='bg-contentbg flex justify-center items-center w-full h-[900px] mb-28 z-0'
        style={{
            backgroundImage: `url(${CompServices})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        ref={divRef}
    >
        <div className='max-w-800px w-[80%] max-md:w-[90%] max-sm:w-full flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center'>
            <div className='pt-4 pl-6 max-xl:h-2/3 flex flex-col items-start max-xl:justify-start gap-8 flex-wrap mb-6 max-xl:mb-10'>
                <div className='flex flex-col gap-8' ref={headRef}>
                    <h1 className='text-customBlack font-bold text-5xl max-sm:text-4xl mb-2'>Our <span className='text-buttonBlue'>Comprehensive </span> Services</h1>
                    <div className='flex flex-col justify-center items-start gap-[6px] mb-3'>
                        <span className='block h-[1px] w-12 bg-customBlack'></span>
                        <span className='block h-[1px] w-8 bg-customBlack'></span>
                        <span className='block h-[1px] w-4 bg-customBlack'></span>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-16 text-xl max-sm:text-lg max-md:grid-cols-1 max-md:gap-8' ref={gridRef}>
                    <div><p className='text-black font-semibold'>Audit & Assurance Services</p></div>
                    <div><p className='text-black font-semibold'>Taxation and Legal Compliance</p></div>
                    <div><p className='text-black font-semibold'>Corporate Advisory and International Taxation</p></div>
                    <div><p className='text-black font-semibold'>Accountancy Services</p></div>
                    <div><p className='text-black font-semibold'>Project Appraisal & Financing</p></div>
                    <div><p className='text-black font-semibold'>Business Advisory Services</p></div>

                </div>
            </div>
        </div>
    </div>
)};

export default ComprehensiveServices;
