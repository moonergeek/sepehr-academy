import React, {Component, useState} from "react";
import "./card.css"
import BlogLine from "../common/blogLine/blogLine";
import ReadBtn from "../common/readBtn/readBtn";
import Comment from "../common/comment/comment";
import Like from "../common/like/like";
import {Link, Route, Router, Switch} from "react-router-dom";

const Card = (props) => {


    return (

        <>

            <div className="course-body mt-4 container">
                <div className="row">

                    {Object.keys(props.fullInfo).map(blogObj => <div key={blogObj}
                                                                     className="col-sm-12 col-md-6 col-lg-4">
                        <Link to={"/blog/maghale/" + props.fullInfo[blogObj].id} className={"Link"}>
                            <div className="card mb-5">
                                <img src={props.fullInfo[blogObj].imgAddress} className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <p className="document-number">{props.fullInfo[blogObj].docNumber}</p>
                                    <h5 className="doc-title">{props.fullInfo[blogObj].title} </h5>
                                    <p className="card-text">
                                        <div className="mt-2">
                                            <p className="document-details">{props.fullInfo[blogObj].docDetails}
                                            </p>
                                            <div className="row">
                                                <BlogLine/>
                                            </div>
                                            <div className="card-end">
                                                <div className="row">
                                                    <ReadBtn/>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="d-flex justify-content-end">
                                                            <Comment/>
                                                            <Like/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>)}

                </div>
            </div>

        </>
    )


}

export default Card;