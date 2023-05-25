import React from "react";
import building5 from "../assets/images/building5.png";
import degree from "../assets/images/360.png";

const Section6 = () => {
  return (
    <div className="section6">
      <img src={building5} className="banner-img" alt="" />
      <div className="degree p-4">
        <img src={degree} alt="" />
      </div>
      <div>
        <h1 className="text-white fw-bold text-uppercase">E-tour</h1>
        <h2 className="text-white fw-bold">Experience your dream space</h2>
        <button className="button mt-5">experience now</button>
      </div>
    </div>
  );
};

export default Section6;
