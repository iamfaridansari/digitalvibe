import React, { useEffect, useRef } from "react";
import building1 from "../assets/images/building1.png";
import building2 from "../assets/images/building2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headings = useRef();
  useEffect(() => {
    gsap.from(headings.current, {
      transform: "translateY(-100px)",
      duration: 2,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 75%",
        end: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div className="container py-4 section2">
      <div className="tagline" ref={headings}>
        <h1>
          <span className="tag1">We are</span>
          <span className="tag2">Particular</span>
        </h1>
      </div>
      <div className="section2-grid mt-md-0 mt-">
        <div className="div1">
          <h2 className="mb-4">
            Designing <span>Excellence & Delighting</span> customers at every
            touch point
          </h2>
          <p className="embrace">
            <span>Embrace</span> the highest standard of living and create{" "}
            <span>unforgattable experience</span> for life. Our team at ANC Co.
            is furnishing your <span>desired spaces</span> within{" "}
            <span>committed timelines.</span>
          </p>
        </div>
        <div className="div2">
          <img src={building1} className="dual-color" alt="" />
        </div>
        <div className="div3">
          <img src={building2} className="dual-color" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
