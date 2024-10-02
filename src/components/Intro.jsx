import React from 'react';

const Intro = () => {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] flex flex-col items-center gap-4 flex-wrap mb-16'>
            <h1 className='text-customBlack font-semibold text-3xl mb-2'>Your Trusted Partner in Financial Excellence</h1>
            <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-8 bg-customBlack'></span>
                <span className='block h-[1px] w-4 bg-customBlack'></span>
            </div>
            <p className='text-lg text-text'><span className='text-xl font-semibold'>Established in 2014, Jain Jakhotiya & Associates,</span> is a premier firm of Chartered Accountants dedicated to delivering exceptional
            consulting, auditing, accounting, taxation, and allied services. With over a decade of experience, we pride ourselves on our commitment
            to excellence and integrity, serving a diverse clientele from our state-of-the-art offices in PCMC and Pune.</p>
        </div>
    </div>
)};

export default Intro;
