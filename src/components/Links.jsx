import React from 'react'
import { Blog1, Blog2, services } from '../assets'

const Links = () => {
  return (
    <div className='mb-16 mt-10 flex justify-center w-full'>
        <div className='max-w-800px w-[80%] flex justify-evenly items-center gap-10 max-lg:flex-col max-lg:items-start text-text'>
            <div className='flex flex-col w-1/3 max-lg:w-full'>
                <h1 className='text-3xl font-semibold text-orange'>News</h1>
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
                <h1 className='text-3xl font-semibold text-orange'>Services</h1>
                <br />
                <img className='rounded-xl w-[80%] max-xl:h-24 max-lg:w-fit' src={services} alt=""/>
                <br />
                <ul className='flex flex-col gap-2 ml-4'>
                    <li>Value Added Tax (VAT)</li>
                    <li>Service Tax</li>
                    <li>Corporate Services</li>
                    <li>Audit</li>
                </ul>
            </div>

            <div className='flex flex-col w-1/3 max-lg:w-full'>
                <h1 className='text-3xl font-semibold text-orange'>Blogs</h1>
                <br />
                <br />
                <div className='flex flex-row gap-5'>
                    <div>
                        <img className='rounded-lg w-full' src={Blog1} alt=""/>
                    </div>
                    <div>
                        <p className='mb-2 text-lg'>GST ENROLLMENT</p>
                        <p className='text-sm'>Provisional registration to existing tax payers:- Every person who is | <span className='text-h2'>Read more...</span></p>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='flex flex-row gap-5'>
                    <div>
                        <img className='rounded-lg w-[80%]' src={Blog2} alt="" />
                    </div>
                    <div>
                        <p className='mb-2 text-lg'>Filing of ST -3 Half yearly return 2016-17- Need some correction</p>
                        <p className='text-sm'>While the assessee logs in the ACES site for filing the Service tax Return of | <span className='text-h2'>Read more...</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Links
