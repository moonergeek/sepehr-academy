import React, {Component, Fragment} from "react";
import "./detailMaghale.css"

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

const DetailMaghale = (props) => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/blog/maghale/1"}>

                        <div className="card mb-3 main">
                            <img src={props.maghale[0].imgAddress} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{props.maghale[0].title}</h5>
                                    <p className="card-text">{props.maghale[0].desc}</p>
                                    <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                                </div>
                        </div>

                    </Route>

                    <Route path={"/blog/maghale/2"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[1].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[1].title}</h5>
                                <p className="card-text">{props.maghale[1].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/3"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[2].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[2].title}</h5>
                                <p className="card-text">{props.maghale[2].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/4"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[3].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[3].title}</h5>
                                <p className="card-text">{props.maghale[3].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/5"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[4].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[4].title}</h5>
                                <p className="card-text">{props.maghale[4].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/6"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[5].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[5].title}</h5>
                                <p className="card-text">{props.maghale[5].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/7"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[6].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[6].title}</h5>
                                <p className="card-text">{props.maghale[6].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/8"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[7].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[7].title}</h5>
                                <p className="card-text">{props.maghale[7].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/9"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[8].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[8].title}</h5>
                                <p className="card-text">{props.maghale[8].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/10"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[9].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[9].title}</h5>
                                <p className="card-text">{props.maghale[9].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/11"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[10].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[10].title}</h5>
                                <p className="card-text">{props.maghale[10].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/12"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[11].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[11].title}</h5>
                                <p className="card-text">{props.maghale[11].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/13"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[12].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[12].title}</h5>
                                <p className="card-text">{props.maghale[12].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>

                    <Route path={"/blog/maghale/14"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[13].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[13].title}</h5>
                                <p className="card-text">{props.maghale[13].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/15"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[14].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[14].title}</h5>
                                <p className="card-text">{props.maghale[14].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/16"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[15].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[15].title}</h5>
                                <p className="card-text">{props.maghale[15].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/17"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[16].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[16].title}</h5>
                                <p className="card-text">{props.maghale[16].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                    <Route path={"/blog/maghale/18"}>
                        <div className="card mb-3 main">
                            <img src={props.maghale[17].imgAddress} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.maghale[17].title}</h5>
                                <p className="card-text">{props.maghale[17].desc}</p>
                                <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                            </div>
                        </div>
                    </Route>


                </Switch>
            </Router>

        </>


    );

}

export default DetailMaghale;