import React from "react";
import BtnContainer from "./BtnContainer/BtnContainer";
import RegisterImg from "./RegisterImg/RegisterImg";
import RegisterTitle from "./RegisterTitle/RegisterTitle";
import RegisterForm from "./RegisterForm/RegisterForm";

import "./Register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="mt-5 col-md-12 col-lg-7 order-lg-last d-flex justify-content-center shadow-sm">
          <RegisterImg />
        </div>
        <div className="login-form order-lg-first col-md-12 col-lg-5 mt-5 d-flex flex-column">
          <BtnContainer />
          <RegisterTitle />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
