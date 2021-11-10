import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import LoginButton from "../Login/LoginButton/LoginButton";

const initialValues = {
  email: "",
  username: "",
  comment: "",
};

const onSubmit = (values) => {
  const userComment = {
    email: values.email,
    username: values.username,
    comment: values.comment,
  };

  console.log(userComment);
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "ایمیل خود را وارد کنید";
  }

  if (!values.username) {
    errors.username = "نام کاربری خود را وارد کنید";
  }

  if (!values.comment) {
    errors.comment = "نظر خود را وارد کنید";
  }

  return errors;
};

const CommentForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <h4 className="text-color d-flex justify-content-center">بخش نظرات</h4>
      <form onSubmit={formik.handleSubmit} className="mt-4 d-flex flex-column align-items-center">
        <div className="mb-4">
          <input
            type="text"
            className="form-control border"
            placeholder="نام کاربری"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="mt-1 text-danger">
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="form-control border"
            placeholder="ایمیل"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="mt-1 text-danger">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            type="textarea"
            rows="6"
            className="form-control border"
            placeholder="متن مورد نظر"
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
            onBlur={formik.handleBlur}
          />

          <div className="text-danger mt-1">
            {formik.touched.comment && formik.errors.comment ? (
              <div>{formik.errors.comment}</div>
            ) : null}
          </div>
        </div>
        <div className="d-flex">
          <button className="btn btn-success">ثبت نظر</button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
