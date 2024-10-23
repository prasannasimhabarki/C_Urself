import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Cybersecurity from './components/Cybersecurity';
import UIUXExperience from './components/UIUXExperience';
import IoT from './components/IoT';
import DataAnalysisScience from './components/DataAnalysisScience'; // Combined component
import CloudComputing from './components/CloudComputing';
import AI from './components/AI';
import ML from './components/ML';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import WebDevelopment from './components/WebDevelopment';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Default root path */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/uiux" element={<UIUXExperience />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/data-analysis-science" element={<DataAnalysisScience />} /> {/* Combined route */}
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;
