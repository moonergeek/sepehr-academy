import React from 'react';
import "./comment.css"
import commentIcon from "../../../assets/img/icons/comment.png";

const Comment = () => {
    return (
        <>
            <img className="doc-icon" src={commentIcon}
                 alt="comment"/>
        </>
    );
};

export default Comment;
