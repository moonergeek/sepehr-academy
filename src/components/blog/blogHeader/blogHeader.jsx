import React from 'react';
import "../../courses/courseHeader/courseHeader.css"
import lineImage from "../../../assets/img/lines/header-line.png"
import {Link} from "react-router-dom";
import SeeAllBtn from "../../courses/courseHeader/seeAllBtn";

const BlogHeader = (props) => {
    return (
        <>
            <div className="course-header">
                <div className="row">
                    <div className="col-sm-12">
                <span className="header-title">
                    {props.blogTitle}
                </span>
                        <div className="d-flex justify-content-end">
                            <form className="d-flex">
                                <Link to={"/blog"}>
                                    <SeeAllBtn coursesBtnTitle={props.blogBtnTitle}/>
                                </Link>
                            </form>
                        </div>

                    </div>
                    <div className="row">
                        <img className="col-sm-2 line-image" src={lineImage} alt=""/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogHeader;
