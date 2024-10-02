import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/Jain-Jakhotiya/services" exact element={<Services />} />
          <Route path="/Jain-Jakhotiya/blogs" exact element={<Blogs />} />
          <Route path="/Jain-Jakhotiya/knowledge-hub" exact element={<KnowledgeHub />} />
          <Route path="/Jain-Jakhotiya/our-clients" exact element={<Clients />} />
          <Route path="/Jain-Jakhotiya/contact" exact element={<Contact />} />
          <Route path="/Jain-Jakhotiya/aboutus" exact element={<AboutUs />} />
          <Route path="/Jain-Jakhotiya/services/income-tax" exact element={<IncomeTax />} />
          <Route path="/Jain-Jakhotiya/services/goods-service-tax(gst)" exact element={<GST />} />
          <Route path="/Jain-Jakhotiya/services/audit" exact element={<Audit />} />
          <Route path="/Jain-Jakhotiya/services/corporate-services" exact element={<CorporateServices />} />
          <Route path="/Jain-Jakhotiya/services/value-added-tax(vat)" exact element={<VAT />} />
          <Route path="/Jain-Jakhotiya/services/service-tax" exact element={<ServiceTax />} />
          <Route path="/Jain-Jakhotiya/services/corporate-finance" exact element={<CFinance />} />
          <Route path="/Jain-Jakhotiya/services/accounting-services" exact element={<AccountingServices />} />
          <Route path="/Jain-Jakhotiya/services/benefits-of-outsourcing" exact element={<Outsourcing />} />
          <Route path="/Jain-Jakhotiya/services/corporate-governance" exact element={<CorporateGovernance />} />
        </Routes>
        <hr />
        <Links/>
        <ScrollUp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
