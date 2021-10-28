import React from "react";
import { useFormik } from "formik";
import LoginButton from "../LoginButton/LoginButton";
import { Link } from "react-router-dom";
import http from "../../../Core/Interceptor";
import { getItem, setItem, removeItem } from "../../../Core/Storage";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = async (values) => {
  try {
    const result = await  http.post(
      `https://academy-tabestan.herokuapp.com/api/auth/login`,
      values
    );

    setItem("token", result.data.result.jwtToken);
    alert("خوش اومدی");
  } catch (err) {
    console.log(err);
  }
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "ایمیل خود را وارد کنید";
  }

  if (!values.password) {
    errors.password = "رمز عبور خود را وارد کنید";
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
          type="email"
          className="form-control"
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

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="رمز عبور"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <div className="text-danger mt-1">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
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
