import React, { useState } from "react";
import "./Teachers.css";
import Teacher from "./Teacher/Teacher";
import SearchBox from "./searchBox/serachbox";
import Sn from "../../assets/img/sn.jpg";
import Mb from "../../assets/img/mb.jpg";
import Hn from "../../assets/img/hn.jpg";
import Masoud from "../../assets/img/masoud.jpg";
import Mahan from "../../assets/img/mahan.jpg";
import Sina from "../../assets/img/sina.png";
import Pagination from "./Pagination/Pagination";

const Teachers = () => {
  const [teacherInfo, setTeacherInfo] = useState([
    {
      id: 1,
      title: "محمد بحرالعلومی",
      des: "مدرس دوره های اصلی آموزشگاه",
      img: Mb,
    },
    {
      id: 2,
      title: "حامد نظری",
      des: "مدرس دوره های طراحی رابط کاربری",
      img: Hn,
    },
    { id: 3, title: "سالار نیلی", des: "مدرس دوره ریکت", img: Sn },
    { id: 4, title: "مسعود حسامی", des: "مدرس دوره تایپ اسکریپت", img: Masoud },
    { id: 5, title: "ماهان جعفری", des: "مدرس دوره بوتسترپ", img: Mahan },
    { id: 6, title: "سینا رضایی", des: "مدرس دوره سی شارپ", img: Sina },
  ]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <SearchBox />
          <Teacher teacherInfo={teacherInfo} />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Teachers;
