import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const animationHasRun = useRef(false);

  useEffect(() => {
    if (!animationHasRun.current) {
      // Head animation
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

      // Paragraph animation with stagger for each div
      gsap.utils.toArray(paraRef.current.children).forEach((el, index) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
            once: true, // Animation happens only once
          },
          delay: index * 0.5, // Stagger each div by 0.5 seconds
        });
      });

      animationHasRun.current = true;
    }
  }, []);

  return (
    <div className='flex justify-center w-full mb-16'>
      <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='flex flex-col items-center justify-center mb-8'>
          <div className='mb-8' ref={headRef}>
            <h1 className='text-customBlack font-bold text-5xl mb-4'>Our <span className='text-buttonBlue'> Values</span></h1>
            <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
              <span className='block h-[1px] w-12 bg-customBlack'></span>
              <span className='block h-[1px] w-8 bg-customBlack'></span>
              <span className='block h-[1px] w-4 bg-customBlack'></span>
            </div>
          </div>
          <div className='w-full p-4 flex justify-evenly items-center max-md:flex-col max-md:items-start gap-8' ref={paraRef}>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Commitment to Quality</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Upholding the highest standards in all we do.</p>
            </div>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Integrity and Trust</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Building relationships through honesty and reliability.</p>
            </div>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Passion and Engagement</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Cultivating a motivated and dedicated team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
