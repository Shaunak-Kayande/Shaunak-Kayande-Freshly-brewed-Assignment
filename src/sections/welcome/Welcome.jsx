import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome" id="welcome">
      <div className="welcome-content">
        <h2>Welcome to Smart Academy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          venenatis dolor
        </p>
        <button className="button-pink">Read More</button>
      </div>
      <div className="welcome-img">
        <img src="./images/welcome-img.png" alt="" />
      </div>
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo
          sed nisi vehicula, fringilla ante tincidunt. Sed sit amet{" "}
        </p>
        <div className="stats">
          <div>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3>20+</h3>
            <p>Total Course</p>
          </div>
          <div>
            <h3>50k+</h3>
            <p>Student Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
