import React from "react";
import BtnContainer from "../../components/Register/BtnContainer/BtnContainer";
import RegisterImg from "../../components/Register/RegisterImg/RegisterImg";
import RegisterTitle from "../../components/Register/RegisterTitle/RegisterTitle";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";

import "../../components/Register/Register.css";

const Register = () => {
  return (
    <div className="container register-container">
      <div className="mt-5 row p-4">
        <div className="mt-3 col-lg-12 col-xl-7 order-xl-last d-flex justify-content-center">
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
