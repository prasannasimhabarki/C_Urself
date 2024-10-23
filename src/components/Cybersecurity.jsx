import React from 'react';
import './Cybersecurity.css'; // CSS specific to this component
import cs1 from '../Assets/Games/Careers4.gif';
import cs9 from '../Assets/Games/cyber9.gif';
import cs3 from '../Assets/Games/cyber5.gif';
import cs4 from '../Assets/Games/cyber6.gif';
import cs5 from '../Assets/Games/cyber7.gif';
import cs6 from '../Assets/Games/cyber8.gif';
import Navbar from './Navbar'; // Assuming Navbar component is available

const Cybersecurity = () => {
  return (
    <div className="cybersecurity-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={cs1} alt="Computer Networks" />
        </div>
        <div className="major-text major-text-1">
          <h2>Computer Networks</h2>
          <p>
            Imagine you have a group of friends who all live in different houses. You want to
            talk to them or share things with them, but everyone is far away. So, what do you do? 
            You create a system where you can send messages, pictures, or videos to each friend 
            without leaving your house. This system is called a "network." <br /> <br />
            In the same way, computers use networks to talk to each other. They send and receive
            information like messages, files, and even games through something called the internet.
            Each computer in the network has its own address, just like houses do, and they follow
            special rules to make sure the messages are sent correctly. These rules are called 
            "protocols". 
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>Ethical Hacking</h2>
          <p>
            Ethical hacking is like being a detective for computers. Imagine there’s a locked door 
            to a house, and only the owner is supposed to know how to open it. But sometimes, a 
            bad person might try to sneak in without permission. Ethical hackers are like the good 
            detectives who check to see if the door is locked properly. 
          </p>
        </div>
        <div className="card-container-center">
          <img src={cs9} alt="Ethical Hacking" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Cybersecurity</h2>
          <p>
            Cybersecurity is like having a strong lock on your front door. Just like you want to
            keep your house safe from strangers, we need to keep our computers and the information
            inside them safe from bad people. Cybersecurity is all about protecting computers, 
            networks, and the information stored in them from attacks. <br /> <br />
            People who work in cybersecurity find ways to stop hackers from breaking into computers.
            They build strong defenses to make sure the data stays safe. 
          </p>
        </div>
        <div className="card-container-right">
          <img src={cs3} alt="Cybersecurity" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            <strong>Coursera</strong> is an online learning platform offering courses in many different subjects,
            including cybersecurity. 
            It has a wide range of courses to help you get started in cybersecurity. 
            You'll gain practical knowledge through hands-on projects and learn from experts in the field. <br /> <br />
            Click the link below to start your journey with Cybersecurity.<br></br>
            <p>Please do go through Road Map below the link before clicking it.</p>
            
          </p>
          <ul>
            <li><a href="https://www.coursera.org/specializations/packt-the-complete-ethical-hacking-bootcamp-beginner-to-advanced" target="_blank" rel="noopener noreferrer">Say hi to Cybersecurity</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={cs4} alt="Coursera" /> {/* Placeholder for Coursera image */}
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="card-container-left">
          {/* Placeholder for Road map image */}
          <img src={cs5} alt="Road Map" /> 
        </div>
        <div className="major-text major-text-roadmap">
          <h2>Road map</h2>
          <p>
            In VVCE, you will come across a subject known as Computer Networks, and that's the stepping stone for 
            Cybersecurity and Networks. Linux plays a vital role, so it's essential to learn Linux and Linux commands 
            with the help of "Kali Linux" course on Coursera. <br /> <br />
            You should choose your professional electives strategically: 
            <strong>"Cryptography"</strong> in 5th semester, <strong>"Network Security"</strong> in 6th semester, 
            and <strong>"Cybersecurity"</strong> in 7th semester. <br /> <br />
            In any of the semesters, you can go through the course in Coursera and finish it.
            This will help you build a strong foundation, and you’ll get super interested in learning about the subject.
          </p>
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right careers-section">
        <div className="major-text major-text-careers">
          <h2>Careers</h2>
          <p>
            Freshers can apply for various job roles in top MNCs related to cybersecurity, such as:
            <ul>
              <li>Security Analyst</li>
              <li>Network Security Engineer</li>
              <li>Cybersecurity Consultant</li>
              <li>Penetration Tester (Ethical Hacker)</li>
              <li>Incident Responder</li>
              <li>Information Security Analyst</li>
              <li>Risk Analyst</li>
            </ul>
            These roles offer exciting career opportunities for cybersecurity enthusiasts, providing a strong foundation for growth in the field.
          </p>
        </div>
        <div className="card-container-right">
          {/* Placeholder for Careers image */}
          <img src={cs6} alt="Careers" />
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
