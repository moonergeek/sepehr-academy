import React from "react";
import "./About.css";
import AboutImg from "./AboutImg/AboutImg";
import AboutTitle from "./AboutTitle/AboutTitle";
import AboutDes from "./AboutDes/AboutDes";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center mb-3">
            <AboutImg />
          </div>
          <div className="d-flex mb-2">
            <AboutTitle />
          </div>
          <div className="d-flex justify-content-center mb-3">
            <AboutDes />
          </div>
        </div>
      </div> 
    </>
  );
};

export default About;
