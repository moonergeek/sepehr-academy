import React from 'react';
import "./Title.css";


function Title(props) {
    return (
        <div className={"mainDiv container mt-4"}>

            <h3>{props.Title} </h3>
        </div>
    );
}

export default Title;