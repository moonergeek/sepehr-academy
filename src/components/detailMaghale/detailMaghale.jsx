import React, {Component, Fragment, useEffect, useState} from "react";
import "./detailMaghale.css"

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import axios from "axios";
import {Spinner} from "react-bootstrap";

const DetailMaghale = (props) => {

    const [getData , setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getBlog = async () => {
        try {
            await axios.get('https://academy-visual.herokuapp.com/api/news')
                .then((response) => {

                    const myBlog = response.data.result;
                    setData(myBlog);

                });
            setLoading(true);

        }
        catch (e){
            console.log(e);
        }

    }
    useEffect(() => getBlog(), []);


    return (
        <>
            {loading ?             <Router>
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
            </Router> :   <Spinner animation="border" variant="success" className={"load"}/>}


        </>


    );

}

export default DetailMaghale;