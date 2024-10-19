import React from 'react';
import { CompServices } from '../../assets';

const ComprehensiveServices = () => {
  return (
    <div 
        className='bg-contentbg flex justify-center items-center w-full h-[900px] mb-28'
        style={{
            backgroundImage: `url(${CompServices})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className='max-w-800px w-[80%] max-md:w-[90%] max-sm:w-full flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center'>
            <div className='pt-4 pl-6 max-xl:h-2/3 flex flex-col items-start max-xl:justify-start gap-8 flex-wrap mb-6 max-xl:mb-10'>
                <h1 className='text-customBlack font-bold text-5xl max-sm:text-4xl mb-2'>Our <span className='text-buttonBlue'>Comprehensive </span> Services</h1>
                <div className='flex flex-col justify-center items-start gap-[6px] mb-3'>
                    <span className='block h-[1px] w-12 bg-customBlack'></span>
                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                </div>
                <div className='grid grid-cols-2 gap-16 text-xl max-sm:text-lg max-md:grid-cols-1 max-md:gap-8'>
                    <div><p className='text-black font-semibold'>Audit & Assurance Services</p></div>
                    <div><p className='text-black font-semibold'>Taxation and Legal Compliance</p></div>
                    <div><p className='text-black font-semibold'>Corporate Advisory and International Taxation</p></div>
                    <div><p className='text-black font-semibold'>Accountancy Services</p></div>
                    <div><p className='text-black font-semibold'>Project Appraisal & Financing</p></div>
                    <div><p className='text-black font-semibold'>Business Advisory Services</p></div>

                </div>
            </div>
        </div>
    </div>
)};

export default ComprehensiveServices;
