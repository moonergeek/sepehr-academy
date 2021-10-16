import React from "react";
import { useFormik } from "formik";
import RegisterButton from "../RegisterButton/RegisterButton";

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

const RegisterForm = () => {
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

      <div className="d-flex justify-content-center">
        <RegisterButton />
      </div>
    </form>
  );
};

export default RegisterForm;
