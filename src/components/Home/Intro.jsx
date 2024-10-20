import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const headRef = useRef(null);
    const paraRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
            gsap.fromTo(headRef.current, {
                opacity: 0,
                y: -100,
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
            gsap.fromTo(paraRef.current, {
                opacity: 0,
                y: -100,
                }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
                    once: true, // Animation happens only once
                }
            });

            animationHasRun.current = true;
        }
    }, []);
    

  return (
    <div className='flex justify-center items-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col items-center gap-4 flex-wrap mb-16'>
            <div ref={headRef}>
                <h1 className='text-customBlack text-center font-bold text-4xl mb-2'>Your <span className='text-buttonBlue'>Trusted Partner</span> in Financial Excellence</h1>
                <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
                    <span className='block h-[1px] w-12 bg-customBlack'></span>
                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                </div>
            </div>
            <p className='text-lg text-center text-text' ref={paraRef}><span className='text-xl font-semibold'>Established in 2014, Jain Jakhotiya & Associates,</span> is a premier firm of Chartered Accountants dedicated to delivering exceptional
            consulting, auditing, accounting, taxation, and allied services. With over a decade of experience, we pride ourselves on our commitment
            to excellence and integrity, serving a diverse clientele from our state-of-the-art offices in PCMC and Pune.</p>
        </div>
    </div>
)};

export default Intro;
