import React from 'react';
import './AI.css'; // CSS specific to this component
import ai1 from '../Assets/Games/Careersai2.gif';
import ai2 from '../Assets/Games/Careersai3.gif';
import ai3 from '../Assets/Games/Careersai4.gif';
import ai4 from '../Assets/Games/cyber6.gif';
import ai5 from '../Assets/Games/iot9.gif';
import ai6 from '../Assets/Games/ml1.gif';
import Navbar from './Navbar'; // Assuming Navbar component is available

const AI = () => {
  return (
    <div className="ai-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={ai1} alt="What is AI?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Artificial Intelligence?</h2>
          <p>
            Artificial Intelligence (AI) is a technology that allows machines to learn and think. 
            It’s like teaching a computer to do tasks that usually require human intelligence, such 
            as recognizing speech, making decisions, or solving problems. <br /> <br />
            From smart assistants like Siri and Alexa to self-driving cars, AI is used in many places 
            to make our lives easier.
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>How Does AI Work?</h2>
          <p>
            AI works by using algorithms and huge amounts of data to learn patterns. For example, 
            if you want an AI to recognize animals, you give it lots of pictures of animals. The AI 
            will then study the patterns and learn how to identify them on its own. <br /> <br />
            It's like training a brain to recognize things through experience!
          </p>
        </div>
        <div className="card-container-center">
          <img src={ai2} alt="How Does AI Work?" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Why is AI Important?</h2>
          <p>
            AI is important because it allows machines to take over tasks that can be repetitive or 
            even dangerous for humans. It can help doctors find diseases earlier, help businesses make 
            smarter decisions, or help people with disabilities live more independently. <br /> <br />
            AI is changing the world and making many things possible that were once thought to be science fiction.
          </p>
        </div>
        <div className="card-container-right">
          <img src={ai3} alt="Why is AI Important?" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
        <div className="major-text major-text-start">
          <h2>How do I start?</h2>
          <p>
            If you're interested in AI, a great way to start is by learning the basics of programming 
            and machine learning. Coursera offers a course called <strong>Google AI Essentials</strong>,  This course will help you understand the core concepts of AI and how it’s applied 
            in real-world situations. <br /> <br />
            Click the link below to explore AI on Coursera.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/learn/google-ai-essentials" target="_blank" rel="noopener noreferrer">Start Learning AI on Coursera</a></li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={ai4} alt="Coursera AI Course" />
        </div>
      </div>

      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            At VVCE, the foundation of AI is built through programming, mathematics, and algorithms. In your 
            5th Semester, choose <strong>Computer Vision</strong> as a professional elective. You will learn about 
            neural networks & deep learning. <br /> <br />
            Here are some tools and technologies to focus on:
          </p>
          <ul>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>OpenAI</li>
            <li>Deep Learning Frameworks</li>
          </ul>
        </div>
        <div className="card-container-left">
          <img src={ai5} alt="Road Map AI" />
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            AI offers incredible career opportunities. Here are some roles to explore:
          </p>
          <ul>
            <li>AI Engineer</li>
            <li>Machine Learning Engineer</li>
            <li>Data Scientist</li>
            <li>Robotics Scientist</li>
            <li>AI Researcher</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={ai6} alt="AI Careers" />
        </div>
      </div>
    </div>
  );
};

export default AI;
