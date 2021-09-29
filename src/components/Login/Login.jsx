import React from "react";
import login from "../../assets/img/login.svg";
import "./Login.css";
import { useFormik } from "formik";

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

const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="login-image order-lg-last mt-4 col-md-12 col-lg-7 d-flex justify-content-center align-items-start">
          <img src={login} alt="login" />
        </div>
        <div className="login-form shadow-sm order-lg-first col-md-12 col-lg-5 mt-5 d-flex flex-column">
          <div
            style={{
              backgroundColor: "#82D8B9",
              width: "200px",
              margin: "0 auto",
            }}
            className="btn-container d-inline-flex flex-wrap justify-content-center mb-1 rounded-pill"
          >
            <button
              style={{ color: "#323E73" }}
              className="btn rounded-pill m-1"
            >
              ثبت نام
            </button>
            <button
              style={{ color: "#323E73" }}
              className="btn rounded-pill bg-light m-1"
            >
              ورود کاربران
            </button>
          </div>
          <h5
            className="mt-4 d-flex justify-content-center text-color"
            style={{ color: "#323E73" }}
          >
            وارد حساب کاربری خود شوید
          </h5>
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
              <div className="text-danger mt-1">
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
                <a
                  style={{ textDecoration: "none" }}
                  className="text-success"
                  href="#"
                >
                  رمز عبور خود را فراموش کردم
                </a>
              </div>
            </div>
            <div className="btn-container d-flex justify-content-center">
              <button
                style={{ backgroundColor: "#82D8B9", color: "#323E73" }}
                type="submit"
                className="btn"
              >
                ورود کاربر
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
