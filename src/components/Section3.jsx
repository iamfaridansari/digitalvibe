import React from "react";
import building3 from "../assets/images/building3.png";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="inner-section">
        <img src={building3} alt="" />
        <div className="section3-grid">
          <div className="div1">
            <h1>26</h1>
            <p>Years in industry</p>
          </div>
          <div className="div2">
            <h1>25</h1>
            <p>Projects delivered on time</p>
          </div>
          <div className="div3">
            <h1>2500+</h1>
            <p>Happy customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
