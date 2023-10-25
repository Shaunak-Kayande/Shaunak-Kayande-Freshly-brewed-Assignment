import React from "react";
import "./Services.css";
import { ServicesData } from "../../data/Services-data";

const Services = () => {
  return (
    <div className="services">
      <h2>Smart Academy offers services like</h2>
      <div className="services-content">
        {ServicesData.map((item, index) => {
          return (
            <div className="service" key={index}>
              <img src={item.icon} alt="" />
              <h5>{item.title}</h5>
              <p>{item.p}</p>
            </div>
          );
        })}
      </div>
      <button className="button-pink">Read More</button>
    </div>
  );
};

export default Services;
