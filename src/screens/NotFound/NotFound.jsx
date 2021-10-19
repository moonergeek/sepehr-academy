import React from "react";
import NotFoundImg from "../../components/NotFound/NotFoundImg/NotFoundImg";
import NotFoundTitle from "../../components/NotFound/NotFoundTitle/NotFoundTitle";
import BackButton from "../../components/NotFound/BackButton/BackButton";
import "../../components/NotFound/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container d-flex flex-column align-items-center">
        <NotFoundImg />
        <NotFoundTitle />
        <BackButton />
      </div>
    </div>
  );
};

export default NotFound;
