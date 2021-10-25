import React from "react";
import "./BackButton.css";


  function handleClick(props) {
    props.history.push("/home");
  }


const BackButton = () => {
  return (
    <button onClick={handleClick} className="back-button btn mr-right text-white mt-3">بازگشت به صفحه قبلی</button>
  );
};



export default BackButton;
