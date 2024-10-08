import React from 'react';
import { Missionbg } from '../../assets';

const Mission = () => {
  return (
    <>
        <div className="bg-contentbg pt-36">
            <h1 className='text-customBlack text-center font-semibold text-5xl'>Our Mission</h1>
            <div className='flex flex-col justify-center items-center mt-3 gap-[6px] pb-10'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-8 bg-customBlack'></span>
                <span className='block h-[1px] w-4 bg-customBlack'></span>
            </div>
        </div>
        <div className='bg-contentbg flex justify-center items-center w-full mb-28'>
            <div className='max-w-800px w-[70%] max-md:w-[90%] flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center'>
                <div className='bg-contentbg max-xl:order-2 pt-4 pl-6 w-2/3 max-xl:w-full max-xl:h-2/3 flex flex-col items-start max-xl:justify-start gap-4 flex-wrap mb-6 max-xl:mb-10'>
                    <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-8'>
                        <div>
                            <p className='text-customBlack text-xl font-semibold'>Quality Service</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text">Delivering excellence in every interaction.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-xl font-semibold'>Professional Ethics</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text">Upholding the highest standards of integrity and honesty.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-xl font-semibold'>Healthy Client Relationships</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text">Fostering trust and collaboration.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-xl font-semibold'>Employee Satisfaction</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text">Valuing and supporting our team.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 max-xl:w-[90%] max-xl:h-1/3">
                    <img src={Missionbg} alt="" className='w-full' />
                </div>
            </div>
        </div>
    </>
)};

export default Mission;