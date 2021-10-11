import React, {Component, Fragment} from "react";
import "./detailMaghale.css"
import imgMaghale from "../../assets/img/img-maghale.png";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

const DetailMaghale = (props) => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/maghalat/maghale/1"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[0].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[0].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[0].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[0].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/2"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[1].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[1].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[1].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[1].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/3"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[2].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[2].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[2].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[2].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/4"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[3].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[3].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[3].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[3].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/5"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[4].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[4].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[4].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[4].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/6"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[5].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[5].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[5].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[5].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/7"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[6].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[6].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[6].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[6].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/8"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[7].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[7].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[7].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[7].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/9"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[8].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[8].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[8].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[8].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/10"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[9].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[9].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[9].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[9].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/11"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[10].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[10].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[10].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[10].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/12"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[11].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[11].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[11].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[11].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/13"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[12].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[12].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[12].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[12].desc}</p>


                    </Route>

                    <Route path={"/maghalat/maghale/14"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[13].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[13].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[13].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[13].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/15"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[14].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[14].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[14].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[14].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/16"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[15].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[15].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[15].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[15].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/17"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[16].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[16].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[16].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[16].desc}</p>


                    </Route>


                    <Route path={"/maghalat/maghale/18"}>
                        <div className={"container mt-3 Image"}>
                            <img src={props.maghale[17].imgAddress} className={"container mt-3"} alt={".."}/>
                        </div>
                        <h1 className={"Title"}> {props.maghale[17].title}</h1>
                        <div className={"container mt-3 Info"}>
                            <span className={"Author"}>سینا رضایی</span>
                            <span className={"Date"}>دیروز</span>
                        </div>
                        <h3 className={"Topic"}>{props.maghale[17].docDetails}</h3>
                        <p className={"Desc container mt-3"}>{props.maghale[17].desc}</p>


                    </Route>


                </Switch>
            </Router>

        </>


    );

}

export default DetailMaghale;