import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHome, setDropdownHome] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  const [bgClass, setBgClass] = useState('bg-transparent');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgClass('bg-black bg-opacity-75 backdrop-blur');
    } else {
      setBgClass('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`text-white h-20 flex justify-center items-center w-full fixed top-0 left-0 z-40 transition-all duration-300 ${bgClass}`}>
      <div className='flex justify-between items-center max-w-800px w-[70%] max-2xl:w-[75%] max-xl:w-[80%] max-lg:w-[90%] gap-8 pt-4 pb-4 text-secondary'>
        <img src={CALogo} alt="CA Logo" width={100} />

        {/* Navbar Toggler */}
        <button 
          onClick={toggleNavbar} 
          className='lg:hidden p-2 bg-black w-10 rounded'>
          {isOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
        </button>

        {/* Side Panel */}
        <div className={`fixed top-0 right-0 z-50 h-full w-4/5 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className='flex h-screen flex-col p-4 items-end gap-4 bg-navbarGradient border-l-2 border-customBlack pr-11'>
            <button onClick={toggleNavbar} className='self-end p-2 w-10 bg-black rounded mb-4 '><FontAwesomeIcon icon={faX} /></button>
            <Link to="/Jain-Jakhotiya/" className='nav-link mb-2 text-white text-2xl font-semibold'>Home</Link>
            <Link to="/Jain-Jakhotiya/services" className='nav-link mb-2 text-white text-2xl font-semibold'>Services</Link>
            <Link to="/Jain-Jakhotiya/blogs" className='nav-link mb-2 text-white text-2xl font-semibold'>Blogs</Link>
            <Link to="/Jain-Jakhotiya/hub" className='nav-link mb-2 text-white text-2xl font-semibold'>Hub</Link>
            <Link to="/Jain-Jakhotiya/clients" className='nav-link mb-2 text-white text-2xl font-semibold'>Our Clients</Link>
            <Link to="/Jain-Jakhotiya/contact" className='nav-link mb-2 text-white text-2xl font-semibold'>Contact</Link>
          </div>
        </div>

        {/* Regular Nav Links */}
        <div className='hidden lg:flex lg:flex-row gap-8 text-xl max-xl:text-lg text-white font-medium max-lg:text-lg max-xl:gap-6 relative'>
          {/* Home Link with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownHome(true)}
            onMouseLeave={() => setDropdownHome(false)}
          >
            <Link to="/Jain-Jakhotiya/" className="relative group">
              <span className="relative inline-block">
                Home
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownHome && (
              <div className="absolute left-1/2 mt-2 w-48 bg-dropdown text-black rounded-lg shadow-lg z-10 pr-4 pl-4 pt-4 pb-2 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-dropdown transform -translate-x-1/2" />
                <Link to="/Jain-Jakhotiya/aboutus" className="block py-2 px-2 hover:bg-menuItems transition-colors duration-200 rounded-lg">About Us</Link>
              </div>
            )}
          </div>

          {/* Services Link with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownServices(true)}
            onMouseLeave={() => setDropdownServices(false)}
          >
            <Link to="/Jain-Jakhotiya/services" className="relative group">
              <span className="relative inline-block">
                Services
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownServices && (
              <div className="absolute left-1/2 mt-2 w-64 bg-dropdown text-black rounded-lg shadow-lg z-10 pr-4 pl-4 pt-4 pb-2 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-dropdown transform -translate-x-1/2" />
                {['Income Tax', 'Goods & Service Tax(GST)', 'Audit', 'Corporate Services', 'Value Added Tax(VAT)', 'Service Tax', 'Corporate Finance', 'Accounting Services', 'Benefits Of Outsourcing', 'Corporate Governance'].map((service) => (
                  <Link key={service} to={`/Jain-Jakhotiya/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="block py-2 px-2 hover:bg-menuItems transition-colors duration-200 rounded-lg">
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {['Blogs', 'Knowledge Hub', 'Our Clients', 'Contact'].map((link) => (
            <Link key={link} to={`/Jain-Jakhotiya/${link.toLowerCase().replace(/\s+/g, '-')}`} className="relative group">
              <span className="relative inline-block">
                {link}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
