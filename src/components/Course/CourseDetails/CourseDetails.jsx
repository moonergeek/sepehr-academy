import React from "react";
import CourseData from "./CourseData/CourseData";
import SignButton from "./SignButton/SignButton";
import AskQuestions from "./AskQuestions/AskQuestions";
import Sharing from "./Sharing/Sharing";


const CourseDetails = (props) => {
  return (
    <>
      <CourseData courseData={props.courseData} />
      <SignButton />
      <AskQuestions />
      <div className="share mt-5 d-flex flex-column align-items-center flex-md-row justify-content-evenly">
        <Sharing />
      </div>
    </>
  );
};

export default CourseDetails;
