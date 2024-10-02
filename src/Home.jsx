import React from 'react'
import Intro from './components/Home/Intro';
import BlogCarousel from './components/Home/BlogCarousel';
import ComprehensiveServices from './components/Home/ComprehensiveServices';
import Vision from './components/Home/Vision';
import Mission from './components/Home/Mission';
import Values from './components/Home/Values';
import Performance from './components/Home/Performance';

const Home = () => {
  return (
    <div className='home'>
          <Intro />
          <BlogCarousel />
          <ComprehensiveServices />
          <Vision />
          <Performance />
          <Mission />
          <Values />
        </div>
  )
}

export default Home;
