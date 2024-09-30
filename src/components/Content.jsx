import React from 'react';

const Content = () => {
  return (
    <div className='flex justify-center w-full'>
    <div className='pt-4 max-w-800px w-[80%] flex flex-col gap-4 flex-wrap mb-16'>
        <div className='self-center flex flex-col items-center justify-center mb-8'>
            <h1 className='text-orange font-semibold text-3xl self-start mb-4'>Your Trusted Partner in Financial Excellence</h1>
            <p className='text-lg text-text'><span className='text-xl font-semibold'>Established in 2014, Jain Jakhotiya & Associates,</span> is a premier firm of Chartered Accountants dedicated to delivering exceptional
            consulting, auditing, accounting, taxation, and allied services. With over a decade of experience, we pride ourselves on our commitment
            to excellence and integrity, serving a diverse clientele from our state-of-the-art offices in PCMC and Pune.</p>
        </div>

        <div className='mb-8'>
            <h2 className='text-h2 font-bold text-3xl mb-4'>Our Comprehensive Services</h2>
            <p className='text-text text-xl mb-2'><span className='text-xl font-semibold'>At Jain Jakhotiya & Associates,</span> we offer a wide range of specialized services, including:</p>
            <ul className='text-text text-lg list-disc ml-6 gap-2'>
                <li>Audit & Assurance Services</li>
                <li>Taxation and Legal Compliance</li>
                <li> Corporate Advisory and International Taxation</li>
                <li>Accountancy Services</li>
                <li>Project Appraisal & Financing</li>
                <li>Business Advisory Services</li>
                <li>Our experienced and qualified team is equipped to navigate the complexities of the financial landscape, ensuring that we provide the best 
                solutions to the challenges our clients face.</li>
            </ul>
        </div>

        <div className='self-center flex flex-col items-center justify-center mb-8'>
            <h1 className='text-h2 font-bold text-3xl self-start mb-4'>Our Vision</h1>
            <p className='text-lg text-text'>We aim to empower businesses and individuals to effectively manage compliance risks. By offering tailored auditing and 
            accountancy services, we help our clients thrive in an ever-evolving business environment. Our ultimate goal is to create lasting value for both our clients 
            and employees, grounded in their satisfaction and success.</p>
        </div>

        <div className='mb-8'>
            <h2 className='text-orange font-bold text-3xl mb-4'>Our Comprehensive Services</h2>
            <ul className='text-text text-lg list-disc ml-6 gap-2'>
                <li><span className='text-h2 font-medium'>Quality Service :</span> Delivering excellence in every interaction.</li>
                <li><span className='text-h2 font-medium'>Professional Ethics :</span> Upholding the highest standards of integrity and honesty.</li>
                <li><span className='text-h2 font-medium'>Healthy Client Relationships :</span> Fostering trust and collaboration.</li>
                <li><span className='text-h2 font-medium'>Employee Satisfaction :</span> Valuing and supporting our team.</li>
                <li><span className='text-h2 font-medium'>Confident Leadership :</span> Guiding clients with expertise and insight.</li>
            </ul>
        </div>

        <div className='flex flex-col'>
            <h2 className='text-orange font-bold text-3xl mb-4'>Our Values</h2>
            <ul className='text-text text-lg list-disc ml-6 gap-2'>
                <li><span className='text-h2 font-medium'>Commitment to Quality:</span> Upholding the highest standards in all we do.</li>
                <li><span className='text-h2 font-medium'>Integrity and Trust:</span> Building relationships through honesty and reliability.</li>
                <li><span className='text-h2 font-medium'>Passion and Engagement:</span> Cultivating a motivated and dedicated team.</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Content;
