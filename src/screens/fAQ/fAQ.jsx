import React from 'react';
import "../../components/moshavere-req/fAQ.css"
import Badge from "@mui/material/Badge";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Accordion from "../../components/acc-question/accordion";
import Title from "../../components/moshavere-req/Title/Title";
import {
    accConfigListJson,
    accCoursesListJson,
    accFullListJson,
    accProfileListJson
} from "../../core/services/jsonFiles/accordionData.json";

const FAQ = (props) => {
    return (
        <>
            <Title Title={"سوالات متداول"}/>
            <div className={"container mt-4 pt-2"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                    <nav className="nav nav-pills nav-fill">

                        <Badge badgeContent={Object.keys(accFullListJson).length} color="success">

                                <NavLink className="nav-link question-NavLink" aria-current="page" to={"/questions/all"}>همه
                                    موارد</NavLink>
                        </Badge>

                        <NavLink className="nav-link question-NavLink" to={"/questions/courses"}>مربوط به خرید دوره ها </NavLink>
                        <NavLink className="nav-link question-NavLink" to={"/questions/profile"}>پروفایل و ثبت نام</NavLink>
                        <NavLink className="nav-link question-NavLink" to={"/questions/config"}>سوالات فنی</NavLink>
                    </nav>
                </div>
                </div>
                <div className={"row mt-3"}>
                    <div className={"col-sm-12"}>
                    <Switch>

                        <Route path={"/questions/all"} component={() => <Accordion accList={accFullListJson}/>}/>
                        <Route path={"/questions/courses"} component={() => <Accordion accList={accCoursesListJson}/>}/>
                        <Route path={"/questions/profile"} component={() => <Accordion accList={accProfileListJson}/>}/>
                        <Route path={"/questions/config"} component={() => <Accordion accList={accConfigListJson}/>}/>
                        <Redirect from={"/questions"} to={"/questions/all"}/>
                    </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
