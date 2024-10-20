import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Links = () => {
    const newsRef = useRef(null);
    const serviceRef = useRef(null);
    const animationHasRun = useRef(false);

    useEffect(() => {
        if (!animationHasRun.current) {
          gsap.fromTo(newsRef.current, {
            opacity: 0,
            x: -100,
          }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: newsRef.current,
              start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
              once: true, // Animation happens only once
            },
          });
          gsap.fromTo(serviceRef.current, {
            opacity: 0,
            x: 100,
          }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: serviceRef.current,
              start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
              once: true, // Animation happens only once
            },
          });

          animationHasRun.current = true;
        }
      }, []);

  return (
    <div className='pb-16 bg-contentbg pt-10 flex justify-center w-full'>
        <div className='max-w-800px w-[80%] max-md:w-[90%] flex justify-evenly items-center gap-10 max-lg:flex-col max-lg:items-start text-text'>
            <div className='flex flex-col w-1/3 max-lg:w-full' ref={newsRef}>
                <h1 className='text-3xl font-semibold text-customBlack'>News</h1>
                <br />
                <p className='mb-2 text-lg'>Existing 80 Lakhs AssesseesTo Transfer on GSTN w.e.f 8th November 2016...</p>
                <p className='text-sm'>Tuesday,25 October, 2016 | <span className='text-h2'>Read more...</span></p>
                <br />
                <hr />
                <br />
                <p className='mb-2 text-lg'>The issue before the High Court was:...</p>
                <p className='text-sm'>Tuesday, 4 September, 2018 | <span>Read more...</span></p>
            </div>

            <div className='flex flex-col w-1/3 max-lg:w-full' ref={serviceRef}>
                <h1 className='text-3xl font-semibold text-customBlack'>Services</h1>
                <br />
                <Link to="/services"><img className='rounded-xl w-[80%] h-36 max-xl:h-28 max-lg:w-fit' src={services} alt=""/></Link>
                <br />
                <ul className='flex flex-col gap-2 ml-4'>
                    <Link to='/Jain-Jakhotiya/services/value-added-tax(vat)'><li>Value Added Tax (VAT)</li></Link>
                    <Link to='/Jain-Jakhotiya/services/service-tax'><li>Service Tax</li></Link>
                    <Link to='/Jain-Jakhotiya/services/corporate-services'><li>Corporate Services</li></Link>
                    <Link to='/Jain-Jakhotiya/services/audit'><li>Audit</li></Link>
                </ul>
            </div>
        </div>
    </div>
)};

export default Links;
