import React from "react";
import { Link } from "react-router-dom";

const CommentPerm = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h5 className="mt-3 text-color">
        برای نوشتن نظر باید در سایت ما عضو باشید
      </h5>

      <div className="d-flex">
        <Link to="/register">
          <button type="button" className="btn panel-no mt-1">
            صفحه ثبت نام
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{ marginRight: "5px" }}
            type="button"
            className="btn sign-btn mt-1"
          >
            صفحه ورود
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CommentPerm;
