import React, { useState } from "react";
import CommentForm from "./CommentForm";

const Comments = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <hr />
        <CommentForm />
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default Comments;
