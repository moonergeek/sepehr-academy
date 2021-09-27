import React from "react";
import "./Course.css";
import icon1 from "../../assets/img/courseIcon1.svg";
import icon2 from "../../assets/img/courseIcon2.svg";
import icon3 from "../../assets/img/courseIcon3.svg";
import icon4 from "../../assets/img/courseIcon4.svg";
import icon5 from "../../assets/img/courseIcon5.svg";
import twitter from "../../assets/img/twitter.svg";
import telegram from "../../assets/img/telegram(1).svg";
import facebook from "../../assets/img/facebook.svg";

const Course = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <div className="price">
              قیمت این دوره :{" "}
              <span style={{ color: "#23A455" }}>500000 تومان</span>
            </div>
            <div className="details mt-4">
              <div className="teacher">
                <span className="icon">
                  <img src={icon1} alt="teacher" />
                </span>
                <span className="title" style={{ color: "#7a81a1" }}>
                  مدرس دوره :{" "}
                </span>
                <span className="name" style={{ color: "#323E73" }}>
                  {" "}
                  حسامی
                </span>
              </div>

              <div className="time mt-3">
                <span className="icon">
                  <img src={icon2} alt="time" />
                </span>
                <span className="title" style={{ color: "#7a81a1" }}>
                  تعداد ویدیو ها :{" "}
                </span>
                <span className="name" style={{ color: "#323E73" }}>
                  {" "}
                  6 ویدیو
                </span>
              </div>

              <div className="duration mt-3">
                <span className="icon">
                  <img src={icon3} alt="duration" />
                </span>
                <span className="title" style={{ color: "#7a81a1" }}>
                  مدت زمان دوره :{" "}
                </span>
                <span className="name" style={{ color: "#2EB5DD" }}>
                  {" "}
                  7:28:00
                </span>
              </div>

              <div className="level mt-3">
                <span className="icon">
                  <img src={icon4} alt="level" />
                </span>
                <span className="title" style={{ color: "#7a81a1" }}>
                  سطح دوره :{" "}
                </span>
                <span className="name" style={{ color: "#323E73" }}>
                  {" "}
                  متوسط
                </span>
              </div>

              <div className="lang mt-3">
                <span className="icon">
                  <img src={icon5} alt="lang" />
                </span>
                <span className="title" style={{ color: "#7a81a1" }}>
                  زبان دوره :{" "}
                </span>
                <span className="name" style={{ color: "#323E73" }}>
                  {" "}
                  فارسی
                </span>
              </div>
              <div
                style={{ backgroundColor: "#61CE70" }}
                className="sign-btn mt-5 btn text-white rounded-3"
              >
                ثبت نام در این دوره
              </div>
              <div
                style={{ backgroundColor: "#E1F7ED", color: "#323E73" }}
                className="mt-5 rounded-3 p-3"
              >
                سوالات خود را میتوانید در{" "}
                <span style={{ color: "#61CE70", cursor: "pointer" }}>
                  اینجا
                </span>{" "}
                مطرح کنید
              </div>

              <div className="mt-5" style={{ color: "#323E73" }}>
                به اشتراک گذاری{" "}
                <div className="icons justify-content-between">
                  <span>
                    <img src={twitter} alt="twitter" />
                  </span>
                  <span>
                    <img src={telegram} alt="telegram" />
                  </span>
                  <span>
                    <img src={facebook} alt="facebook" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-center">رضا</div>
        </div>
      </div>
    </>
  );
};

export default Course;
