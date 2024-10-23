import React from 'react';
import './WebDevelopment.css'; // CSS specific to this component
import web1 from '../Assets/Games/Careerswd2.gif'; // Placeholder for "What is Web Development"
import web2 from '../Assets/Games/Careerswd14.gif'; // Placeholder for FSD technologies
import reactImg from '../Assets/Games/Careerswd7.gif'; // Placeholder for React.js
import stsImg from '../Assets/Games/Careerswd8.gif'; // Placeholder for Spring Tool Suite
import mongoImg from '../Assets/Games/Careerswd9.gif'; // Placeholder for MongoDB
import mysqlImg from '../Assets/Games/Careerswd10.gif'; // Placeholder for MySQL
import dockerImg from '../Assets/Games/Careerswd11.gif'; // Placeholder for Docker
import firebaseImg from '../Assets/Games/Careerswd12.gif'; // Placeholder for Firebase
import gitImg from '../Assets/Games/Careersgit.gif'; // Placeholder for Git
import Navbar from './Navbar'; // Assuming Navbar component is available
import road from '../Assets/Games/iot9.gif';
import career from '../Assets/Games/ml1.gif';
const WebDevelopmentFSD = () => {
  return (
    <div className="webdev-fsd-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* Web Development Section */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={web1} alt="Web Development" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Web Development?</h2>
          <p>
            Web development is the process of building and maintaining websites. It involves working on 
            both the front-end (what users see and interact with) and the back-end (servers, databases, etc.). 
            Web developers use programming languages such as HTML, CSS, JavaScript, and frameworks like 
            React.js to create fast, responsive, and visually appealing websites.
          </p>
        </div>
      </div>

      {/* Full Stack Development Section */}
      <div className="fsd-section">
        <h2>Full Stack Development</h2>
        <div className="card-container-center">
            <img src={web2} alt="FSD" />
        </div>

        {/* 1st Major Text: React.js */}
        <div className="section section-left">
          <div className="major-text major-text-2">
            <h2>React.js</h2>
            <p>
              React.js is a popular JavaScript library for building user interfaces, especially for single-page applications. 
              It allows developers to create large web applications that can update and render efficiently in response 
              to data changes. Its component-based architecture makes it ideal for developing complex UIs with ease.
            </p>
          </div>
          <div className="card-container-right">
            <img src={reactImg} alt="React.js" />
          </div>
        </div>

        {/* 2nd Major Text: Spring Tool Suite & Spring Boot */}
        <div className="section section-right">
          <div className="card-container-left">
            <img src={stsImg} alt="Spring Tool Suite" />
          </div>
          <div className="major-text major-text-3">
            <h2>Spring Tool Suite & Spring Boot</h2>
            <p>
              Spring Boot simplifies the creation of production-grade Spring-based applications. Spring Tool Suite (STS) 
              is an Eclipse-based IDE that makes developing Spring applications easier. It comes with ready-to-use tools 
              for microservices architecture, REST APIs, and more. Using Spring Boot, you can rapidly develop back-end services.
            </p>
          </div>
        </div>

        {/* 3rd Major Text: MongoDB */}
        <div className="section section-left">
          <div className="major-text major-text-4">
            <h2>MongoDB</h2>
            <p>
              MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's designed to handle 
              large amounts of unstructured data, making it an excellent choice for modern applications. As a full 
              stack developer, knowing MongoDB allows you to work with databases efficiently and manage data for 
              scalable web applications.
            </p>
          </div>
          <div className="card-container-right">
            <img src={mongoImg} alt="MongoDB" />
          </div>
        </div>

        {/* 4th Major Text: MySQL */}
        <div className="section section-right">
          <div className="card-container-left">
            <img src={mysqlImg} alt="MySQL" />
          </div>
          <div className="major-text major-text-5">
            <h2>MySQL</h2>
            <p>
              MySQL is one of the most popular relational database management systems (RDBMS). It's widely used in full 
              stack development to store structured data, perform queries, and ensure data integrity in web applications. 
              Knowledge of MySQL will help you manage relational databases and work on data-heavy applications.
            </p>
          </div>
        </div>

        {/* 5th Major Text: Docker */}
        <div className="section section-left">
          <div className="major-text major-text-6">
            <h2>Docker</h2>
            <p>
              Docker is a tool that allows developers to create, deploy, and run applications inside lightweight, 
              portable containers. Containers help in packaging an application with all its dependencies, making 
              it easier to run the same app in different environments without any issues. As a full stack developer, 
              Docker is a must-have tool for managing and deploying applications efficiently.
            </p>
          </div>
          <div className="card-container-right">
            <img src={dockerImg} alt="Docker" />
          </div>
        </div>

        {/* 6th Major Text: Google Firebase */}
        <div className="section section-right">
          <div className="card-container-left">
            <img src={firebaseImg} alt="Google Firebase" />
          </div>
          <div className="major-text major-text-7">
            <h2>Google Firebase</h2>
            <p>
              Google Firebase is a platform that helps you build, improve, and grow mobile and web applications. It 
              provides various tools like real-time databases, authentication, and cloud storage, making it easy to 
              manage back-end services without setting up your own servers. Firebase also helps you deploy your 
              full stack projects.
            </p>
          </div>
        </div>

        {/* 7th Major Text: Git */}
        <div className="section section-left">
          <div className="major-text major-text-8">
            <h2>Git</h2>
            <p>
              Git is a version control system that helps developers manage changes to their code. It allows teams 
              to collaborate efficiently and keeps track of every modification in the project. Git is an essential 
              tool for full stack developers, ensuring smooth collaboration and versioning of projects.
            </p>
          </div>
          <div className="section section-left"></div>
          <div className="card-container-right">
            <img src={gitImg} alt="Git" />
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="section section-left">
        <div className="card-container-left">
        <img src={road} alt="road-map" />
        </div>
     
      <div className="major-text major-text-8">
     
        <h2>Web Development & FSD Roadmap</h2>
        <ul>
          <li>1. Learn HTML, CSS, and JavaScript</li>
          <li>2. Explore front-end frameworks like React.js</li>
          <li>3. Master back-end technologies like Node.js, Spring Boot, etc.</li>
          <li>4. Learn databases like MongoDB and MySQL</li>
          <li>5. Work with version control tools like Git</li>
          <li>6. Understand containerization using Docker</li>
          <li>7. Deploy applications using services like Firebase</li>
        </ul>
       
      </div>
      </div>
      
      

      {/* Careers Section */}
      <div className="section section-left careers-section">
  
  <div className="major-text major-text-careers">
      <h2>Careers in Web Development</h2>
      <p>
        Web development & FSD offers a range of career opportunities. You can specialize in front-end, back-end, 
        or become a full stack developer. Here are some popular career options:
      </p>
      <ul>
        <li>1. Front-end Developer</li>
        <li>2. Back-end Developer</li>
        <li>3. Full Stack Developer</li>
        <li>4. Web Designer</li>
        <li>5. DevOps Engineer</li>
        <li>6. Cloud Engineer</li>
        <li>7. Technical Lead</li>
      </ul>
      <p>
        With the growing demand for web technologies, career growth in this field is vast and rewarding. 
        You can work with companies, startups, or even as a freelance developer.
      </p>
    </div>
    <div className="card-container-right">
  
    <img src={career} alt="Careers in Web Development" /> {/* Adjusted alt text */}
  </div>
</div>
</div>
    
  );
};

export default WebDevelopmentFSD;
