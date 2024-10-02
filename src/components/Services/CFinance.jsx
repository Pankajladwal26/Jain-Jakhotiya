import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const CFinance = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Corporate Finance</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>GPreparations of Project Reports.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Preparation of CMA data for bank loans.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Private placement of shares, Inter-Corporate Deposit, Terms loans, working capital limits, etc.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>External Credit Borrowings (ECBs).</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default CFinance;
