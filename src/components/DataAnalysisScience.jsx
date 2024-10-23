import React from 'react';
import './DataScience.css'; // CSS specific to this component
import ds1 from '../Assets/Games/Careersds2.gif';
import ds2 from '../Assets/Games/Careersds3.gif';
import ds3 from '../Assets/Games/ds2.gif';
import ds4 from '../Assets/Games/ds1.png';
import ds5 from '../Assets/Games/iot9.gif';
import ds6 from '../Assets/Games/ml1.gif';
import Navbar from './Navbar'; // Assuming Navbar component is available

const DataScience = () => {
  return (
    <div className="datascience-page">
      <Navbar /> {/* Include the same navbar as in the landing page */}

      {/* 1st Major Text with Card */}
      <div className="section section-right">
        <div className="card-container-left">
          <img src={ds1} alt="What is Data Science?" />
        </div>
        <div className="major-text major-text-1">
          <h2>What is Data Science?</h2>
          <p>
            Data Science is like solving a mystery! Imagine you have a huge pile of information, 
            like numbers or facts, and your job is to find patterns or trends in them. <br /> <br />
            Data scientists use computers to understand this data, and then make decisions or 
            predictions based on it. It’s used in many places, like predicting the weather, 
            recommending videos, or finding ways to make cars safer!
          </p>
        </div>
      </div>

      {/* 2nd Major Text with Card */}
      <div className="section section-center">
        <div className="major-text major-text-2">
          <h2>What is Data Analysis?</h2>
          <p>
            Data Analysis is like being a detective. You take the data you have and look closely at it 
            to figure out what's happening. It helps in understanding trends, finding problems, and 
            answering important questions. <br /> <br />
            Analysts use tools like graphs, charts, and math to study the data and give people helpful 
            information. For example, a company might use data analysis to find out which product is 
            selling the most.
          </p>
        </div>
        <div className="card-container-center">
          <img src={ds3} alt="What is Data Analysis?" />
        </div>
      </div>

      {/* 3rd Major Text with Card */}
      <div className="section section-left">
        <div className="major-text major-text-3">
          <h2>Why is Data Science Important?</h2>
          <p>
            Data Science is important because it helps people make smart decisions. Whether it's 
            improving business, finding the best way to treat a patient, or helping sports teams win, 
            data science gives people the information they need to do better. <br /> <br />
            From your favorite apps to helping scientists make discoveries, data science is everywhere!
          </p>
        </div>
        <div className="card-container-right">
          <img src={ds2} alt="Why is Data Science Important?" />
        </div>
      </div>

      {/* "How do I start?" Section */}
      <div className="section section-right start-section">
  <div className="major-text major-text-start">
    <h2>How do I start?</h2>
    <p>
      If you're excited about Data Science, you can start by learning how to use computers 
      to study data. edX offers beginner courses where you can learn about data, 
      graphs, and how to use tools like Python for analysis. One great course to begin with 
      is <strong>Harvard's Data Science Professional Certificate</strong>. <br /> <br />
      Click the link below to explore Data Science on edX.
    </p>
    <ul>
      <li><a href="https://www.edx.org/learn/machine-learning/harvard-university-data-science-machine-learning?index=product&queryID=9363482f3c69a558f5d0b7ac51810cf1&position=3&results_level=first-level-results&term=data+science&objectID=course-7e5958e8-d709-41ab-8f8c-4339f7a733c9&campaign=Data+Science%3A+Machine+Learning&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch" target="_blank" rel="noopener noreferrer">Start Learning Data Science on edX</a></li>
    </ul>
  </div>
  <div className="card-container-right">
    <img src={ds4} alt="edX Data Science" />
  </div>
</div>


      {/* Road Map Section */}
      <div className="section section-left roadmap-section">
        <div className="major-text major-text-roadmap">
          <h2>Road Map</h2>
          <p>
            In VVCE, you will learn the basics of programming and statistics, which are key for data 
            science. Choose your professional elective as <strong>Data Mining</strong> in 5th Semester. Subjects like Python and machine learning are important for working with data. <br /> <br />
            Here are some tools and technologies you should learn:
          </p>
          <ul>
            <li>Python</li>
            <li>R Programming</li>
            <li>SQL</li>
            <li>Tableau</li>
            <li>Pandas, NumPy</li>
            <li>TensorFlow</li>
          </ul>
        </div>
        <div className="card-container-left">
          <img src={ds5} alt="Road Map Data Science" />
        </div>
      </div>

      {/* Careers Section */}
      <div className="section section-right career-section">
        <div className="major-text major-text-career">
          <h2>Careers</h2>
          <p>
            Data Science offers amazing career opportunities. Here are some roles you can explore:
          </p>
          <ul>
            <li>Data Analyst</li>
            <li>Data Scientist</li>
            <li>Machine Learning Engineer</li>
            <li>Business Intelligence Analyst</li>
            <li>Data Engineer</li>
          </ul>
        </div>
        <div className="card-container-right">
          <img src={ds6} alt="Data Science Careers" />
        </div>
      </div>
    </div>
  );
};

export default DataScience;
