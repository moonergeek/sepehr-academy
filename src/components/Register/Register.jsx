import React from "react";
import register from "../../assets/img/register.svg";
import "./Register.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  pass: "",
  email: "",
  pass2: "",
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

  if (!values.email) {
    errors.email = "ایمیل خود را وارد کنید";
  }

  if (!values.pass2) {
    errors.pass2 = "رمز عبور خود را تکرار کنید";
  }

  return errors;
};

const Register = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="shadow-sm login-image order-lg-last mt-4 col-md-12 col-lg-7 d-flex justify-content-center align-items-start">
          <img
            src={register}
            alt="register"
            style={{ width: "573px", height: "316px" }}
          />
        </div>
        <div className="login-form order-lg-first col-md-12 col-lg-5 mt-5 d-flex flex-column">
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
              className="btn rounded-pill bg-light m-1"
            >
              ثبت نام
            </button>
            <button
              style={{ color: "#323E73" }}
              className="btn rounded-pill m-1"
            >
              ورود کاربران
            </button>
          </div>
          <h5
            className="mt-4 d-flex justify-content-center text-color"
            style={{ color: "#323E73" }}
          >
            حساب کاربری خود را ایجاد کنید
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
              <div className="text-danger mt-1">
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

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="تکرار رمز عبور"
                id="pass2"
                name="pass2"
                onChange={formik.handleChange}
                value={formik.values.pass2}
                onBlur={formik.handleBlur}
              />
              <div className="text-danger mt-1">
                {formik.touched.pass2 && formik.errors.pass2 ? (
                  <div>{formik.errors.pass2}</div>
                ) : null}
              </div>
            </div>

            <div className="btn-container d-flex justify-content-center">
              <button
                style={{ backgroundColor: "#82D8B9", color: "#323E73" }}
                type="submit"
                className="btn"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
