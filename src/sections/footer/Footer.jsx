import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="description">
        <h3>Smart Academy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          venenatis dolor vel lacus laoreet tristique. Nunc bibendum justo
        </p>
        <div className="social">
          <img src="./images/behance.svg" alt="" />
          <img src="./images/dribbble.svg" alt="" />
          <img src="./images/facebook.svg" alt="" />
          <img src="./images/instagram.svg" alt="" />
        </div>
      </div>
      <div className="quick-links">
        <h4>Quick Links</h4>
        <div className="links">
          <p>Course</p>
          <p>Our Service</p>
          <p>Countact Us</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="course-links">
        <h4>Course</h4>
        <div className="links">
          <p>Music Course</p>
          <p>Art And Craft Course</p>
          <p>Aerobic Course</p>
          <p>Science Course</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
