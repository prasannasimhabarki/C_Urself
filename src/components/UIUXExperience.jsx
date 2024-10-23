import React from 'react';
import './UIUX.css'; // CSS specific to this component
import uiux1 from '../Assets/Games/WhatsApp Video 2024-10-14 at 21.17.39.gif';
import uiux2 from '../Assets/Games/ux.gif';
import uiux3 from '../Assets/Games/ux1.gif';
import uiux4 from '../Assets/Games/cyber6.gif';
import cs5 from '../Assets/Games/cyber7.gif';
import cs6 from '../Assets/Games/cyber8.gif';

import Navbar from './Navbar'; // Assuming Navbar component is available

const UIUX = () => {
  return (
    <div className="uiux-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={uiux1} alt="What is UI?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is UI?</h2>
          <p>
            User Interface (UI) is how a user interacts with a device or application. Imagine
            you're using a mobile app – the buttons you press, the screens you navigate through, 
            and the visuals you see are all part of the UI. <br /> <br />
            A good UI ensures that everything is clear and easy to use. If you've ever used an app 
            that feels confusing or hard to navigate, it likely has a poor UI. <br /> <br />
            UI designers focus on creating interfaces that are intuitive and efficient, making it 
            easier for people to interact with technology.
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>What is UX?</h2>
          <p>
            User Experience (UX) is all about how a person feels when using a product, system, or service.
            Imagine you're using an app that loads quickly, is simple to navigate, and does exactly 
            what you need – that’s great UX! <br /> <br />
            UX designers work to improve the overall experience, ensuring users find value in what
            they’re using. They conduct research, create prototypes, and constantly iterate to make 
            the product more user-friendly.
          </p>
        </div>
        <div className="card-container-center">
          <img src={uiux2} alt="What is UX?" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Importance of UI/UX Design</h2>
          <p>
            UI/UX design is critical to the success of any digital product or service. Without
            good UI, users may find it difficult to understand how to use a system, and without
            good UX, they may have a frustrating experience. <br /> <br />
            Both UI and UX work hand in hand to create a seamless, user-friendly experience that 
            meets the user's needs efficiently. Whether you're designing a website or an app, the 
            ultimate goal is to make users feel that their time interacting with your product was 
            well spent and satisfying.
          </p>
        </div>
        <div className="card-container-right">
          <img src={uiux3} alt="Importance of UI/UX" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            Coursera offers fantastic courses to get you started in UI/UX. With courses ranging 
            from beginner to advanced, you’ll learn how to design engaging interfaces and create 
            user-centered experiences. Whether you're new to UI/UX or looking to deepen your skills, 
            Coursera has a variety of options to explore. <br /> <br />
            Click the link below to start learning UI/UX today.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/specializations/ui-ux-design" target="_blank" rel="noopener noreferrer">Start Learning UI/UX</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={uiux4} alt="Coursera UI/UX" /> {/* Placeholder for Coursera image */}
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            At VVCE, you will come across subjects like Web Design and UI/UX. 
            Learning about design principles and practicing with design 
            tools like Figma and Adobe XD will help you gain hands-on experience. Additionally, you can 
            explore courses like "Introduction to User Experience Design" on Coursera to get started early. <br /> <br />
            Make sure to focus on user research, prototyping, and usability testing to sharpen your skills 
            as a UI/UX designer.
          </p>
          <p>Tools to learn:</p>
          <ul>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Adobe XD</li>
            <li>Balsamiq</li>
            <li>InVision</li>
          </ul>
        </div>
        <div className="card-container-left">
          <img src={cs5} alt="Road Map UI/UX" /> {/* Placeholder for Road Map image */}
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            UI/UX offers exciting career opportunities for freshers at top companies. Some of the key roles include:
          </p>
          <ul>
            <li>UI Designer</li>
            <li>UX Designer</li>
            <li>Interaction Designer</li>
            <li>User Researcher</li>
            <li>Product Designer</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={cs6} alt="UI/UX Careers" /> {/* Placeholder for Careers image */}
        </div>
      </div>
    </div>
  );
};

export default UIUX;
