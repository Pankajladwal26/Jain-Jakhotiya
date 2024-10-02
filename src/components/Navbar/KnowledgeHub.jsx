import React from 'react';
import { pdfIcon } from '../../assets';

const KnowledgeHub = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-12'>
            <div className='mb-6'>
                <h2 className='text-customBlack font-bold text-5xl mb-8'>Knowledge Hub</h2>
            </div>
            <div className="flex justify-between mr-10 ml-10 max-lg:flex-col max-lg:ml-0 max-lg:mr-0 max-lg:gap-2">
                <div className='flex flex-col gap-2'>
                    <p className='text-text text-2xl font-semibold'>Firm Profile</p>
                    <img src={pdfIcon} alt="" width={40}/>
                    <a href="" className='text-blue underline mb-8'>Download</a>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-text text-xl font-semibold'>Tax Calendars</p>
                        <ul className='text-text text-lg list-disc'>
                        <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Coming Soon </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-text text-xl font-semibold'>Registration checklists</p>
                        <ul className='text-text text-lg list-disc'>
                        <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Coming Soon </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-text text-xl font-semibold'>Other checklists</p>
                        <ul className='text-text text-lg list-disc'>
                        <li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Coming Soon </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-text text-2xl font-semibold'>Important Links</p>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-text text-xl font-semibold'>e-Payments</p>
                        <ul className='text-blue underline text-lg list-disc'>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Income Tax, TDS, etc</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Maha VAT / CST / PT</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Excise & Service Tax</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Provident Fund (PF)</li></a>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-text text-xl font-semibold'>Other</p>
                        <ul className='text-blue underline text-lg list-disc'>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Know Your PAN</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Know Your TAN</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>TDS (26AS) - Tax Credit</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>MahaVAT Rates Schedule</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>MahaVAT - Other rates</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Know Your TIN</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Master Data - Company</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Master Data - LLP</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Income Tax - Refund Status</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>Anything else @ Google</li></a>
                            <a href=""><li className='flex gap-4 items-center'>
                            <span>
                                <div className='flex flex-col justify-center items-start mt-3 gap-[6px] mb-3'>
                                <span className='block h-[1px] w-8 bg-customBlack'></span>
                                <span className='block h-[1px] w-6 bg-customBlack'></span>
                                <span className='block h-[1px] w-4 bg-customBlack'></span>
                                </div>
                            </span>GST</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KnowledgeHub
