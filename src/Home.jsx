import React from 'react'
import Intro from './components/Intro';
import BlogCarousel from './components/BlogCarousel';
import ComprehensiveServices from './components/ComprehensiveServices';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Values from './components/Values';

const Home = () => {
  return (
    <div className='home'>
          <Intro />
          <BlogCarousel />
          <ComprehensiveServices />
          <Vision />
          <Mission />
          <Values />
        </div>
  )
}

export default Home;
