import React from "react";
import "./card.css"
import BlogLine from "../common/blogLine/blogLine";
import ReadBtn from "../common/readBtn/readBtn";
import Comment from "../common/comment/comment";
import Like from "../common/like/like";
import {Link} from "react-router-dom";

const Card = (props) => {


    return (

        <>


            <div className="course-body mt-4 container">
                <div className="row">
                    {Object.keys(props.fullInfo).map(blogObj => <div key={blogObj}
                                                                     className="col-sm-12 col-md-6 col-lg-4">
                        <Link to={`/blog/maghale/${props.fullInfo[blogObj]._id}`} className={"Link"}>

                            <div className="card mb-5">
                                <img src={props.fullInfo[blogObj].image} className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <p className="document-number">{" مقاله شماره " + (props.fullInfo.findIndex(x => x._id === props.fullInfo[blogObj]._id) + 1)}</p>
                                    <h5 className="doc-title">{props.fullInfo[blogObj].title} </h5>
                                    <p className="card-text">
                                        <div className="mt-2">
                                            <p className="document-details">{props.fullInfo[blogObj].text}
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
