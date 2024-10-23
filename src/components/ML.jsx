import React from 'react';
import './ML.css'; // CSS specific to this component
import ml1 from '../Assets/Games/Careersml4.gif'; 
import ml2 from '../Assets/Games/Careersml3.gif'; 
import ml3 from '../Assets/Games/cyber6.gif';
import ml4 from '../Assets/Games/iot9.gif';
import ml5 from '../Assets/Games/Careerspy.gif';
import ml6 from '../Assets/Games/ml1.gif';

import Navbar from './Navbar'; // Assuming Navbar component is available

const MachineLearning = () => {
  return (
    <div className="ml-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={ml1} alt="What is Machine Learning?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Machine Learning?</h2>
          <p>
            Machine Learning (ML) is a type of artificial intelligence that allows computers to 
            learn from data without being explicitly programmed. Think of it as teaching a computer 
            to recognize patterns and make decisions by itself!
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>Why is Machine Learning Important?</h2>
          <p>
            Machine Learning powers many technologies we use daily. From recommendation systems 
            like Netflix, to self-driving cars, ML helps automate tasks and make better decisions 
            faster than humans. It's revolutionizing industries across the globe!
          </p>
        </div>
        <div className="card-container-center">
          <img src={ml2} alt="Importance of Machine Learning" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            To get started in Machine Learning, you should have a good understanding of programming 
            and statistics. Coursera offers a <strong>Machine Learning with Python by IBM</strong>, 
            which is a great starting point. <br /> <br />
            Click the link below to explore Machine Learning courses on Coursera.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/learn/machine-learning-with-python" target="_blank" rel="noopener noreferrer">Start Learning Machine Learning</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={ml3} alt="Machine Learning Course" />
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            In VVCE, you will be introduced to Machine Learning concepts during your later semesters.ML lab is very important which plays a key role in better understanding of the concept. 
            Here are some key learning areas to focus on:
          </p>
          <ul>
            <li><strong>Supervised Learning:</strong> The model is trained on labeled data to make predictions.</li>
            <li><strong>Unsupervised Learning:</strong> The model is trained on data without labels to find patterns.</li>
            <li><strong>Reinforcement Learning:</strong> The model learns by receiving rewards for correct actions and penalties for wrong ones.</li>
          </ul>
          <p>Tools to look out for:</p>
          <ul>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Jupyter Notebook</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>
        <div className="card-container-left roadmap-images">
        <div className="card-container-left">
          <img src={ml4} alt="ML Road Map" />
        </div>
          <img src={ml5} alt="Unsupervised Learning" className="roadmap-image" />
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            Machine Learning is a fast-growing field with plenty of opportunities. You can explore roles like:
          </p>
          <ul>
            <li>Machine Learning Engineer</li>
            <li>Data Scientist</li>
            <li>AI Engineer</li>
            <li>Research Scientist</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={ml6} alt="Machine Learning Careers" />
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
