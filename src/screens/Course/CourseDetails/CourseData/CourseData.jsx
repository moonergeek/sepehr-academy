import React from "react";
import icon1 from "../../../../assets/img/courseIcon1.svg";
import icon2 from "../../../../assets/img/courseIcon2.svg";
import icon3 from "../../../../assets/img/courseIcon3.svg";
import icon4 from "../../../../assets/img/courseIcon4.svg";
import icon5 from "../../../../assets/img/courseIcon5.svg";

const CourseData = () => {
  return (
    <>
      <div className="price mb-3">
        قیمت این دوره : <span className="price-number">500000 تومان</span>
      </div>
      <div className="teacher">
        <span className="icon">
          <img src={icon1} alt="teacher" />
        </span>
        <span className="title">مدرس دوره : </span>
        <span className="des"> حسامی</span>
      </div>

      <div className="time mt-3">
        <span className="icon">
          <img src={icon2} alt="time" />
        </span>
        <span className="title">تعداد ویدیو ها : </span>
        <span className="des"> 6 ویدیو</span>
      </div>

      <div className="duration mt-3">
        <span className="icon">
          <img src={icon3} alt="duration" />
        </span>
        <span className="title">مدت زمان دوره : </span>
        <span className="des duration"> 7:28:00</span>
      </div>

      <div className="level mt-3">
        <span className="icon">
          <img src={icon4} alt="level" />
        </span>
        <span className="title">سطح دوره : </span>
        <span className="des"> متوسط</span>
      </div>

      <div className="lang mt-3">
        <span className="icon">
          <img src={icon5} alt="lang" />
        </span>
        <span className="title">زبان دوره : </span>
        <span className="des"> فارسی</span>
      </div>
    </>
  );
};

export default CourseData;
