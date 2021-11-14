import React from "react";
import twitter from "../../../../../assets/img/twitter.svg";
import telegram from "../../../../../assets/img/telegram(1).svg";
import facebook from "../../../../../assets/img/facebook.svg";

const Icons = () => {
  return (
    <>
      <span className="share-icon">
        <img src={twitter} alt="twitter" />
      </span>
      <span className="share-icon">
        <img src={telegram} alt="telegram" />
      </span>
      <span className="share-icon">
        <img src={facebook} alt="facebook" />
      </span>
    </>
  );
};

export default Icons;
