import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import cs from '../Assets/Games/cyber11.gif';
import ui from '../Assets/Games/ux.gif';
import iot from '../Assets/Games/iot2.gif';
import ds from '../Assets/Games/ds5.gif';
import cc from '../Assets/Games/Careerscc2.gif';
import ai from '../Assets/Games/ai.gif';
import ml from '../Assets/Games/Careersml7.gif';
import md from '../Assets/Games/Careersma.gif';
import wd from '../Assets/Games/Careerswd.gif';

const LandingPage = () => {
  // Define your domain names and corresponding images, with route paths
  const domains = [
    { name: 'Cloud Computing', img:cc , link: '/cloud-computing' },
    { name: 'Cybersecurity', img: cs, link: '/cybersecurity' },
    { name: 'Mobile App Development', img: md, link: '/mobile-app-development' },
    { name: 'ML', img: ml, link: '/ml' }, // Combined card
    { name: 'Web Development & FSD', img: wd, link: '/web-development' },
    { name: 'Data Analysis & Data Science', img:ds , link: '/data-analysis-science' },
    { name: 'AI', img: ai, link: '/ai' },
    { name: 'UI/UX ', img:ui,  link: '/uiux' },
    { name: 'IoT', img:iot , link: '/iot' }
    
    
    
    
    
    
    
   
    
    
    
    
    

    

  ];

  return (
    <div className="landing-page">
      <Navbar />
      <div className="card-container">
        {domains.map((domain, index) => (
          <Link to={domain.link} key={index} className="card">
            <img src={domain.img} alt={domain.name} />
            <h3>{domain.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
