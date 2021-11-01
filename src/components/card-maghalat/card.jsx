import React, {Component, useEffect, useState} from "react";
import "./card.css"
import BlogLine from "../common/blogLine/blogLine";
import ReadBtn from "../common/readBtn/readBtn";
import Comment from "../common/comment/comment";
import Like from "../common/like/like";
import {Link, Route, Router, Switch} from "react-router-dom";
import axios from "axios";

const Card = (props) => {

    const [getData , setData] = useState([]);

    const getBlog = () => {
        axios.get('https://academy-visual.herokuapp.com/api/news')
            .then((response) => {

                const myBlog = response.data.result;
                setData(myBlog);
            });
    }
    useEffect(() => getBlog(), []);


    return (

        <>

            <div className="course-body mt-4 container">
                <div className="row">

                    {getData.map(value => <div key={value}
                                                                     className="col-sm-12 col-md-6 col-lg-4">
                        <Link to={"/blog/maghale/" + value._id} className={"Link"}>
                            <div className="card mb-5">
                                <img src={value.image} className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <p className="document-number">{value.category}</p>
                                    <h5 className="doc-title">{value.title} </h5>
                                    <p className="card-text">
                                        <div className="mt-2">
                                            <p className="document-details">{value.text}
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