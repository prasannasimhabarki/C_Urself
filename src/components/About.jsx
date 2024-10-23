import React from "react";
import aboutPlaceholder from "../Assets/Games/myPhoto.jpeg"; // Placeholder for about image
import "./About.css"; // Importing CSS file for styles
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="section section-left about-section">
        <div className="card-container-left">
          <img src={aboutPlaceholder} alt="About me" />
        </div>
        <div className="major-text major-text-about">
          <h2>About Me</h2>
          <p>
            Hi, I’m Prasanna Simha Barki, a full stack Java developer currently working at
            TEKsystems Global Services, Bengaluru. I created this page to guide my juniors
            who often feel confused about career paths in Computer Science. I want to share
            my knowledge and help them explore different domains, such as Web Development,
            Mobile Development, Data Science, and more. This page is designed to provide
            a clear roadmap and resources to help them make informed decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
