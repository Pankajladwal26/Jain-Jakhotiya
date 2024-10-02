import React from 'react';
import { Performancebg } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Performance = () => {
  return (
    <div className='flex justify-center h-[350px] max-md:h-[800px] items-center w-full' 
    style={{ 
        backgroundImage: `url(${Performancebg})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat' 
      }}>
        <div className='pt-4 max-w-800px w-[70%] max-lg:w-[90%] mb-4'>
            <div className='flex justify-between max-md:flex-col max-md:gap-14 items-center'>
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faLightbulb} className='max-md:text-4xl' size='5x' color='white'/>
                    <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6'>1234</p>
                    <p className='text-white text-center font-bold text-xl'>Entrepreneurs <br className='xl:hidden max-md:hidden'/> Served</p>
                </div>
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faHandshake} className='max-md:text-4xl' size='5x' color='white'/>
                    <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6'>123</p>
                    <p className='text-white text-center font-bold text-xl'>Professionals <br className='xl:hidden max-md:hidden'/> Network</p>
                </div>
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faCity} className='max-md:text-4xl' size='4x' color='white'/>
                    <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6'>12</p>
                    <p className='text-white text-center font-bold text-xl'>Cities <br className='xl:hidden max-md:hidden'/> Present</p>
                </div>
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faNetworkWired} className='max-md:text-4xl' size='4x' color='white'/>
                    <p className='text-white text-center font-bold text-4xl max-md:text-3xl mt-6'>28</p>
                    <p className='text-white text-center font-bold text-xl'>Team <br className='xl:hidden max-md:hidden'/> Strength</p>
                </div>
            </div>
        </div>
    </div>
)};

export default Performance;
