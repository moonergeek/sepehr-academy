import React from 'react';
import "./coursesBody.css"
import userIcon from "../../../assets/img/user light blue.png"
import lineImage from "../../../assets/img/Component 8 – 1.png"
import stopWatch from "../../../assets/img/stopwatch.png"

const CoursesBody = (props) => {
    return (
        <>
            <div className="course-body mt-4">
                <div className="row">
                    {Object.keys(props.courseInfo).map(item => <div key={item} className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card mb-5">
                            <img src={props.courseInfo[item].imgAddress} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{props.courseInfo[item].title} </h5>
                                <p className="card-text">
                                    <div className="mt-2">
                                        <img className="card-user-image col-8" src={userIcon}
                                             alt=""/>
                                        <span
                                            className="course-teacher col-sm-4 me-1 ">{props.courseInfo[item].teacher}</span>
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
                                                        className="card-time me-1">{props.courseInfo[item].time}</span>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="d-flex justify-content-end">
                                                        <span
                                                            className="card-price"> {props.courseInfo[item].price}</span>
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
