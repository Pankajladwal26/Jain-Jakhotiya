import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const headRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const animationHasRun = useRef(false);

  useEffect(() => {
    if (!animationHasRun.current) {
      gsap.fromTo(headRef.current, {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      });

      gsap.fromTo(para1Ref.current, {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      });

      gsap.fromTo(para2Ref.current, {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      });

      animationHasRun.current = true;
    }
  }, []);

  return (
    <div className='text-white relative p-6 pt-24 pb-12'>
      <div className="pt-4 flex gap-4 flex-wrap justify-evenly items-center xl:flex-row mt-[10%]">
          <div className='flex flex-col items-center justify-center gap-12 max-md:order-2'>
              <h1 className='relative h1 text-center font-semibold text-5xl max-sm:text-4xl leading-4rem z-20' ref={headRef}>Discover <br /><span className='text-6xl max-sm:text-5xl text-green font-bold'> Jain Jakhotiya & Associates</span></h1>
            <div className='flex flex-col text-xl items-center text-center justify-center max-sm:hidden' ref={para1Ref}>
              <span className=''>Elevate your growth with our tailored solutions and expert support.</span>
              <span className=''>We understand your unique challenges and are committed to your lasting success.</span>
            </div>
            <div className='flex flex-col sm:hidden text-center' ref={para2Ref}>
              <span className=''>We're dedicated to your success.</span>
              <span className=''>Boost your growth with our expert solution.</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero;