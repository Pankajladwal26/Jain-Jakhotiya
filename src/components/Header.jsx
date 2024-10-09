import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars, faCaretDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import UserProfile from './user/UserProfile';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHome, setDropdownHome] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  const [bgClass, setBgClass] = useState('bg-transparent');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track user login status

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgClass('bg-text bg-opacity-75 backdrop-blur');
    } else {
      setBgClass('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Check if user is logged in when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    if (isOpen) {
      toggleNavbar();
      setDropdownHome(false);
      setDropdownServices(false);
    }
  };

  // Function to handle logout (to update the state, clear token, and refresh the page)
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    setIsLoggedIn(false); // Update the login state
    window.location.reload(); // Reload the page to reset the application state
  };

  return (
    <section className={`text-white h-20 flex justify-center items-center w-full fixed top-0 left-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className='flex justify-between items-center max-w-800px w-[70%] max-2xl:w-[75%] max-xl:w-[80%] max-1075px:w-[85%] max-lg:w-[90%] gap-8 pt-4 pb-4 text-secondary'>
        <img src={CALogo} alt="CA Logo" width={100} />

        <div className='flex gap-6'>
          {/* Conditional rendering of Sign Up/Profile icon based on login state */}
          <div className='lg:hidden'>
            {isLoggedIn ? (
              <UserProfile setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
            ) : (
              <Link to="/Jain-Jakhotiya/login">
                <button className='bg-transparent text-white border-[2px] border-white font-semibold text-xl pr-2 pl-2 pt-1 pb-1'>
                  Sign Up
                </button>
              </Link>
            )}
          </div>

          <button 
            onClick={toggleNavbar} 
            className='lg:hidden p-2 bg-black w-10 rounded'>
            {isOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
          </button>
        </div>

        <div className={`fixed top-0 right-0 z-50 h-full w-4/5 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className='flex h-screen flex-col p-4 items-end gap-4 bg-navbarGradient border-l-2 border-customBlack pr-11'>
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
                className="nav-link mb-2 text-white text-end text-2xl font-semibold">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className='hidden items-center lg:flex lg:flex-row gap-8 text-xl max-xl:text-lg text-white font-medium max-lg:text-lg max-xl:gap-6 relative'>
          {/* Home Link with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownHome(true)}
            onMouseLeave={() => setDropdownHome(false)}
          >
            <Link to="/Jain-Jakhotiya/" onClick={handleLinkClick} className="relative group">
              <span className="relative inline-block">
                Home
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownHome && (
              <div className="absolute left-1/2 mt-2 w-48 bg-navdropdown text-white shadow-2xl z-10 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                <Link to="/Jain-Jakhotiya/aboutus" onClick={handleLinkClick} className="block py-4 px-4 font-semibold text-lg text-start hover:bg-white hover:text-black transition-colors duration-200">About Us</Link>
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
              <span className="relative inline-block">
                Services
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
            {dropdownServices && (
              <div className="absolute left-1/2 mt-2 w-64 bg-navdropdown text-white shadow-2xl z-10 transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-100 opacity-100">
                <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                {['Income Tax', 'Goods & Service Tax(GST)', 'Audit', 'Corporate Services', 'Value Added Tax(VAT)', 'Service Tax', 'Corporate Finance', 'Accounting Services', 'Benefits Of Outsourcing', 'Corporate Governance'].map((service) => (
                  <Link 
                    key={service} 
                    to={`/Jain-Jakhotiya/services/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                    onClick={handleLinkClick} 
                    className="block py-4 px-4 font-semibold hover:bg-white hover:text-black text-lg text-start transition-colors duration-200 border-b border-text">
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
              className="relative group">
              <span className="relative inline-block">
                {link}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </Link>
          ))}
          {/* Conditional rendering of Sign Up/Profile icon based on login state */}
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
          ) : (
            <Link to="/Jain-Jakhotiya/login">
              <button className='bg-transparent text-white border-[2px] border-white font-semibold text-xl pr-2 pl-2 pt-1 pb-1'>
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
