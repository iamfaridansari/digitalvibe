import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid p-md-0">
      <div className="parent">
        <div className="div1">
          <img src={logo} alt="" />
        </div>
        <div className="div2">
          <ul className="main-links">
            <li>About</li>
            <li>Projects</li>
            <li>Gallery/E-tour</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="div3">
          <p className="mb-2">Other links</p>
          <ul className="other-links">
            <li>NRI corner</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>CRM</li>
          </ul>
        </div>
        <div className="div4">
          <p className="mb-2">ABC Co. projects</p>
          <ul className="other-links">
            <li>NRI corner</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>CRM</li>
          </ul>
        </div>
        <div className="div5">
          <p className="mb-2">Typology</p>
          <ul className="other-links">
            <li>NRI corner</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>CRM</li>
          </ul>
        </div>
        <div className="div6">
          <p>&copy; Copyright 2023 ABC Co.</p>
          <p>
            Website by <span>DigitalVibe</span>
          </p>
        </div>
        <div className="div7">
          <div>
            <p>LinkedIn</p>
          </div>
          <div>
            <p>Instagram</p>
          </div>
          <div>
            <p>Twitter</p>
          </div>
          <div>
            <p>Facebook</p>
          </div>
        </div>
        <div className="div8"> </div>
        <div className="div9"> </div>
      </div>
    </footer>
  );
};

export default Footer;
