import React from "react";
import { useLocation } from "react-router-dom";
import twitter from "../../../../../assets/img/twitter.svg";
import telegram from "../../../../../assets/img/telegram(1).svg";
import facebook from "../../../../../assets/img/facebook.svg";

const Icons = () => {
  const location = useLocation();
  return (
    <>
      <span className="share-icon">
        <img src={twitter} alt="twitter" />
      </span>
      <span className="share-icon">
        <img
          onClick={() => {
            console.log(location);
          }}
          src={telegram}
          alt="telegram"
        />
      </span>
      <span className="share-icon">
        <img src={facebook} alt="facebook" />
      </span>
    </>
  );
};

export default Icons;
