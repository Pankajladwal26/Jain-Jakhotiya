import React from 'react';
import { CompServices } from '../../assets';

const ComprehensiveServices = () => {
  return (
    <div className='bg-contentbg flex justify-center items-center w-full mb-28'>
        <div className='max-w-800px w-[70%] max-md:w-[90%] flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center'>
            <div className="w-1/2 max-xl:w-2/3 max-xl:h-1/3">
                <img src={CompServices} alt="" className='w-full' />
            </div>
            <div className='bg-contentbg pt-4 pl-6 w-1/2 max-xl:w-full max-xl:h-2/3 flex flex-col items-start max-xl:justify-start gap-4 flex-wrap mb-6 max-xl:mb-10'>
                <h1 className='text-customBlack font-semibold text-3xl mb-2'>Our Comprehensive Services</h1>
                <div className='flex flex-col justify-center items-start gap-[6px] mb-3'>
                    <span className='block h-[1px] w-12 bg-customBlack'></span>
                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                </div>
                <div className='grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-8'>
                    <div><p className='text-text font-semibold'>Audit & Assurance Services</p></div>
                    <div><p className='text-text font-semibold'>Taxation and Legal Compliance</p></div>
                    <div><p className='text-text font-semibold'>Corporate Advisory and International Taxation</p></div>
                    <div><p className='text-text font-semibold'>Accountancy Services</p></div>
                    <div><p className='text-text font-semibold'>Project Appraisal & Financing</p></div>
                    <div><p className='text-text font-semibold'>Business Advisory Services</p></div>

                </div>
            </div>
        </div>
    </div>
)};

export default ComprehensiveServices;
