import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const GST = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Goods & Service Tax(GST)</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Registration under Good & Service Tax (GST)</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Consultancy on matters related to GST.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Preparation & Filing of GST returns.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>GST Audit</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Liaison with GST authorities</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Getting GST assessments done</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Filing and pleading appeals wherever necessary</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default GST;
