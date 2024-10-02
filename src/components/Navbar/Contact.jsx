import React from 'react';

const Contact = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-12'>
            <div className="flex justify-between mr-10 ml-10 max-lg:flex-col max-lg:ml-0 max-lg:mr-0 max-lg:gap-2">
                <div className='flex flex-col gap-2'>
                    <p className='text-customBlack text-5xl font-bold'>Contact Us</p>
                </div>
                <div>
                    <div className='flex flex-col gap-2 mb-6'>
                        <p className='text-customBlack text-xl font-bold'>Head Office:</p>
                        <ul className='text-text text-lg list-none'>
                            <li>F-12, 4th floor,</li>
                            <li>Butte Patil Towers,</li>
                            <li>LBS Road, Ganjawe Chowk,</li>
                            <li>Pune - 411030</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 mb-6'>
                        <p className='text-customBlack text-xl font-bold'>Branch Office:</p>
                        <ul className='text-text text-lg list-none'>
                            <li>A-205, Bhalchandra Nagari</li>
                            <li>S. No. 153/3, Pipeline Road</li>
                            <li>Ravet, Pune - 411 033</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 mb-6'>
                        <p className='text-customBlack text-xl font-bold'>City Office:</p>
                        <ul className='text-text text-lg list-none'>
                            <li>Rainbow Plaza,209-D IInd Floor Shivar Garden Chowk,</li>
                            <li>Rahatani, Pune -411017</li>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-customBlack text-xl font-bold mt-8'>Mail</p>
                        <ul className='text-text text-lg list-none'>
                            <a href="mailtocajakhotiya@gmail.com"><li>cajakhotiya@gmail.com</li></a>
                            <a href="mailtocamadhusudan.jain@gmail.com"><li>camadhusudan.jain@gmail.com</li></a>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-customBlack text-xl font-bold mt-8'>Phone</p>
                        <ul className='text-text text-lg list-none'>
                            <li>+91 - 94045 - 00030 / +91 - 98238 - 23251</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
