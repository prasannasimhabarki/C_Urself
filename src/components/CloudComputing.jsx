import React from 'react';
import './CloudComputing.css'; // CSS specific to this component
import cc1 from '../Assets/Games/Careerscc2.gif';
import cc2 from '../Assets/Games/Careerscc5.gif';
import cc3 from '../Assets/Games/WhatsApp Video 2024-10-14 at 21.17.11.gif';
import cc4 from '../Assets/Games/cyber6.gif';
import cc5 from '../Assets/Games/iot9.gif';
import cc6 from '../Assets/Games/iot8.gif';
import Navbar from './Navbar'; // Assuming Navbar component is available

const CloudComputing = () => {
  return (
    <div className="cloudcomputing-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={cc1} alt="What is Cloud Computing?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Cloud Computing?</h2>
          <p>
            Cloud computing means using the internet to store and access data and programs.
            Instead of keeping everything on your computer, you can use the cloud, which is
            like a huge storage space. <br /> <br />
            This lets people and companies access their files and applications from anywhere,
            anytime, using devices like phones or computers.
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>How Does Cloud Computing Work?</h2>
          <p>
            Cloud computing works by connecting your device to remote servers where your data is
            stored. It allows you to access and use applications without needing powerful hardware
            on your own device. <br /> <br />
            It’s like having a supercomputer in the sky that helps you do tasks like streaming
            movies, running software, or even storing homework.
          </p>
        </div>
        <div className="card-container-center">
          <img src={cc2} alt="How Does Cloud Computing Work?" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Why is Cloud Computing Important?</h2>
          <p>
            Cloud computing is important because it makes technology more accessible. Instead of
            needing big, expensive computers, anyone can use powerful services on the cloud to
            save money and time. <br /> <br />
            It helps businesses grow faster, lets students store their projects, and allows us to
            use apps like Google Drive or Netflix from anywhere!
          </p>
        </div>
        <div className="card-container-right">
          <img src={cc3} alt="Why is Cloud Computing Important?" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            If you're excited about Cloud Computing, you can start by learning the basics. 
            Coursera offers a great course called <strong>Google Cloud Fundamentals</strong> that gives you 7 certificates! 
             <br /> <br />
            This course covers how Google Cloud works, and it’s a great way to understand the
            cloud's power.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/learn/gcp-fundamentals" target="_blank" rel="noopener noreferrer">Start Learning Cloud Computing on Coursera</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={cc4} alt="Coursera Google Cloud" />
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            In VVCE, you will study topics like computer networks and distributed systems, which
            are essential for cloud computing. In the 6th semester, choose the elective <strong>SAN(Storage Area Networks)</strong>
             for deeper insights. <br /> <br />
            Here are some tools and technologies to learn:
          </p>
          <ul>
            <li>Google Cloud</li>
            <li>Kubernetes</li>
            <li>Microsoft Azure</li>
            <li>Docker</li>
            <li>Terraform</li>
            <li>Amazon Web Services (AWS)</li>
          </ul>
        </div>
        <div className="card-container-left">
          <img src={cc5} alt="Cloud Computing Road Map" />
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            Cloud computing opens up exciting career paths. Here are some roles you can explore:
          </p>
          <ul>
            <li>Cloud Engineer</li>
            <li>Cloud Architect</li>
            <li>DevOps Engineer</li>
            <li>Cloud Security Specialist</li>
            <li>Cloud Consultant</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={cc6} alt="Cloud Computing Careers" />
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
