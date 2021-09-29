import React from "react";
import CourseInfo from "./CourseInfo/CourseInfo";
import CourseImg from "./CourseImg/CourseImg";
import CourseDetails from "./CourseDetails/CourseDetails";
import "./Course.css";

const Course = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 shadow-sm flex-column justify-content-md-center p-4">
            <CourseDetails />
          </div>

          <div className="col-lg-8 order-first order-lg-last d-flex shadow-sm flex-column align-items-center">
            <CourseImg />
            <CourseInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
