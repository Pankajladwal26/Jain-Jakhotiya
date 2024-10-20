import React, { useRef, useEffect, useState } from 'react';
import { Performancebg } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const divRef = useRef(null);
  const animationHasRun = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const numbers = [1234, 123, 12, 28];

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!animationHasRun.current) {
      gsap.fromTo(divRef.current, {
        opacity: 0,
        x: 2000,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      numbers.forEach((num, index) => {
        const element = divRef.current.querySelectorAll('.number')[index];

        gsap.to(element, {
          innerHTML: num,
          delay: 0.4,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            once: true,
          },
        });
      });

      animationHasRun.current = true;
    }
  }, []);

  return (
    <div
      className='flex justify-center h-[500px] max-md:h-[800px] items-center w-full mb-28'
      style={{
        backgroundImage: `url(${Performancebg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        clipPath: isMobile ? 'polygon(0 6%, 100% 0, 100% 95%, 0% 100%)' : 'polygon(0 20%, 100% 0, 100% 83%, 0 100%)',
      }}
      ref={divRef}
    >
      <div className='pt-4 max-w-800px w-[70%] max-lg:w-[90%] mb-4'>
        <div className='flex justify-between max-md:flex-col max-md:gap-14 items-center'>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={faLightbulb} className='max-md:text-4xl' size='5x' color='white' />
            <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6 number'>0</p>
            <p className='text-white text-center font-bold text-xl'>Entrepreneurs <br className='xl:hidden max-md:hidden' /> Served</p>
          </div>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={faHandshake} className='max-md:text-4xl' size='5x' color='white' />
            <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6 number'>0</p>
            <p className='text-white text-center font-bold text-xl'>Professionals <br className='xl:hidden max-md:hidden' /> Network</p>
          </div>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={faCity} className='max-md:text-4xl' size='4x' color='white' />
            <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6 number'>0</p>
            <p className='text-white text-center font-bold text-xl'>Cities <br className='xl:hidden max-md:hidden' /> Present</p>
          </div>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={faNetworkWired} className='max-md:text-4xl' size='4x' color='white' />
            <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6 number'>0</p>
            <p className='text-white text-center font-bold text-xl'>Team <br className='xl:hidden max-md:hidden' /> Strength</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
