import React from "react";
import "./FeaturedCourses.css";
import { CoursesData } from "../../data/Courses-data";

const FeaturedCourses = () => {
  return (
    <div className="featured-courses" id="featured-courses">
      <h2>Our Featured Course at Smart Academy</h2>
      <div className="course-grid">
        {CoursesData.map((item, index) => {
          return (
            <div className="course">
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCourses;
