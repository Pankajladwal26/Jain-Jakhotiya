import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Links from './components/Links';
import ScrollUp from './components/ScrollUp';
import AboutUs from './components/AboutUs';
import IncomeTax from './components/Services/IncomeTax';
import Services from './components/Services';
import Clients from './components/Clients';
import KnowledgeHub from './components/KnowledgeHub';
import Blogs from './components/Blogs';
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
import Contact from './components/Contact';
import { HeroBg } from './assets';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className='relative overflow-x-clip'>
        <div className='relative items-center bg-no-repeat bg-cover w-full h-[100vh] mb-16' 
             style={{ 
               backgroundImage: `url(${HeroBg})`, 
               backgroundPosition: 'center', 
               backgroundSize: 'cover', 
               backgroundRepeat: 'no-repeat' 
             }}>
          <Header />
          <Hero />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/Jain-Jakhotiya/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/knowledge-hub" exact element={<KnowledgeHub />} />
          <Route path="/our-clients" exact element={<Clients />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/services/income-tax" exact element={<IncomeTax />} />
          <Route path="/services/goods-service-tax(gst)" exact element={<GST />} />
          <Route path="/services/audit" exact element={<Audit />} />
          <Route path="/services/corporate-services" exact element={<CorporateServices />} />
          <Route path="/services/value-added-tax(vat)" exact element={<VAT />} />
          <Route path="/services/service-tax" exact element={<ServiceTax />} />
          <Route path="/services/corporate-finance" exact element={<CFinance />} />
          <Route path="/services/accounting-services" exact element={<AccountingServices />} />
          <Route path="/services/benefits-of-outsourcing" exact element={<Outsourcing />} />
          <Route path="/services/corporate-governance" exact element={<CorporateGovernance />} />
        </Routes>
        <hr className='ml-[9%] mr-[9%]'/>
        <Links/>
        <ScrollUp />
        <hr className='border-customBlack ml-[8%] mr-[8%]'/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
