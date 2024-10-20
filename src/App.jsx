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
  const heroRef = useRef(null);
  const location = useLocation();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const heroBackgrounds = [HeroBg1, HeroBg2, HeroBg3];

  useEffect(() => {
    gsap.fromTo(heroRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });

    const intervalId = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='relative overflow-x-clip'>
      <div
          className='relative z-0 items-center bg-no-repeat bg-cover w-full h-[80vh] mb-16'
          style={{
            backgroundImage: `url(${heroBackgrounds[backgroundImageIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          ref={heroRef}
        >
        <div className="absolute inset-0 bg-heroBlue bg-opacity-80"></div>
        <div>
          <Header />
          <Hero />
        </div>
      </div>

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
      <>
        <hr />
        <Links />
        <ScrollUp />
        <Footer />
      </>
    </div>
  );
}

export default App;
