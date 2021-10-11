import React, { useState } from "react";
import "./Teachers.css";
import Teacher from "./Teacher/Teacher";

const Teachers = () => {
  const [teacherInfo, setTeacherInfo] = useState([
    { id: 1, title: "محمد بحرالعلومی", des: "مدرس دوره های اصلی آموزشگاه" },
    { id: 2, title: "حامد نظری", des: "مدرس دوره های طراحی رابط کاربری" },
    { id: 3, title: "سالار نیلی", des: "مدرس دوره ریکت" },
    { id: 4, title: "مسعود حسامی", des: "مدرس دوره تایپ اسکریپت" },
    { id: 5, title: "ماهان جعفری", des: "مدرس دوره بوتسترپ" },
    { id: 6, title: "سینا رضایی", des: "مدرس دوره سی شارپ" },
  ]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <Teacher teacherInfo={teacherInfo} />
        </div>
      </div>
    </>
  );
};

export default Teachers;
