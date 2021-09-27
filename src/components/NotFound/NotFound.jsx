import React from "react";
import NotFound1 from "../../assets/img/NotFound.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <img
          className="mt-5 d-flex justify-content-center"
          style={{ width: "600px" }}
          src={NotFound1}
          alt="NotFound"
        />
        <h3
          className="mt-5 fw-bold d-flex justify-content-center"
          style={{ color: "#323E73" }}
        >
          صفحه مورد نظر یافت نشد!
        </h3>
        <h5
          className="mt-3 fw-bold d-flex justify-content-center"
          style={{ color: "#61CE70" }}
        >
          <ins className="fw-bold">بازگشت به صفحه قبلی</ins>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
