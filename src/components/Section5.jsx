import React from "react";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section5 = () => {
  return (
    <div className="section5 py-4">
      <div className="container py-4">
        <ul className="tab-section">
          <li className="active">Residential</li>
          <li>Commercial</li>
          <li>Speciality</li>
        </ul>

        {/*  */}
        <div className="carousel-container mt-sm-5 mt-4">
          <div className="left-button">
            <FaArrowLeft />
          </div>
          <div className="right-button">
            <FaArrowRight />
          </div>
          <div className="inner-carousel">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="button">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
