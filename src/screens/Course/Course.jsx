import React, { useEffect, useState } from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
import Comments from "../../components/Comments/Comments";
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link, useParams } from "react-router-dom";
import { getItem } from "../../core/services/storage/storage";
import GetCourseById from "../../core/services/API/getCourseById.api";
import Loading from "../../components/common/loading/loadingForHomePage";
import CommentPerm from "./../../components/Comments/CommentPerm";

const Course = (props) => {
  const { id } = useParams();

  const [courseByIdData, setCourseByIdData] = useState([]);
  const getCourseById = async () => {
    const result = await GetCourseById(id);
    setCourseByIdData(result);
  };
  useEffect(() => {
    getCourseById();
  }, []);
  return (
    <>
      {props.loading ? (
        <>
          <Header menuList={props.menuList} />
          <div className="container">
            <div className="row mt-5">
              <div className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 light-green-shadow flex-column justify-content-md-center p-4">
                <CourseDetails courseData={courseByIdData} />
              </div>

              <div className="col-lg-8 order-first order-lg-last d-flex flex-column align-items-center">
                <CourseImg courseData={courseByIdData} />
                <CourseInfo courseData={courseByIdData} />

                <Comments />
              </div>
            </div>
          </div>
          <Footer footerInfo={props.footerInfo} />{" "}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Course;
