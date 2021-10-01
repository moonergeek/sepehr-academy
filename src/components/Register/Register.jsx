import React from "react";
import BtnContainer from "./BtnContainer/BtnContainer";
import RegisterImg from "./RegisterImg/RegisterImg";
import RegisterTitle from "./RegisterTitle/RegisterTitle";
import RegisterForm from "./RegisterForm/RegisterForm";

import "./Register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="mt-5 row p-4">
        <div className="mt-4 col-lg-12 col-xl-7 order-xl-last d-flex justify-content-center">
          <RegisterImg />
        </div>
        <div className="order-xl-first col-lg-12 col-xl-5 mt-5 d-flex flex-column login-form">
          <BtnContainer />
          <RegisterTitle />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
