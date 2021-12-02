import React from "react";
import linkedin from "../../../../../assets/img/icons/linkedin.png";
import telegram from "../../../../../assets/img/svg/telegram(1).svg";
import facebook from "../../../../../assets/img/svg/facebook.svg";

const Icons = () => {
  return (
    <>
      <span className="share-icon linkedin">
        <a target="_blank" href="https://www.linkedin.com/groups/12269992/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </span>
      <span className="share-icon">
        <a target="_blank" href="https://t.me/Bahr_AC">
          <img src={telegram} alt="telegram" />
        </a>
      </span>
      <span className="share-icon">
        <a
          target="_blank"
          href="https://www.facebook.com/Sepehr-Academy-103826455460536"
        >
          <img src={facebook} alt="facebook" />
        </a>
      </span>
    </>
  );
};

export default Icons;
