import React from "react";
import "./Testimonial.css";
import { TestimonialData } from "../../data/Testimonial-data";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2>Our Testimonial at Smart Academy</h2>
      <div className="grid-outer">
        <div className="testimonial-grid">
          <div></div>
          {TestimonialData.map((item, index) => {
            return (
              <div key={index} className="grid-element">
                <img src={item.img} alt="" />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
