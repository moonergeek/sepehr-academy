import React from "react";
import BtnContainer from "./BtnContainer/BtnContainer";
import LoginTitle from "./LoginTitle/LoginTitle";
import LoginForm from "./LoginForm/LoginForm";
import LoginImg from "./LoginImg/LoginImg";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="mt-4 col-md-12 col-lg-7 order-lg-last d-flex justify-content-center align-items-start">
          <LoginImg />
        </div>
        <div className="login-form mt-5 p-1 col-md-12 col-lg-5 order-lg-first d-flex flex-column shadow-sm">
          <BtnContainer />
          <LoginTitle />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
