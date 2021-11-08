import React from 'react';
import "./coursesBody.css"
import userIcon from "../../../assets/img/user light blue.png"
import lineImage from "../../../assets/img/Component 8 – 1.png"
import stopWatch from "../../../assets/img/stopwatch.png"
import {Link} from "react-router-dom";

const CoursesBody = (props) => {
    return (
        <>
            <div className="course-body mt-4">
                <div className="row">
                    {Object.entries(props.courseInfo).map(item => <div key={item} className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card mb-5">
                            <img src={item[1].course.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <Link className={"decoration-none"} to={"/course"}>
                                    <h5 className="card-title"> {item[1].course.courseName} </h5>
                                </Link>
                                <p className="card-text">
                                    <div className="mt-2">
                                        <img className="card-user-image col-8" src={userIcon}
                                             alt=""/>
                                        <span
                                            className="course-teacher col-sm-4 me-1 ">{item[1].teacher.fullName}</span>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src={lineImage} className="card-line"
                                                     alt=""/>
                                            </div>
                                        </div>
                                        <div className="card-end">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <img src={stopWatch} className="card-stopwatch"
                                                         alt=""/>
                                                    <span
                                                        className="card-time me-1">{"7:28:00"}</span>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="d-flex justify-content-end">
                                                        <span
                                                            className="card-price"> {`${item[1].cost} تومان`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>

        </>
    );
};

export default CoursesBody;
