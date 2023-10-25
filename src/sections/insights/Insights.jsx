import React from "react";
import { InsightsData } from "../../data/Insights-data";
import "./Insights.css";

const Insights = () => {
  return (
    <div className="insights">
      <h2>Articles And Insight</h2>
      <div className="articles">
        {InsightsData.map((item, index) => {
          return (
            <div className="article">
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <p>{item.p}</p>
              <button className="button-pink">Read More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insights;
