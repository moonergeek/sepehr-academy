import React from "react";
import { useFormik } from "formik";
import LoginButton from "../LoginButton/LoginButton";
import {Link} from "react-router-dom";

const initialValues = {
  name: "",
  pass: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "نام کاربری خود را وارد کنید";
  }

  if (!values.pass) {
    errors.pass = "رمز عبور خود را وارد کنید";
  }

  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="نام کاربری"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          autoComplete="off"
        />
        <div className="mt-1 text-danger">
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="رمز عبور"
          id="pass"
          name="pass"
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />
        <div className="text-danger mt-1">
          {formik.touched.pass && formik.errors.pass ? (
            <div>{formik.errors.pass}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <div className="form-text">
          <Link className="forget-pass text-success" to={"/forgetPassword"}>
            رمز عبور خود را فراموش کردم
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;
