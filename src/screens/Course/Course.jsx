import React from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
import Comments from "../../components/Comments/Comments";
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getItem } from "../../core/services/storage/storage";
import { Link } from "react-router-dom";

const Course = (props) => {
  return (
    <>
      <Header menuList={props.menuList} />
      <div className="container">
        <div className="row mt-5">
          <div className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 light-green-shadow flex-column justify-content-md-center p-4">
            <CourseDetails />
          </div>

          <div className="col-lg-8 order-first order-lg-last d-flex flex-column align-items-center">
            <CourseImg />
            <CourseInfo />
            {getItem("token") ? (
              <Comments />
            ) : (
              <>
                <h5 className="mt-3 text-color">
                  برای نوشتن نظر باید در سایت عضو باشید
                </h5>

                <div className="d-flex">
                  <Link to="/login">
                    <button type="button" class="btn btn-primary">
                      صفحه ورود
                    </button>
                  </Link>
                  <Link to="/register">
                    <button type="button" class="btn btn-danger marg">
                      صفحه ثبت نام
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer footerInfo={props.footerInfo} />
    </>
  );
};

export default Course;
