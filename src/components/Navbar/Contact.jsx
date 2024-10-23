import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);
    const officeRef = useRef(null);
    const animationHasRun = useRef(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    useEffect(() => {
        if (!animationHasRun.current) {
            const formChildren = formRef.current.children;
            const officeChildren = officeRef.current.children;

            // Animate office elements from right to left
            gsap.fromTo(
                officeChildren,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: officeRef.current,
                        start: 'top 80%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            // Animate form elements from left to right
            gsap.fromTo(
                formChildren,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%', // Animation starts when the grid is 80% from the top
                        once: true, // Animation happens only once
                    }
                }
            );

            animationHasRun.current = true;
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
    };
    
    const handleClear = () => {
        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <div className='flex justify-center w-full'>
            <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-12'>
                <div className="flex justify-between gap-28 mr-10 ml-10 max-lg:flex-col max-lg:ml-0 max-lg:mr-0 max-lg:gap-24">
                    <div className='lg:w-2/3 flex flex-col gap-2' ref={formRef}>
                        <p className='text-buttonBlue text-5xl font-bold mb-12'>Contact Us</p>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-8 w-[50%] max-2xl:w-[70%] max-lg:w-[50%] max-sm:w-[80%]'>
                                <label>
                                    <p className='text-3xl text-customBlack font-semibold mb-3'>Name</p>
                                    <input type="text" className='text-text p-2 w-full border-[2px] rounded-lg' placeholder='Enter Your Name' name="name" value={formData.name} onChange={handleChange} required />
                                </label>
                            </div>
                            <div className='mb-8 w-[50%] max-2xl:w-[70%] max-lg:w-[50%] max-sm:w-[80%]'>
                                <label>
                                    <p className='text-3xl text-customBlack font-semibold mb-3'>Email</p>
                                    <input type="email" className='text-text p-2 w-full border-[2px] rounded-lg' placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange} required />
                                </label>
                            </div>
                            <div className='mb-8'>
                                <label>
                                    <p className='text-3xl text-customBlack font-semibold mb-3'>Message</p> 
                                    <textarea name="message" className='h-44 text-text p-2 w-full border-[2px] rounded-lg' placeholder='Enter Your Message' value={formData.message} onChange={handleChange} required />
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <button type="submit" className='border-2 border-buttonBlue text-buttonBlue p-2 text-xl font-semibold transition-transform duration-2000 hover:scale-110 hover:bg-buttonBlue hover:text-white'>Submit</button>
                                <button type="button" className='border-2 border-buttonBlue text-buttonBlue p-2 text-xl font-semibold transition-transform duration-2000 hover:scale-110 hover:bg-buttonBlue hover:text-white' onClick={handleClear}>Clear Form</button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:w-1/3' ref={officeRef}>
                        <div className='flex flex-col gap-2 mb-6'>
                            <p className='text-buttonBlue text-xl font-bold'>Head Office:</p>
                            <ul className='text-text text-lg list-none'>
                                <li>F-12, 4th floor,</li>
                                <li>Butte Patil Towers,</li>
                                <li>LBS Road, Ganjawe Chowk,</li>
                                <li>Pune - 411030</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 mb-6'>
                            <p className='text-buttonBlue text-xl font-bold'>Branch Office:</p>
                            <ul className='text-text text-lg list-none'>
                                <li>A-205, Bhalchandra Nagari</li>
                                <li>S. No. 153/3, Pipeline Road</li>
                                <li>Ravet, Pune - 411 033</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 mb-6'>
                            <p className='text-buttonBlue text-xl font-bold'>City Office:</p>
                            <ul className='text-text text-lg list-none'>
                                <li>Rainbow Plaza,209-D IInd Floor Shivar Garden Chowk,</li>
                                <li>Rahatani, Pune -411017</li>
                            </ul>
                        </div>
                        <hr />
                        <div className='flex flex-col gap-2 mb-8'>
                            <p className='text-buttonBlue text-xl font-bold mt-8'>Mail</p>
                            <ul className='text-text text-lg list-none'>
                                <a href="mailto:cajakhotiya@gmail.com"><li>cajakhotiya@gmail.com</li></a>
                                <a href="mailto:camadhusudan.jain@gmail.com"><li>camadhusudan.jain@gmail.com</li></a>
                            </ul>
                        </div>
                        <hr />
                        <div className='flex flex-col gap-2 mb-8'>
                            <p className='text-buttonBlue text-xl font-bold mt-8'>Phone</p>
                            <ul className='text-text text-lg list-none'>
                                <li>+91 - 94045 - 00030 / +91 - 98238 - 23251</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
