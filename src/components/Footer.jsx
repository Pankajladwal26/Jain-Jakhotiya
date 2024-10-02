import React from 'react';
import { CALogo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faTwitterSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='h-10rem flex justify-center w-full max-lg:h-15rem'>
        <div className='flex justify-between items-center max-lg:justify-center max-w-800px w-[70%] max-lg:flex-col max-lg:gap-4'>
            <div className='flex gap-12 items-center max-lg:flex-col max-lg:gap-6'>
                <img className='max-lg:mr-[5%]' src={CALogo} alt="" width={70}/>
                
            </div>
            <p className='font-medium text-xl max-xl:text-lg'>Copyright © 2016 Jain Jakhotiya & Associates. <br className='xl:hidden max-lg:hidden'/> All rights reserved.</p>
            <div className='flex items-center justify-center gap-5'>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://x.com/madhujainwala11"><FontAwesomeIcon icon={faXTwitter} size='2x'/></a>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.facebook.com/madhusudan.jain.7/"><FontAwesomeIcon icon={faFacebook} size='2x' color='#316FF6'/></a>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="mailto:camadhusudan.jain@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='2x' color='#316FF6'/></a>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.linkedin.com/in/fca-madhusudan-jain-a2425317/"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#0077B5'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
