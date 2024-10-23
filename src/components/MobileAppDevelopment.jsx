import React from 'react';
import './MobileAppDevelopment.css'; // CSS specific to this component
import mad1 from '../Assets/Games/Careersma.gif'; // Placeholder for "What is Mobile App Development" section
import mad2 from '../Assets/Games/Careersma2.gif'; // Placeholder for Android Studio
import mad3 from '../Assets/Games/cyber6.gif'; // Placeholder for Coursera
import mad4 from '../Assets/Games/iot9.gif'; // Placeholder for Roadmap
import mad5 from '../Assets/Games/iot8.gif'; // Placeholder for Careers
import Navbar from './Navbar'; // Assuming Navbar component is available

const MobileAppDevelopment = () => {
  return (
    <div className="mobile-dev-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={mad1} alt="Mobile App Development" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Mobile App Development?</h2>
          <p>
            Mobile App Development is all about creating software applications that run on mobile 
            devices like smartphones and tablets. These apps can be games, social media platforms, 
            or any other type of software that helps users interact with their mobile devices in 
            innovative ways.
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>Focus on Android Studio</h2>
          <p>
            Android Studio is the official development environment for creating Android apps. 
            It provides a powerful and user-friendly platform where you can design, test, and 
            debug your apps. If you're interested in Android app development, Android Studio is 
            the place to start. You will learn about its features, how to build an app, and how to 
            bring your ideas to life. 
          </p>
        </div>
        <div className="card-container-center">
          <img src={mad2} alt="Android Studio" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            <strong>Coursera</strong> offers numerous courses to help you get started with mobile app 
            development. You can start with beginner-friendly courses that teach you the basics of 
            app development using Android Studio or React Native, and then move on to more advanced 
            topics like UX design and mobile security. <br /> <br />
            Click the link below to explore mobile app development course on Coursera.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/learn/introduction-to-android-mobile-application-development" target="_blank" rel="noopener noreferrer">Start your journey with Mobile App Development</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={mad3} alt="Coursera" /> {/* Placeholder for Coursera image */}
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="card-container-left">
          <img src={mad4} alt="Road Map" /> {/* Placeholder for Roadmap image */}
        </div>
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            To build a successful career in mobile app development, you'll need to get familiar with the right tools and technologies. 
            Here are the key tools to look for:
          </p>
          <ul>
            <li><strong>Android Studio:</strong> The official IDE for Android development.</li>
            <li><strong>React Native:</strong> A framework for building cross-platform apps using JavaScript.</li>
            <li><strong>Flutter:</strong> A UI toolkit for building natively compiled apps from a single codebase.</li>
            <li><strong>Swift:</strong> A programming language for iOS app development.</li>
            <li><strong>Firebase:</strong> A platform for building and managing mobile apps, especially for back-end services.</li>
          </ul>
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right careers-section">
        <div className="major-text major-text-careers">
          <h2>Careers</h2>
          <p>
            Mobile app development offers exciting career opportunities. After mastering the required skills, 
            you can explore roles such as:
            <ul>
              <li>Mobile App Developer (Android/iOS)</li>
              <li>UX/UI Designer for mobile apps</li>
              <li>Mobile App Tester</li>
              <li>Full Stack Mobile Developer</li>
            </ul>
            These roles are in high demand, and as a mobile app developer, you can work for top tech companies 
            or start your own app development venture.
          </p>
        </div>
        <div className="card-container-right">
          <img src={mad5} alt="Careers in Mobile Development" /> {/* Placeholder for Careers image */}
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
