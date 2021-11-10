import React from 'react';
import "./serachbox.css"

const Input = (props) => {
    return (
        <>
            <input className="form-control me-2 Search-box" type="search"
                   placeholder={props.placeHolder}
                   aria-label="Search"/>
        </>
    );
};

export default Input;
