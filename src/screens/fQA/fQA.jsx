import React from 'react';
import "./fQA.css"
import Badge from "@mui/material/Badge";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Accordion from "../../components/acc-question/accordion";
import ForgetPass from "../../components/forgetPass/forgetPass";
import Header from "../../components/header/header";

const FQA = (props) => {
    return (
        <>
            <Header menuList={props.menuList}/>
            <div className={"container mt-5 pt-2"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                    <nav className="nav nav-pills nav-fill">

                        <Badge badgeContent={12} color="success">

                                <NavLink className="nav-link question-link" aria-current="page" to={"/questions/all"}>همه
                                    موارد</NavLink>
                        </Badge>

                        <NavLink className="nav-link question-link" to={"/questions/courses"}>مربوط به خرید دوره ها </NavLink>
                        <NavLink className="nav-link question-link" to={"/m"}>پروفایل و ثبت نام</NavLink>
                        <NavLink className="nav-link question-link" to={"/l"}>سوالات فنی</NavLink>
                    </nav>
                </div>
                </div>
                <div className={"row mt-3"}>
                    <div className={"col-sm-12"}>
                    <Switch>

                        <Route path={"/questions/all"} component={() => <Accordion/>}/>
                        <Route path={"/questions/courses"} component={() => <ForgetPass/>}/>
                        <Redirect from={"/questions"} to={"/questions/all"}/>
                    </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FQA;
