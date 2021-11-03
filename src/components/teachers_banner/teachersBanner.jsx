import React from 'react';
import "./teachersBanner.css"
import why from "../../assets/img/why.png"
<<<<<<< HEAD
import "./miniSlider"
=======
>>>>>>> main

const TeachersBanner = (props) => {
    return (
        <>
            <section className="teachers-banner">
                <div className="container my-5 teacher-back">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="row">
                                <div className="col-sm-7">
                                    <p className="teacher-title"> {props.teachersTitle}</p>
                                    <div className="row">
                                        <div className="mini col-sm-12">
                                            <div id="miniSlideshow">

                                                <div id="miniGallery">
                                                    {Object.keys(props.teachersInfo).map(item => <div key={item}
                                                                                                      className="miniItems">
                                                        <img src={props.teachersInfo[item].imgAddress} alt="img"/>
                                                        <p className="mini-text">{props.teachersInfo[item].lastName} </p>
                                                    </div>)}
                                                </div>
                                                <div id="miniRight"/>
                                                <div id="miniLeft"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <img className="teacher-png mt-5 mb-3" src={why} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD

=======
>>>>>>> main
            </section>
        </>
    );
};

export default TeachersBanner;
