import React from "react";
import building1 from "../assets/images/building1.png";

const Card = () => {
  return (
    <div className="card-section">
      <img src={building1} alt="" />
      <div className="card-details mt-5">
        <h2 className="mb-4">ABC Ultimus</h2>
        <p className="my-4 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          veritatis voluptatibus blanditiis eos necessitatibus.
        </p>
        <div className="config mb-5">
          <p className="pe-4">City, Mumbai</p>
          <p className="ps-4">2,2.5,3,3.5 BHKs</p>
        </div>
        <p>View details</p>
      </div>
    </div>
  );
};

export default Card;
