import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Audit = () => {
  return (
    <div className='flex justify-center w-full'>
    <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='mb-8'>
            <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Audit</h2>
            <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>In depth study of existing systems, procedures and controls for proper understanding. Suggestions for improvement and strengthening.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Ensuring compliance with policies, procedures and statutes.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Comprehensive review to ensure that the accounts are prepared in accordance with Generally Accepted Accounting Policies and applicable Accounting Standards/IFRS.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Checking the genuineness of the expenses booked in accounts.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Reporting inefficiencies at any operational level.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Detection and prevention of leakages of income and suggesting corrective measures to prevent recurrence.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Certification of the books of account being in agreement with the Balance Sheet and Profit and Loss Account.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Issue of  Audit Reports under various laws.</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>As per the Companies Act, 2013  under the Section 143(3)(i) of the Act to verify whether the company has adequate internal financial controls system in place and the operating effectiveness of such controls.</li>
            </ul>
        </div>
    </div>
</div>
)};

export default Audit;
