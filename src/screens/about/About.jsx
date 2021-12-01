import React from "react";
import "../../components/about/About.css";
import AboutImg from "../../components/about/AboutImg/AboutImg";
import AboutTitle from "../../components/about/AboutTitle/AboutTitle";
import AboutDes from "../../components/about/AboutDes/AboutDes";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Title from "../../components/moshavere-req/Title/Title";

const About = (props) => {
  return (
    <>
        <Title Title={"درباره پژوهشگاه"}/>

      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center my-3">
            <AboutImg />
          </div>
          <div className="d-flex mb-2">
            <AboutTitle />
          </div>
          <div className="d-flex justify-content-center my-3">
            <AboutDes />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
