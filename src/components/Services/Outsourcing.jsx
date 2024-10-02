import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Outsourcing = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Benefits of Outsourcing</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Enables business to concentrate on core business activities.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Use of manpower for more important functions.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Investment in fixed assets reduced/minimized.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Substantial Savings in Cost.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Services of experts made available.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Improved Internal Controls.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Enhanced reporting capabilities to provide more timely and accurate financial data.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Off-site Backup of Data.</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default Outsourcing;
