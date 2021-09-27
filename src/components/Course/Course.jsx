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
import courseImg from "../../assets/img/course-img.png";

const Course = () => {
  return (
    <>
      <div className="container course-file">
        <div className="row mt-5">
          <div className="col-lg-4 order-last order-lg-first col-md-12 col-md-12 shadow-sm flex-column justify-content-md-center p-4">
            <div className="price" style={{ marginRight: "5px" }}>
              قیمت این دوره :{" "}
              <span style={{ color: "#23A455" }}>500000 تومان</span>
            </div>
            <div className="details mt-3">
              <div className="teacher">
                <span className="icon">
                  <img src={icon1} alt="teacher" />
                </span>
                <span
                  className="title"
                  style={{ color: "#7a81a1", marginRight: "8px" }}
                >
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
                <span
                  className="title"
                  style={{ color: "#7a81a1", marginRight: "8px" }}
                >
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
                <span
                  className="title"
                  style={{ color: "#7a81a1", marginRight: "8px" }}
                >
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
                <span
                  className="title"
                  style={{ color: "#7a81a1", marginRight: "8px" }}
                >
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
                <span
                  className="title"
                  style={{ color: "#7a81a1", marginRight: "8px" }}
                >
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
                style={{
                  backgroundColor: "#E1F7ED",
                  color: "#323E73",
                  width: "100%",
                  fontSize: "15px",
                }}
                className="mt-5 rounded-3 p-3 d-flex justify-content-center"
              >
                سوالات خود را میتوانید{" "}
                <span style={{ color: "#61CE70", padding: "0 3px" }}>
                  اینجا
                </span>{" "}
                مطرح کنید
              </div>

              <div
                className="mt-5 d-flex flex-column align-items-center flex-md-row justify-content-evenly"
                style={{ color: "#323E73", marginRight: "8px" }}
              >
                <div className="d-md-flex d-none">به اشتراک گذاری</div>
                <div className="icons d-flex justify-content-md-between">
                  <span style={{ marginLeft: "20px", cursor: "pointer" }}>
                    <img src={twitter} alt="twitter" />
                  </span>
                  <span style={{ marginLeft: "20px", cursor: "pointer" }}>
                    <img src={telegram} alt="telegram" />
                  </span>
                  <span style={{ marginLeft: "20px", cursor: "pointer" }}>
                    <img src={facebook} alt="facebook" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 order-first order-lg-last d-flex shadow-sm flex-column align-items-center">
            <img
              style={{ width: "80%", height: "80%" }}
              src={courseImg}
              alt="courseImg"
            />
            <div style={{ marginRight: "20px" }} className="tut">
              <h5
                style={{ color: "#323E73", fontSize: "18px" }}
                className="mt-4 header-start"
              >
                آموزش جامع پایتون از صفر تا صد
              </h5>
              <p
                className="mt-2"
                style={{ color: "#7a81a1", fontSize: "15px" }}
              >
                این پایتون چیه که انقدر سر زبون ها افتاده و هرجا بری صحبتش
                هست؟زبان برنامه نویسی پایتون زبانی با یادگیری آسان تلقی میشود و
                به همین دلیل بسیاری از برنامه نویس های تازه کار آن را به عنوان
                زبان برنامه نویسی خود انتخاب میکنند.زیرا پایتون به عنوان یک زبان
                همه منظوره ساخته و توسعه داده شده است و محدود به توسعه و نوع
                خاصی از نرم افزار نیست.
              </p>
              <h5
                style={{ color: "#323E73", fontSize: "18px" }}
                className="mt-4"
              >
                چرا باید از این دوره استفاده بکنم؟
              </h5>
              <p
                className="mt-2"
                style={{ color: "#7a81a1", fontSize: "15px" }}
              >
                داخل دوره ما به مسائلی مثل اینکه پایتون رو چه کسی ساخت و یا در
                چه سالی ایجاد شد و مسائلی این چنینی نمیپردازیم،شما دارید هزینه
                میکنید و وقت میزارید که پایتون یادبگیرید نه اینکه بدونید پایتون
                رو کی ساخت.
              </p>
              <h5
                style={{ color: "#323E73", fontSize: "18px" }}
                className="mt-4"
              >
                پیش نیاز های این دوره
              </h5>
              <p
                className="mt-2"
                style={{ color: "#7a81a1", fontSize: "15px" }}
              >
                این دوره برای افرادی که هیچ گونه اشنایی با برنامه نویسی ندارن و
                همچمین افراد متوسط و افرادی که پایتون رو به صورت پیشرفته دنبال
                می کنند قابل استفاده می باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
