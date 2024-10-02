import React from 'react';
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="bg-footer text-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gridgum Section */}
          <div>
            <img src={CALogo} alt="CA Logo" width={70} className='mb-4'/>
            <p className="text-gray-400 mb-6">
              Jain Jakhotiya & Associates, founded in 2014, is a top Chartered Accountants firm in PCMC and Pune, specializing in auditing and taxation.
            </p>
            <div className="flex space-x-4">
              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://x.com/madhujainwala11"><FontAwesomeIcon icon={faXTwitter} size='2x' color='white'/></a>
              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.facebook.com/madhusudan.jain.7/"><FontAwesomeIcon icon={faFacebook} size='2x' color='white'/></a>
              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="mailto:camadhusudan.jain@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='2x' color='white'/></a>
              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.linkedin.com/in/fca-madhusudan-jain-a2425317/"><FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/></a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className='flex flex-col md:items-center'>
            <h4 className="text-xl font-semibold mb-4">Footer Menu</h4>
            <ul className="space-y-2">
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="/Jain-Jakhotiya/aboutus" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white">Online Support</a></li>
              <li><a href="/Jain-Jakhotiya/blogs" className="text-gray-400 hover:text-white">Our Blog</a></li>
              <li><a href="/Jain-Jakhotiya/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company Address</h4>
            <div className='flex gap-4 mb-2'>
              <div>
              <FontAwesomeIcon icon={faMap} size='1x' color='white'/>
              </div>
              <div>
                <p className="text-gray-400">F-12, 4th floor,</p>
                <p className="text-gray-400">Butte Patil Towers,</p>
                <p className="text-gray-400">LBS Road, Ganjawe Chowk,</p>
                <p className="text-gray-400">Pune - 411030</p>
              </div>
            </div>
            <div className='flex gap-4 mb-2'>
              <div>
              <FontAwesomeIcon icon={faPhone} size='1x' color='white'/>
              </div>
              <div>
                <p className="text-gray-400">+91 - 94045 - 00030 / +91 - 98238 - 23251</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div>
              <FontAwesomeIcon icon={faEnvelope} size='1x' color='white'/>
              </div>
              <div>
                <p className="text-gray-400">cajakhotiya@gmail.com</p>
                <p className="text-gray-400">camadhusudan.jain@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className='border-white'/>
      <div className="mt-8 text-center">
        <p className="text-gray-400">Copyright © 2016 Jain Jakhotiya & Associates. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
