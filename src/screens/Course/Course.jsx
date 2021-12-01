import React, {useEffect, useState} from "react";
import CourseInfo from "../../components/Course/CourseInfo/CourseInfo";
import CourseImg from "../../components/Course/CourseImg/CourseImg";
import CourseDetails from "../../components/Course/CourseDetails/CourseDetails";
import Comments from "../../components/Comments/Comments";
import "../../components/Course/Course.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import GetCourseById from "../../core/services/API/course/getCourseById.api";
import Loading from "../../components/common/loading/loadingForHomePage";

const Course = (props) => {

    const {id} = useParams();

    const [courseByIdData, setCourseByIdData] = useState([]);
    const [loadingForCourse, setLoadingForCourse] = useState(false);
    const getCourseById = async () => {
        const result = await GetCourseById(id);
        setCourseByIdData(result);
        setLoadingForCourse(true);
    };
    useEffect(() => {
        getCourseById();
    }, []);
    return (
        <>

            <>
                <Header menuList={props.menuList} userInfo={props.userInfo}/>
                <div className="container">
                    <div className="row mt-5">
                        <div
                            className="details col-lg-4 order-last order-lg-first col-md-12 col-md-12 light-green-shadow flex-column justify-content-md-center p-4">
                            <CourseDetails courseData={courseByIdData}/>
                        </div>

                        <div className="col-lg-8 order-first order-lg-last d-flex flex-column align-items-center">
                            {loadingForCourse ? (<CourseImg courseData={courseByIdData}/>) : (
                                <Loading/>
                            )}


                            <CourseInfo courseData={courseByIdData}/>

                            <Comments/>
                        </div>
                    </div>
                </div>
                <Footer footerInfo={props.footerInfo}/>{" "}
            </>

        </>
    );

};

export default Course;
