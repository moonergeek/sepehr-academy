import React from 'react';
import "./courseHeader.css"

const SeeAllBtn = (props) => {
    return (
        <>
            <button className="btn btn-see-all ">{props.coursesBtnTitle}</button>
        </>
    );
};

export default SeeAllBtn;
