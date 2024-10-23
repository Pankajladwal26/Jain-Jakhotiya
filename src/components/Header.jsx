import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { Link } from "react-router-dom";
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const linkRef = useRef([]); // We will use an array of refs for the links
  const animationHasRun = useRef(false); // To track if animation has already run

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHome, setDropdownHome] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  const [bgClass, setBgClass] = useState('bg-white');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgClass('bg-white bg-opacity-100 backdrop-blur shadow-2xl');
    } else {
      setBgClass('bg-white');
    }
  };

  useEffect(() => {
    if (!animationHasRun.current) {
      // GSAP animations for the header and logo
      gsap.fromTo(headerRef.current, {
        opacity: 0,
        y: -70,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });

      gsap.fromTo(logoRef.current, {
        opacity: 0,
        x: -60,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.out",
      });

      // GSAP animation for the nav links (staggered animation)
      if (linkRef.current.length > 0) {
        gsap.fromTo(linkRef.current, {
          opacity: 0,
          x: 70,
        }, {
          opacity: 1,
          x: 0,
          stagger: 0.15, // Stagger delay for each link
          duration: 0.4,
          ease: "power1.out",
        });
      }

      animationHasRun.current = true; // Mark the animation as having run
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this only runs once after the component mounts

  const handleLinkClick = () => {
    if (isOpen) {
      toggleNavbar();
      setDropdownHome(false);
      setDropdownServices(false);
    }
  };

  return (
    <section className={`text-black h-16 flex justify-center w-full items-center fixed z-50 transition-all duration-300 ${bgClass}`} ref={headerRef}>
      <div 
        className={`flex justify-between items-center max-w-800px w-[80%] max-2xl:w-[85%] max-xl:w-[90%] max-1075px:w-[95%] max-md:w-full gap-8 pl-20 max-sm:pl-4 pr-20 max-sm:pr-4 text-secondary`} 
      >
        <div className='max-lg:bg-white max-lg:rounded-2xl px-4 py-1' ref={logoRef}>
          <img src={CALogo} alt="CA Logo" className='w-20 h-14 rounded-2xl' />
        </div>

        <div className='flex gap-6'>
          <button 
            onClick={toggleNavbar} 
            className='lg:hidden p-2 bg-black w-10 rounded'>
            {isOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/> }
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className={`fixed -right-7 z-50 h-full max-sm:w-full w-4/5 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className='flex h-screen flex-col p-4 items-end gap-4 bg-navbarGradient border-l-2 border-customBlack pr-12'>
            <button onClick={toggleNavbar} className='self-end p-2 w-10 bg-black rounded mb-4 '><FontAwesomeIcon icon={faX} /></button>

            {/* Home with Dropdown */}
            <div className='flex flex-col'>
              <div className='flex gap-4 items-center justify-end'>
                <div className='pb-2'>
                  <button 
                    onClick={() => setDropdownHome(!dropdownHome)} 
                    className="mb-2 transition-transform duration-300"
                    style={{
                      transform: dropdownHome ? 'rotate(0deg)' : 'rotate(-90deg)',
                      transformOrigin: 'center',
                      display: 'inline-block',
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} color='white' style={{ transition: 'transform 0.3s ease' }} />
                  </button>
                </div>
                <Link to="/Jain-Jakhotiya/" onClick={handleLinkClick} className="relative group">
                  <button className='nav-link mb-2 text-white text-end text-2xl font-semibold'>Home</button>
                </Link>
              </div>
              {dropdownHome && (
                <div className="text-text text-xl text-end font-semibold mt-2">
                  <Link to="/Jain-Jakhotiya/aboutus" onClick={handleLinkClick} className="block py-2 px-2 hover:bg-menuItems transition-colors duration-200 rounded-lg">About Us</Link>
                </div>
              )}
            </div>
            {/* Services with Dropdown */}
            <div className='flex flex-col'>
              <div className='flex gap-4 items-center justify-end'>
                <div className='pb-2'>
                  <button 
                    onClick={() => setDropdownServices(!dropdownServices)} 
                    className="mb-2 transition-transform duration-300"
                    style={{
                      transform: dropdownServices ? 'rotate(0deg)' : 'rotate(-90deg)',
                      transformOrigin: 'center',
                      display: 'inline-block',
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} color='white' style={{ transition: 'transform 0.3s ease' }} />
                  </button>
                </div>
                <Link to="/Jain-Jakhotiya/services" onClick={handleLinkClick} className="relative group">
                  <button className='nav-link mb-2 text-white text-end text-2xl font-semibold'>Services</button>
                </Link>
              </div>
              {dropdownServices && (
                <div className="flex flex-col items-end text-xl font-semibold text-end text-text mt-2">
                  {['Income Tax', 'Goods & Service Tax(GST)', 'Audit', 'Corporate Services', 'Value Added Tax(VAT)', 'Service Tax', 'Corporate Finance', 'Accounting Services', 'Benefits Of Outsourcing', 'Corporate Governance'].map((service) => (
                    <Link 
                      key={service} 
                      to={`/Jain-Jakhotiya/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                      onClick={handleLinkClick} 
                      className="block py-2 hover:bg-menuItems transition-colors duration-200 rounded-lg">
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {['Blogs', 'Knowledge Hub', 'Our Clients', 'Contact'].map((link) => (
              <Link 
                key={link} 
                to={`/Jain-Jakhotiya/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                onClick={handleLinkClick} 
                className="nav-link mb-2 text-white text-end text-2xl font-semibold"
                ref={(el) => linkRef.current.push(el)}  // Reference each link element
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className='hidden items-center lg:flex lg:flex-row gap-8 text-xl max-xl:text-lg text-black font-medium max-lg:text-lg max-xl:gap-6 relative'>
          {/* Home Link with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownHome(true)}
            onMouseLeave={() => setDropdownHome(false)}
          >
            <Link to="/Jain-Jakhotiya/" onClick={handleLinkClick} className="relative group">
              <span className="relative inline-block text-base" ref={(el) => linkRef.current.push(el)}>
                Home
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownHome && (
              <div className="absolute left-1/2 mt-2 w-48 bg-navdropdown text-white shadow-2xl z-10 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                <Link to="/Jain-Jakhotiya/aboutus" onClick={handleLinkClick} className="block py-3 px-3 font-semibold text-base text-start hover:bg-white hover:text-black transition-colors duration-200">About Us</Link>
              </div>
            )}
          </div>

          {/* Services Link with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownServices(true)}
            onMouseLeave={() => setDropdownServices(false)}
          >
            <Link to="/Jain-Jakhotiya/services" onClick={handleLinkClick} className="relative group">
              <span className="relative inline-block text-base" ref={(el) => linkRef.current.push(el)}>
                Services
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownServices && (
              <div className="absolute left-1/2 mt-2 w-64 bg-navdropdown text-white shadow-2xl z-50 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                {['Income Tax', 'Goods & Service Tax(GST)', 'Audit', 'Corporate Services', 'Value Added Tax(VAT)', 'Service Tax', 'Corporate Finance', 'Accounting Services', 'Benefits Of Outsourcing', 'Corporate Governance'].map((service) => (
                  <Link 
                    key={service} 
                    to={`/Jain-Jakhotiya/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                    onClick={handleLinkClick} 
                    className="block py-3 px-3 font-semibold hover:bg-white hover:text-black text-base text-start transition-colors duration-200 border-b border-text">
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {['Blogs', 'Knowledge Hub', 'Our Clients', 'Contact'].map((link) => (
            <Link 
              key={link} 
              to={`/Jain-Jakhotiya/${link.toLowerCase().replace(/\s+/g, '-')}`} 
              onClick={handleLinkClick} 
              className="relative group"
              ref={(el) => linkRef.current.push(el)}  // Reference each link element
            >
              <span className="relative inline-block text-base">
                {link}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
