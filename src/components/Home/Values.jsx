import React from 'react';

const Content = () => {
  return (
    <div className='flex justify-center w-full mb-16'>
      <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='flex flex-col items-center justify-center mb-8'>
          <h1 className='text-customBlack font-bold text-5xl mb-4'>Our <span className='text-buttonBlue'> Values</span></h1>
          <div className='flex flex-col justify-center items-center mt-3 gap-[6px] mb-10'>
            <span className='block h-[1px] w-12 bg-customBlack'></span>
            <span className='block h-[1px] w-8 bg-customBlack'></span>
            <span className='block h-[1px] w-4 bg-customBlack'></span>
          </div>
          <div className='w-full p-4 flex justify-evenly items-center max-md:flex-col max-md:items-start gap-8'>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Commitment to Quality</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Upholding the highest standards in all we do.</p>
            </div>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Integrity and Trust</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Building relationships through honesty and reliability.</p>
            </div>
            <div>
              <p className='text-customBlack text-xl font-semibold'>Passion and Engagement</p>
              <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                <span className='block h-[1px] w-12 bg-customBlack'></span>
                <span className='block h-[1px] w-6 bg-customBlack'></span>
              </div>
              <p className="text-text">Cultivating a motivated and dedicated team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
