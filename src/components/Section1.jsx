import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Section1 = () => {
  const headings = useRef();
  useEffect(() => {
    gsap.fromTo(
      headings.current,
      {
        transform: "scale(1.25)",
      },
      {
        transform: "scale(1)",
        duration: 2,
        transformOrigin: "left",
      }
    );
  }, []);
  return (
    <div className="container-fluid section1">
      <div className="container inner-section">
        <div className="pt-4">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="tagline" ref={headings}>
          <h1>
            <span className="tag1">We are</span>
            <span className="tag2">Particular</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
