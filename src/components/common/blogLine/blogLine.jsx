import React from 'react';
import blogLine from "../../../assets/img/Component 8 – 1.png";
import "./blogLine.css"

const BlogLine = () => {
    return (
        <>
            <div className="col-sm-12">
                <img src={blogLine}
                     className="doc-line" alt=""/>
            </div>
        </>
    );
};

export default BlogLine;
