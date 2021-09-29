import React from "react";

const BtnContainer = () => {
  return (
    <div className="btn-container mb-1 d-inline-flex flex-wrap justify-content-center rounded-pill">
      <button className={`btn m-1 rounded-pill text-color`}>
        ثبت نام
      </button>
      <button className={`btn m-1 rounded-pill text-color bg-light`}>
        ورود کاربران
      </button>
    </div>
  );
};

export default BtnContainer;
