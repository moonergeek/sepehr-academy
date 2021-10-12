import React from "react";
import "./About.css";
import AboutImg from "./AboutImg/AboutImg";
import AboutTitle from "./AboutTitle/AboutTitle";
import AboutDes from "./AboutDes/AboutDes";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Title from "../../components/moshavere-req/Title/Title";

const About = (props) => {
  return (
    <>
      <Header menuList={props.menuList}/>
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
      <Footer footerInfo={props.footerInfo}/>
    </>
  );
};

export default About;
