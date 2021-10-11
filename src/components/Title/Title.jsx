import React from 'react';
import "./Title.css";


function Title(props) {
    return (
        <div className={"main container mt-1"}>
            <h2>{props.Title}</h2>
        </div>
    );
}

export default Title;