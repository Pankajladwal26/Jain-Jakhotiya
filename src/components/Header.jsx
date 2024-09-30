import React, { useState } from 'react';
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='text-white h-20 flex justify-center items-center w-full fixed top-0 left-0 z-40 bg-white/0 backdrop-blur-md'>
      <div className='flex justify-between items-center max-w-800px w-[88%] gap-8 pt-4 pb-4 text-secondary 2xl:gap-30rem'>
        <img src={CALogo} alt="CA Logo" width={100} />

        {/* Navbar Toggler */}
        <button 
          onClick={toggleNavbar} 
          className='lg:hidden p-2 bg-blue w-10 rounded'>
          {isOpen ? <FontAwesomeIcon icon={faBars}/>  : <FontAwesomeIcon icon={faBars}/>}
        </button>

        {/* Side Panel */}
        <div className={`fixed top-0 right-0 z-50 h-full w-4/5 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className='flex h-screen flex-col p-4 items-end gap-4 bg-navbarGradient border-l-2 border-customBlack pr-11'>
            <button onClick={toggleNavbar} className='self-end p-2 w-10 bg-blue rounded mb-4 '><FontAwesomeIcon icon={faX} /></button>
            <a href="" className='mb-2 text-h2 text-2xl font-semibold'>Home</a>
            <a href="" className='mb-2 text-h2 text-2xl font-semibold'>Services</a>
            <a href="" className='mb-2 text-h2 text-2xl font-semibold'>Blogs</a>
            <a href="" className='mb-2 text-h2 text-2xl font-semibold'>Hub</a>
            <a href="" className='mb-2 text-h2 text-2xl font-semibold'>Our Clients</a>
            <button className='button'>
              <a href="">Contact</a>
            </button>
          </div>
        </div>

        {/* Regular Nav Links */}
        <div className='hidden lg:flex lg:flex-row gap-8 text-xl text-blue font-medium max-lg:text-lg max-xl:gap-6'>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Blogs</a>
          <a href="">Knowledge Hub</a>
          <a href="">Our Clients</a>
          <button className='button -mt-3'>
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
