import React from "react";

const CourseImg = (props) => {
  return <img className="course-img" src={props.courseData.image} alt="courseImg" />;
};

export default CourseImg;
