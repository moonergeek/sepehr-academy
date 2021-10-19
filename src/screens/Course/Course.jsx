import React from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Course = (props) => {
  return (
    <>
      <Header menuList={props.menuList}/>
      <div className="container">
        <div className="row mt-5">
          <div className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 light-green-shadow flex-column justify-content-md-center p-4">
            <CourseDetails />
          </div>

          <div className="col-lg-8 order-first order-lg-last d-flex  flex-column align-items-center">
            <CourseImg />
            <CourseInfo />
          </div>
        </div>
      </div>
      <Footer footerInfo={props.footerInfo}/>
    </>
  );
};

export default Course;
