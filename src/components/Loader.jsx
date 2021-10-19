import React from "react";
import "../assets/styles/components/Loader.scss";
import amarrillo from "../assets/static/images/amarillo.gif";

const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={amarrillo} alt="Amarrilo Loader" />
    <span className="loader-text">Loading.....</span>
  </div>
);

export default Loader;
