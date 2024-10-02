import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const CorporateGovernance = () => {
  return (
    <div className='flex justify-center w-full'>
    <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='mb-8'>
            <h2 className='text-h2 font-bold text-5xl mb-8 max-sm:text-4xl'>Corporate Governance</h2>
            <p className='text-text text-lg'>Corporate governance refers to a combination of laws, regulations, procedures, implicit rules and voluntary 
                practices which help companies to perform efficiently and maximize long term value for shareholders and at the same time looking after the 
                interests of other stakeholders like buyers, government, society at large etc. Lenders whether national or international, also look for them 
                for taking exposure in any corporate. It is a function of transparency and fairness in operations and making proper disclosures. Company as 
                a business organization has become popular over the years.With the growth in size of these corporates, governance has become all the more 
                important. SEBI and listing agreements of various stock exchanges require that the requirements of corporate governance are duly complied with.</p>
            <p className='text-text text-xl font-semibold'>Our services include:-</p>
            <ul className='text-text text-xl list-none ml-2 flex flex-col gap-2'>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Periodic monitoring through internal audit</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Independent audit</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Independent verification</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Effective Supervision</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Accountability</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Sufficient number of Independent directors on the Board</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Formation of an independent audit committee for the board</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Adequate disclosure and transparency in reports</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Participation in board meetings</li>
                <li><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-4' color='#1f3e72'/></span>Direct and Indirect tax compliance</li>
            </ul>
        </div>
    </div>
</div>
)};

export default CorporateGovernance;
