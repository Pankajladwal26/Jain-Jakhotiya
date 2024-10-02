import React from 'react';

const Vision = () => {
  return (
    <div className='flex justify-center w-full mb-28'>
        <div className='pt-4 max-w-800px w-[70%] flex flex-col items-center gap-4 flex-wrap'>
            <div className='self-center flex flex-col items-center justify-center mb-8'>
                <h1 className='text-customBlack font-bold text-5xl mb-4'>Our Vision</h1>
                <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
                    <span className='block h-[1px] w-12 bg-customBlack'></span>
                    <span className='block h-[1px] w-8 bg-customBlack'></span>
                    <span className='block h-[1px] w-4 bg-customBlack'></span>
                </div>
                <p className='text-xl text-text text-center'>We aim to empower businesses and individuals to effectively manage compliance risks. By offering tailored auditing and 
                accountancy services, we help our clients thrive in an ever-evolving business environment. Our ultimate goal is to create lasting value for both our clients 
                and employees, grounded in their satisfaction and success.</p>
            </div>
        </div>
    </div>
)};

export default Vision;
