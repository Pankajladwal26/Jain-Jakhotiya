import React, { useRef, useEffect } from 'react';
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const copyRef = useRef(null);
  const menuRef = useRef(null);
  const headRef = useRef(null);
  const addressRef = useRef(null);
  const locationRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef([]); // Refs for social icons
  const animationHasRun = useRef(false);

  // Stagger animation for the menu items and list items
  useEffect(() => {
    if (!animationHasRun.current) {
      // Animate footer copyright
      gsap.fromTo(copyRef.current, {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: copyRef.current,
          start: 'top 100%',
          once: true,
        },
      });

      // Animate the menu items (li and anchor tags) with a stagger
      gsap.fromTo(menuRef.current.querySelectorAll('li'), {
        opacity: 0,
        y: 50,  // Start from 50px below
      }, {
        opacity: 1,
        y: 0,  // Move to original position
        duration: 0.6,
        stagger: 0.2,  // Stagger effect with a 0.2s delay
        ease: 'power1.out',
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top 100%',
          once: true,
        },
      });

      gsap.fromTo(headRef.current, {
        opacity: 0,
        y: -50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: copyRef.current,
          start: 'top 100%',
          once: true,
        },
      });

      gsap.fromTo(addressRef.current, {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: addressRef.current,
          start: 'top 100%',
          once: true,
        },
      });

      // New staggered animation for the address elements
      gsap.fromTo(
        locationRef.current.querySelectorAll('.location-item'), 
        {
          opacity: 0,
          x: 100, // Start from 100px to the right
        }, 
        {
          opacity: 1,
          x: 0, // Move to their original position
          duration: 1,
          stagger: 0.2, // 0.3s stagger delay
          ease: 'power1.out',
          scrollTrigger: {
            trigger: locationRef.current,
            start: 'top 100%',
            once: true,
          },
        }
      );
      gsap.fromTo(
        logoRef.current.querySelectorAll('.logo-item'), 
        {
          opacity: 0,
          x: -100, // Start from 100px to the right
        }, 
        {
          opacity: 1,
          x: 0, // Move to their original position
          duration: 1,
          stagger: 0.2, // 0.3s stagger delay
          ease: 'power1.out',
          scrollTrigger: {
            trigger: locationRef.current,
            start: 'top 100%',
            once: true,
          },
        }
      );

      // Animation for social media icons
      gsap.fromTo(
        socialRef.current.querySelectorAll('div'), 
        {
          opacity: 0,
          y: -50,  // Start from below (50px) for smooth upward movement
        }, 
        {
          opacity: 1,
          y: 0,  // End at original position
          duration: 1,  // Slow down the animation duration to 1s for smoother transition
          stagger: 0.1,  // Keep stagger
          ease: 'bounce.out',  // Make the ease smoother
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 100%',  // Start the animation when the element is 80% from the top of the viewport
            once: true,  // Make sure it only animates once
          },
        }
      );

      animationHasRun.current = true;
    }
  }, []);

  return (
    <div className="bg-footer text-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-lg:gap-0 max-md:gap-8">
          <div>
            <div ref={logoRef}>
              <img src={CALogo} alt="CA Logo" width={90} className='mb-4 logo-item'/>
              <p className="text-gray-400 mb-6 logo-item">
                Jain Jakhotiya & Associates, founded in 2014, is a top Chartered Accountants firm in PCMC and Pune, specializing in auditing and taxation.
              </p>
            </div>
            <div className="flex space-x-4" ref={socialRef}>
              <div><a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://x.com/madhujainwala11"><FontAwesomeIcon icon={faXTwitter} size='2x' color='white'/></a></div>
              <div><a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.facebook.com/madhusudan.jain.7/"><FontAwesomeIcon icon={faFacebook} size='2x' color='white'/></a></div>
              <div><a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="mailto:camadhusudan.jain@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='2x' color='white'/></a></div>
              <div><a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.linkedin.com/in/fca-madhusudan-jain-a2425317/"><FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/></a></div>
            </div>
          </div>

          {/* Footer Menu */}
          <div className='flex flex-col md:items-center'>
            <h4 className="text-xl font-semibold mb-4" ref={headRef}>Footer Menu</h4>
            <ul className="space-y-2"  ref={menuRef}>
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="/Jain-Jakhotiya/aboutus" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white">Online Support</a></li>
              <li><a href="/Jain-Jakhotiya/blogs" className="text-gray-400 hover:text-white">Our Blog</a></li>
              <li><a href="/Jain-Jakhotiya/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4" ref={addressRef}>Company Address</h4>
            <div ref={locationRef}>
              <div className='flex gap-4 mb-2'>
                <div className="location-item">
                  <FontAwesomeIcon icon={faMap} size='1x' color='white'/>
                </div>
                <div className="location-item">
                  <p className="text-gray-400">F-12, 4th floor,</p>
                  <p className="text-gray-400">Butte Patil Towers,</p>
                  <p className="text-gray-400">LBS Road, Ganjawe Chowk,</p>
                  <p className="text-gray-400">Pune - 411030</p>
                </div>
              </div>
              <div className='flex gap-4 mb-2'>
                <div className="location-item">
                  <FontAwesomeIcon icon={faPhone} size='1x' color='white'/>
                </div>
                <div className="location-item">
                  <p className="text-gray-400">+91 - 94045 - 00030 / +91 - 98238 - 23251</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className="location-item">
                  <FontAwesomeIcon icon={faEnvelope} size='1x' color='white'/>
                </div>
                <div className="location-item">
                  <p className="text-gray-400">cajakhotiya@gmail.com</p>
                  <p className="text-gray-400">camadhusudan.jain <br className='lg:hidden max-md:hidden'/> @gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className='border-white'/>
      <div className="mt-8 text-center" ref={copyRef}>
        <p className="text-gray-400">Copyright © 2016 Jain Jakhotiya & Associates. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
