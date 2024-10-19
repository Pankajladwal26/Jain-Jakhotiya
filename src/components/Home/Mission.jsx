import React from 'react';
import { Missionbg } from '../../assets';

const Mission = () => {
  return (
    <div 
        className='flex justify-center items-center w-full h-[900px] mb-28'
        style={{
            backgroundImage: `url(${Missionbg})`,
            backgroundPosition: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className='max-w-800px w-[80%] max-md:w-[90%] flex flex-row max-xl:flex-col max-xl:gap-12 gap-10 items-center justify-end'>
            <div className='flex justify-center flex-col items-end max-md:items-start w-full mb-28'>
                <h1 className='text-customBlack text-center self-center font-bold text-5xl'>Our <span className='text-buttonBlue'>Mission</span> </h1>
                <div className='flex flex-col self-center justify-center items-center mt-3 gap-[6px] pb-10'>
                    <span className='block h-[1px] w-12 bg-customBlack'></span>
                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                </div>
                <div className='max-xl:order-2 pt-4 pl-6 flex flex-col items-end justify-end gap-4 flex-wrap mb-6 max-xl:mb-10'>
                    <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-8'>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Quality Service</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Delivering excellence in every interaction.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Professional Ethics</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Upholding the highest standards of integrity and honesty.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Healthy Client Relationships</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Fostering trust and collaboration.</p>
                        </div>
                        <div>
                            <p className='text-customBlack text-2xl font-semibold'>Employee Satisfaction</p>
                            <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-12 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                            </div>
                            <p className="text-text text-lg">Valuing and supporting our team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Mission;