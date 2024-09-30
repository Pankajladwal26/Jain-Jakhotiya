import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Links from './components/Links';

function App() {
  return (
    <div className='relative overflow-x-clip'>
      <div className='bg-customBlack relative'>
        <div className='absolute w-20rem h-20rem bg-whiteGradient blur-100 rounded-full'/>
        <Header />
        <Hero />
      </div>
      <Content />
      <hr />
      <Links/>
      <Footer />
    </div>
  )
}

export default App

