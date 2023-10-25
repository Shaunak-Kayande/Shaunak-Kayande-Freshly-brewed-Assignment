import React from "react";
import "./Home.css";
const home = () => {
  return (
    <div className="home" id="home">
      <div className="navbar">
        <div className="nav-buttons">
          <a className="nav-links" href="#home">
            <h5>Home</h5>
          </a>
          <a className="nav-links" href="#welcome">
            <h5>About</h5>
          </a>
          <a className="nav-links" href="#featured-courses">
            <h5>Course</h5>
          </a>
        </div>
        <h4>Smart Academy</h4>
        <button className="button-pink">Explore Course</button>
      </div>
      <div className="middle-content">
        <h1>Achieve your future With Smart Academy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
          sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit
          vel, ultricies dolor.
        </p>
        <button className="button-pink">Explore Course</button>
      </div>
    </div>
  );
};

export default home;
