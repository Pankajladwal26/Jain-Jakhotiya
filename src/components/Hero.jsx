import React from 'react';

const Hero = () => {
  return (
    <div className='text-white relative p-6 pt-24 pb-12'>
      <div className="pt-4 flex gap-4 flex-wrap justify-evenly items-center xl:flex-row mt-[10%]">
          <div className='flex flex-col items-center justify-center gap-12 max-md:order-2'>
              <h1 className='relative h1 text-center font-semibold text-5xl max-sm:text-4xl leading-4rem z-20'>Discover <br /><span className='text-6xl max-sm:text-5xl text-green font-bold'> Jain Jakhotiya & Associates</span></h1>
            <div className='flex flex-col text-xl items-center text-center justify-center max-sm:hidden'>
              <span className=''>Elevate your growth with our tailored solutions and expert support.</span>
              <span className=''>We understand your unique challenges and are committed to your lasting success.</span>
            </div>
            <div className='flex flex-col sm:hidden text-center'>
              <span className=''>We're dedicated to your success.</span>
              <span className=''>Boost your growth with our expert solution.</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero;