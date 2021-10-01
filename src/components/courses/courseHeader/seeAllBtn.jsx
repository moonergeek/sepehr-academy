import React from 'react';
import "./courseHeader.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const SeeAllBtn = (props) => {
    return (
        <>
            <Link to='/maghalat'>
            <button className="btn btn-see-all ">{props.coursesBtnTitle}</button>
            </Link>
        </>
    );
};

export default SeeAllBtn;
