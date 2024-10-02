import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const VAT = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Value Added Tax (VAT)</h2>
                <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Getting Sales Tax Registration under Central Sales Tax Act and MVAT.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Consultancy on matters related to Sales Tax including Tax planning.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Preparation of VAT (Value Added Tax) returns.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Filing of Electronic/Manual VAT returns.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Help in obtaining statutory forms.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Liaison with VAT authorities.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Getting Sales Tax Assessments done.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Filing and pleading appeals wherever necessary.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Consultancy on matters related to Maharashtra Value Added Tax.</li>
                    <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>MVAT Audit</li>
                </ul>
            </div>
        </div>
    </div>
)};

export default VAT;
