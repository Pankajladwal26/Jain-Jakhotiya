import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import relevant components
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
import LoginPage from './components/login/LoginPage';
import MyProfile from './components/user/MyProfile';
import Profile from './components/user/ProfileIntro';
import EditProfile from './components/user/EditProfile';
import AdminPanel from './components/user/AdminPanel';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Jain-Jakhotiya/login';
  const isProfile = location.pathname === '/Jain-Jakhotiya/profile';
  const isEditProfile = location.pathname === '/Jain-Jakhotiya/edit-profile';
  const isAdminPanel = location.pathname === '/Jain-Jakhotiya/admin-panel';

  return (
    <div className='relative overflow-x-clip'>
      {/* Only render the Header and Hero if not on the login page */}
      {!isLoginPage && (
        <div
          className='relative z-10 items-center bg-no-repeat bg-cover w-full h-[100vh] mb-16'
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {isProfile || isEditProfile || isAdminPanel ?
            <div className=''>
              <Header />
              < Profile />
            </div> 
           : 
           <div>
            <Header />
            <Hero />
           </div>
           
        }
        </div>
      )}

      <ScrollToTop />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/Jain-Jakhotiya/login" element={<LoginPage />} />
        <Route path="/Jain-Jakhotiya/profile" element={<MyProfile />} />
        <Route path="/Jain-Jakhotiya/edit-profile" element={<EditProfile />} />
        <Route path="/Jain-Jakhotiya/admin-panel" element={<AdminPanel />} />
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

      {/* Only render the Footer, Links, and ScrollUp if not on the login page */}
      {!isLoginPage && !isProfile && !isEditProfile && !isAdminPanel && (
        <>
          <hr />
          <Links />
          <ScrollUp />
          <Footer />
        </>
      )}
      {/* Only render the Footer if on the profile page */}
      {(isProfile || isEditProfile || isAdminPanel) && <Footer />}
    </div>
  );
}

export default App;
