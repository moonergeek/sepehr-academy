import React from "react";
import NotFoundImg from "./NotFoundImg/NotFoundImg";
import NotFoundTitle from "./NotFoundTitle/NotFoundTitle";
import BackButton from "./BackButton/BackButton";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <NotFoundImg />
      <NotFoundTitle />
      <BackButton />
    </div>
  );
};

export default NotFound;
