import React from 'react'
import { CALogo, facebook, gmail, twitter } from '../assets'

const Footer = () => {
  return (
    <div className='bg-gray-400 h-10rem flex items-center max-lg:h-15rem'>
        <div className='flexCenter innerWidth max-lg:flex-col max-lg:gap-4'>
            <div className='flex ml-[5%] gap-12 items-center max-lg:flex-col max-lg:gap-6'>
                <img className='max-lg:mr-[5%]' src={CALogo} alt="" width={70}/>
                <p className='font-medium text-xl max-xl:text-lg'>Copyright © 2016 Jain Jakhotiya & Associates. All rights reserved.</p>
            </div>
            <div className='flex items-center justify-end gap-3 mr-[5%] max-lg:mr-0'>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://x.com/madhujainwala11"><img src={twitter} alt="" width={45}/></a>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="https://www.facebook.com/madhusudan.jain.7/"><img src={facebook} alt="" width={45}/></a>
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-125' href="mailto:camadhusudan.jain@gmail.com"><img src={gmail} alt="" width={45}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
