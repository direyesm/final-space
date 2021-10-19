import React from "react";
import "../assets/styles/components/Footer.scss";
import Banner from "../assets/static/images/banner.gif";

const Footer = () => (
  <footer className="footer">
    <div className="footer_made">
      Made with by
      <a
        href="https://www.linkedin.com/in/diegomrm/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        {""}
        <span>Diego Reyes</span>
      </a>
    </div>
    <img className="footer-img" src={Banner} alt=" moonkake" />
  </footer>
);

export default Footer;
