import React from 'react';
import './IoT.css'; // CSS specific to this component
import iot1 from '../Assets/Games/cyber6.gif';
import iot2 from '../Assets/Games/iot2.gif';
import iot3 from '../Assets/Games/iot3.gif';
import iot4 from '../Assets/Games/Careersiot4.jpg';
import iot5 from '../Assets/Games/iot9.gif';
import iot6 from '../Assets/Games/iot8.gif';
import Navbar from './Navbar'; // Assuming Navbar component is available

const IoT = () => {
  return (
    <div className="iot-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={iot2} alt="What is IoT?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is IoT?</h2>
          <p>
            Imagine you have toys that can talk to each other. That's kind of what the Internet of
            Things (IoT) is. It means that things like lights, cars, or even your fridge can talk
            to each other through the internet! <br /> <br />
            So, if you have a smart light, you can turn it off using your phone. That's because
            they are connected through the internet, just like how you talk to your friends online.
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>How Does IoT Work?</h2>
          <p>
            IoT works by using sensors. Sensors are like the eyes and ears of the devices. 
            They collect information, like how hot it is or if a door is open. Then they send
            this information over the internet to other devices, like your phone, so you can
            know what's happening. <br /> <br />
            It’s like magic, but with technology!
          </p>
        </div>
        <div className="card-container-center">
          <img src={iot3} alt="How Does IoT Work?" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Why is IoT Important?</h2>
          <p>
            IoT is important because it makes our lives easier. Imagine your fridge telling you
            when you're out of milk or your car telling you when the tire needs air. <br /> <br />
            It helps people save time, keep track of things, and even stay safe. That's why so many
            things are becoming smart, like watches and even homes!
          </p>
        </div>
        <div className="card-container-right">
          <img src={iot4} alt="Why is IoT Important?" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            If you're interested in learning about IoT, Coursera has some great courses. 
            You can start by understanding how sensors work and how to connect devices to the 
            internet. Learning about coding and electronics will also help! <br /> <br />
            Click the link below to explore IoT.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/specializations/internet-of-things" target="_blank" rel="noopener noreferrer">Start Learning IoT</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={iot1} alt="Coursera IoT" /> {/* Placeholder for Coursera image */}
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            In VVCE, you will learn about topics like sensors, networks, and communication that
            are the base for IoT. Start with understanding how electronics work, and dive into
            programming languages like <strong>Python</strong> or JavaScript to control IoT devices. <br /> <br />
            There are also specialized courses on IoT where you can get hands-on experience.
            Practice is key in this field!
          </p>
          <p>Tools to learn:</p>
          <ul>
            <li>Tinkercad</li>
            <li>Aurdino</li>
            <li>Wireshark</li>
            <li>Eclipse IoT</li>
            <li>Flutter</li>
          </ul>

        </div>
        <div className="card-container-left">
          <img src={iot5} alt="Road Map IoT" /> {/* Placeholder for Road Map image */}
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            IoT offers exciting careers at top companies. Some roles you can explore are:
          </p>
          <ul>
            <li>IoT Developer</li>
            <li>IoT Architect</li>
            <li>Embedded Systems Engineer</li>
            <li>IoT Security Specialist</li>
            <li>Data Analyst for IoT</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={iot6} alt="IoT Careers" /> {/* Placeholder for Careers image */}
        </div>
      </div>
    </div>
  );
};

export default IoT;
