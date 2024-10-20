import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Links from './components/Links';
import ScrollUp from './components/ScrollUp';
import AboutUs from './components/AboutUs';
import IncomeTax from './components/Services/IncomeTax';
import Services from './components/Navbar/Services';
import Clients from './components/Navbar/Clients';
import KnowledgeHub from './components/Navbar/KnowledgeHub';
import Blogs from './components/Navbar/Blogs';
import GST from './components/Services/GST';
import Audit from './components/Services/Audit';
import CorporateServices from './components/Services/CorporateServices';
import VAT from './components/Services/VAT';
import ServiceTax from './components/Services/ServiceTax';
import CFinance from './components/Services/CFinance';
import AccountingServices from './components/Services/AccountingServices';
import Outsourcing from './components/Services/Outsourcing';
import CorporateGovernance from './components/Services/CorporateGovernance';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Navbar/Contact';
import { HeroBg1, HeroBg2, HeroBg3 } from './assets';
import Home from './Home';
import gsap from 'gsap';

function App() {
  const location = useLocation();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const heroBackgrounds = [HeroBg1, HeroBg2, HeroBg3];

  const bgImageRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(bgImageRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 7, ease: 'power2.inOut' }
    );

    const intervalId = setInterval(() => {
      const newIndex = (backgroundImageIndex + 1) % heroBackgrounds.length;

      gsap.fromTo(bgImageRef.current,
        { scale: 1 },
        { scale: 1.1, duration: 7, ease: 'power2.inOut' }
      );

      setBackgroundImageIndex(newIndex);

      gsap.fromTo(bgImageRef.current,
        { scale: 1 },
        { scale: 1.1, duration: 7, ease: 'power2.inOut' }
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImageIndex]);

  return (
    <div className='relative overflow-x-clip'>
      {/* Hero Section with Background Image */}
      <div className='relative overflow-hidden z-50 w-full h-[80vh] mb-16'>
        {/* Background image positioned absolutely */}
        <div
          ref={bgImageRef}
          className='absolute inset-0 bg-no-repeat bg-cover w-full h-full'
          style={{
            backgroundImage: `url(${heroBackgrounds[backgroundImageIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          {/* Optional overlay to darken the background */}
          <div className="absolute inset-0 bg-heroBlue bg-opacity-80"></div>
        </div>
        <div className="relative z-20">
          <Header />
          <Hero />
        </div>
      </div>

      {/* ScrollToTop and other page routes */}
      <ScrollToTop />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/Jain-Jakhotiya/" element={<Home />} />
        <Route path="/Jain-Jakhotiya/services" element={<Services />} />
        <Route path="/Jain-Jakhotiya/blogs" element={<Blogs />} />
        <Route path="/Jain-Jakhotiya/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/Jain-Jakhotiya/our-clients" element={<Clients />} />
        <Route path="/Jain-Jakhotiya/contact" element={<Contact />} />
        <Route path="/Jain-Jakhotiya/aboutus" element={<AboutUs />} />
        <Route path="/Jain-Jakhotiya/services/income-tax" element={<IncomeTax />} />
        <Route path="/Jain-Jakhotiya/services/goods-service-tax(gst)" element={<GST />} />
        <Route path="/Jain-Jakhotiya/services/audit" element={<Audit />} />
        <Route path="/Jain-Jakhotiya/services/corporate-services" element={<CorporateServices />} />
        <Route path="/Jain-Jakhotiya/services/value-added-tax(vat)" element={<VAT />} />
        <Route path="/Jain-Jakhotiya/services/service-tax" element={<ServiceTax />} />
        <Route path="/Jain-Jakhotiya/services/corporate-finance" element={<CFinance />} />
        <Route path="/Jain-Jakhotiya/services/accounting-services" element={<AccountingServices />} />
        <Route path="/Jain-Jakhotiya/services/benefits-of-outsourcing" element={<Outsourcing />} />
        <Route path="/Jain-Jakhotiya/services/corporate-governance" element={<CorporateGovernance />} />
      </Routes>

      {/* Footer, Links, ScrollUp */}
      <hr />
      <Links />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
