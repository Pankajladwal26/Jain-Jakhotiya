import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Clients = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
            <div className='mb-8'>
                <h2 className='text-h2 font-bold text-5xl mb-8'>Clients and Relevant Work Experience</h2>
                <p className='text-text text-xl font-medium mb-8'>The firm has worked for various clients small and large belonging to the following industry verticals either directly or through its management team.</p>
                <div className='w-4/5 max-2xl:w-full flex justify-between gap-[5%] max-lg:flex-col max-lg:gap-2'>
                    <ul className='text-text text-lg list-none ml-2 flex flex-col gap-2'>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Construction and Real Estate</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Beauty and Health Care</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Pharmacy manufacturers and dealers</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Medical Professionals</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Manufacturers and traders</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Foundry Business</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Agro based industry</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Packaging Industries</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Transport and Fleet Owners</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Financials advisory Companies</li>
                    </ul>

                    <ul className='text-text text-lg list-none ml-2 flex flex-col gap-2'>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Engineering and Auto Industry</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Travel And Tourism</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Works contract Industry & Tower erection</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Cloth merchants</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Commodity Wholesale Dealers</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Ready mix food industry</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Charitable Organizations</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Software companies</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Stock Audit</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Fixed Assets Audit</li>
                        <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Housing Society Audit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients
