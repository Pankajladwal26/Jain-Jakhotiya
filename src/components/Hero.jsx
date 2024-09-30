import React from 'react'
import { HeroImage, HeroImage1, HeroImage2, HeroImage3 } from '../assets';

const Hero = () => {
  return (
    <div className='text-white relative mb-16 p-6 pt-24 pb-12'>
      <div className="pt-4 flex gap-4 flex-wrap justify-evenly items-center xl:flex-row">
          {/* Left Section */}
          <div className='flexColStart gap-12 max-md:order-2'>
              <div className='z-10 h-16 w-16 rounded-full bg-orange-400 absolute top-[17%] left-[25%]'/>
              <h1 className='relative h1 font-semibold text-6xl leading-4rem z-20 max-xl:text-5xl max-lg:text-4xl'>Discover <br/> Jain Jakhotiya <br/> & Associates</h1>
            <div className='flexColStart max-2xl:hidden'>
              <span className=''>Elevate your growth with our tailored solutions and expert support.</span>
              <span className=''>We understand your unique challenges and are committed to your lasting success.</span>
            </div>
            <div className='flexColStart 2xl:hidden'>
              <span className=''>We're dedicated to your success.</span>
              <span className=''>Boost your growth with our expert solution.</span>
            </div>
          </div>
          {/* Right Section */}
          <div className='flexCenter max-md:order-1'>
              <div className='w-40rem max-xl:w-30rem max-lg:w-22rem max-md:w-[100%] h-20rem max-xl:h-15rem max-lg:h-15rem overflow-hidden rounded-l-[15rem] rounded-r-[15rem] customBorder'>
                <img className='h-[100%] w-[100%]' src={HeroImage} alt="Hero Image" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero;