import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const IncomeTax = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Income Tax</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Allotment of Permanent Account number (PAN)  & TAN </li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Tax planning for individuals, Corporates, Trust, Cooperative Society, Partnership firm , LLP</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Obtaining Advance Rulings on debatable issues.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Consultancy / advice on FEMA/RBI matters.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Filing Income Tax / Wealth Tax Returns for all type of assessees.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Advice on making investments.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Issuing certificate for repatriation of income / assets from India.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Making application to RBI for various matters including sale and purchase of residential and commercial properties.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Tax Audit.</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default IncomeTax;
