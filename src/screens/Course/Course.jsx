import React from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
<<<<<<< HEAD
import Comments from "../../components/Comments/Comments";
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { getItem } from "../../core/services/storage/storage";

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
=======
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {Spinner} from "react-bootstrap";

const Course = (props) => {
    const loading = props.loading;
    return (

        <>

            <div>
                <Header menuList={props.menuList}/>
                {loading ? <div className="container">
                    <div className="row mt-5">
                        <div
                            className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 light-green-shadow flex-column justify-content-md-center p-4">

                            <CourseDetails/>
                        </div>

                        <div className="col-lg-8 order-first order-lg-last d-flex  flex-column align-items-center">
                            <CourseImg/>
                            <CourseInfo/>
                        </div>
                    </div>
                </div> : <Spinner animation="border" variant="success" className={"load"}/>}

                <Footer footerInfo={props.footerInfo}/>
            </div>
        </>
    );
>>>>>>> sina
};

export default Course;
