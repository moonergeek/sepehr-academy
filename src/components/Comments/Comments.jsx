import React from "react";
import CommentForm from "./CommentForm";
import CommentShow from "./CommentShow";
import { useParams } from "react-router-dom";

const Comments = () => {
  const params = useParams().id;

  const initialValues = {
    postId: params,
    email: "",
    username: "",
    comment: "",
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <CommentForm initialValues={initialValues} />
        <CommentShow initialValues={initialValues} />
      </div>
    </div>
  );
};

export default Comments;
