import React, {Component, Fragment, useEffect, useState} from "react";
import "./detailMaghale.css"

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import axios from "axios";

const DetailMaghale = (props) => {

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
            <Router>
                <Switch>

                    {getData.map(value =>
                        <Route key={value} path={"/blog/maghale/" + value._id}>

                            <div className="card mb-3 main">
                                <img src={value.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.text}</p>
                                    <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                                </div>
                            </div>

                        </Route>




                    )}


                </Switch>
            </Router>

        </>


    );

}

export default DetailMaghale;