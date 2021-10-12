import React from 'react';
import "./Title.css";


function Title(props) {
    return (
        <div className={"mainDiv container mt-5"}>

            <h2>{props.Title} </h2>
        </div>
    );
}

export default Title;