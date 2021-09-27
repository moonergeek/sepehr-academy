import React from "react";
import NotFound1 from "../../assets/img/NotFound.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <img
          className=" d-flex justify-content-center"
          style={{ width: "600px" }}
          src={NotFound1}
          alt="NotFound"
        />
        <h3
          className="mt-4 fw-bold d-flex justify-content-center"
          style={{ color: "#323E73" }}
        >
          صفحه مورد نظر یافت نشد!
        </h3>
        <h5 className="mt-3 d-flex justify-content-center">
          <button style={{ backgroundColor: "#61CE78" }} className="btn text-white">
            بازگشت به صفحه قبلی
          </button>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
