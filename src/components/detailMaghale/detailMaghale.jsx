import React from "react";
import "./detailMaghale.css"
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";


const DetailMaghale = (props) => {

    return (
        <>
<<<<<<< HEAD
            <div className="card mb-3 main">
                <img src={props.newsById.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.newsById.title}</h5>
                    <p className="card-text">{props.newsById.text} </p>
                    <div className={"row"}>
                        <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                        <div className={"d-flex justify-content-end"}>
                            <span className="badge bg-primary ">{props.newsById.category}</span>
                        </div>
                    </div>

                </div>
            </div>
=======
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


>>>>>>> sina
        </>


    );

}

export default DetailMaghale;
