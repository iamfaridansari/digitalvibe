import React, { useRef } from "react";
import logo from "../assets/images/logo.png";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navbar = useRef();
  const menu = () => {
    navbar.current.classList.add("active");
  };
  const closeMenu = () => {
    navbar.current.classList.remove("active");
  };
  return (
    <>
      <header className="p-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-between gap-4">
              <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Gallery/e-tour</li>
                <li>Contact</li>
              </ul>
              <div className="d-flex align-items-center justify-content-between gap-4">
                <div className="menu d-lg-none" onClick={menu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <a href="/" className="enquire d-sm-block d-none">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  */}
      <nav ref={navbar}>
        <div className="left">
          <div className="nav-container">
            <div className="close-menu" onClick={closeMenu}>
              <FaTimes />
            </div>
            <div className="d-flex align-items-start justify-content-between mt-sm-0 mt-4">
              <ul className="main-links">
                <li>About</li>
                <li>Projects</li>
                <li>Gallery/E-tour</li>
                <li>Contact</li>
              </ul>
              <ul className="other-links">
                <li>NRI corner</li>
                <li>Career</li>
                <li>Blogs</li>
                <li>CRM</li>
              </ul>
            </div>
            <ul className="social-links">
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div>
            <h2>Let's find your comfort House!</h2>
            <p>
              Find Comfort in the house with us, want to find a home? We are
              ready to help you wholeheartedly based on what you need
            </p>
            <button className="button invert-button mt-4">
              view all projects
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
