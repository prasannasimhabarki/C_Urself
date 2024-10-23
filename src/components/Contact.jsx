import React from "react";
import linkedinPlaceholder from "../Assets/Games/link.gif"; // Placeholder for LinkedIn image
import instagramPlaceholder from "../Assets/Games/ins.gif"; // Placeholder for Instagram image
import "./Contact.css"; // Importing CSS file for styles
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="section section-center contact-section">
      <div className="card-container-center">
        <img src={linkedinPlaceholder} alt="LinkedIn" />
        <a
          href="https://linkedin.com/in/prasannasimhabarki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </div>
      <div className="card-container-center" style={{ marginTop: "20px" }}>
        <img src={instagramPlaceholder} alt="Instagram" />
        <a
          href="https://instagram.com/prasannasimhabarki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Instagram
        </a>
      </div>
    </div>
    </>
  );
};

export default Contact;
