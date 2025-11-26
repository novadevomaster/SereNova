import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Business from './pages/Business';
import BusinessModel from './pages/BusinessModel';
import Innovation from './pages/Innovation';
import Contact from './pages/Contact';
import X2Trip from './pages/X2Trip';
import DownloadButton from './components/DownloadButton';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-right" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/business" element={<Business />} />
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/x2-trip" element={<X2Trip />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <DownloadButton />
      </div>
    </Router>
  );
};

export default App;