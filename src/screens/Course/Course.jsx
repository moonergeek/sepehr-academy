import React from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
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
};

export default Course;
