import React, { useState } from "react";
import CommentForm from "./CommentForm";

const Comments = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <CommentForm />
      </div>
    </div>
  );
};

export default Comments;
