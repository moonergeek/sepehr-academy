import React from "react";
import CommentForm from "./CommentForm";
import CommentShow from "./CommentShow";
import CommentPerm from "./CommentPerm";
import { useParams } from "react-router-dom";
import { getItem } from "../../core/services/storage/storage";

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
        <h4 className="text-color fw-bold">بخش نظرات</h4>
        {getItem("token") ? (
          <CommentForm initialValues={initialValues} />
        ) : (
          <div className="d-flex justify-content-center">
            <CommentPerm />
          </div>
        )}
        <CommentShow initialValues={initialValues} />
      </div>
    </div>
  );
};

export default Comments;
