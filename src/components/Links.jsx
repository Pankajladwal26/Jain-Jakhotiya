import React from 'react';
import { Link } from 'react-router-dom';
import { Blog1, Blog2, services } from '../assets';

const Links = () => {
  return (
    <div className='pb-16 bg-contentbg pt-10 flex justify-center w-full'>
        <div className='max-w-800px w-[70%] max-md:w-[90%] flex justify-evenly items-center gap-10 max-lg:flex-col max-lg:items-start text-text'>
            <div className='flex flex-col w-1/3 max-lg:w-full'>
                <h1 className='text-3xl font-semibold text-customBlack'>News</h1>
                <br />
                <p className='mb-2 text-lg'>Existing 80 Lakhs AssesseesTo Transfer on GSTN w.e.f 8th November 2016...</p>
                <p className='text-sm'>Tuesday,25 October, 2016 | <span className='text-h2'>Read more...</span></p>
                <br />
                <hr />
                <br />
                <p className='mb-2 text-lg'>The issue before the High Court was:...</p>
                <p className='text-sm'>Tuesday, 4 September, 2018 | <span>Read more...</span></p>
            </div>

            <div className='flex flex-col w-1/3 max-lg:w-full'>
                <h1 className='text-3xl font-semibold text-customBlack'>Services</h1>
                <br />
                <Link to="/services"><img className='rounded-xl w-[80%] max-xl:h-24 max-lg:w-fit' src={services} alt=""/></Link>
                <br />
                <ul className='flex flex-col gap-2 ml-4'>
                    <Link to='/Jain-Jakhotiya/services/value-added-tax(vat)'><li>Value Added Tax (VAT)</li></Link>
                    <Link to='/Jain-Jakhotiya/services/service-tax'><li>Service Tax</li></Link>
                    <Link to='/Jain-Jakhotiya/services/corporate-services'><li>Corporate Services</li></Link>
                    <Link to='/Jain-Jakhotiya/services/audit'><li>Audit</li></Link>
                </ul>
            </div>
        </div>
    </div>
)};

export default Links;
