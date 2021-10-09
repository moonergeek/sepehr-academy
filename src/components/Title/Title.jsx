import React from 'react';
import "./Title.css";


function Title(props) {
    return (
        <div className={"main container mt-3"}>
            <h2>{props.moshavereTitle}</h2>
        </div>
    );
}

export default Title;