import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
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
                y: 100,
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
    <div className='flex justify-center w-full mb-28'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col items-center gap-4 flex-wrap'>
            <div className='self-center flex flex-col items-center justify-center mb-8'>
                <div ref={headRef}>
                    <h1 className='text-customBlack font-bold text-5xl mb-4'>Our Vision</h1>
                    <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
                        <span className='block h-[1px] w-12 bg-customBlack'></span>
                        <span className='block h-[1px] w-8 bg-customBlack'></span>
                        <span className='block h-[1px] w-4 bg-customBlack'></span>
                    </div>
                </div>
                
                <p className='text-xl text-text text-center' ref={paraRef}>We aim to empower businesses and individuals to effectively manage compliance risks. By offering tailored auditing and 
                accountancy services, we help our clients thrive in an ever-evolving business environment. Our ultimate goal is to create lasting value for both our clients 
                and employees, grounded in their satisfaction and success.</p>
            </div>
        </div>
    </div>
)};

export default Vision;
