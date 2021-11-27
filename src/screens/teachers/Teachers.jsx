import React, { useState } from "react";
import "../../components/teachers/Teachers.css";
import Teacher from "../../components/teachers/Teacher/Teacher";
import Sn from "../../assets/img/sn.jpg";
import Mb from "../../assets/img/mb.jpg";
import Hn from "../../assets/img/hn.jpg";
import Masoud from "../../assets/img/masoud.jpg";
import Mahan from "../../assets/img/mahan.jpg";
import Sina from "../../assets/img/sina.png";
import SearchBox from "../../components/searchBox/serachbox";
import Pagination from "../../components/common/pagination/pagination";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Title from "../../components/moshavere-req/Title/Title";

const Teachers = (props) => {
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
      <Header menuList={props.menuList} userInfo={props.userInfo}/>
      <Title Title={"معرفی مدرسین"}/>
      <div className="container">
        <div className="row mt-4">
          <form className="d-flex  mb-5 col-md-12 col-lg-12 col-sm-12 col-12 justify-content-center">
            <SearchBox placeHolder={"جستجو نام استاد"}/>
          </form>
          <Teacher teacherInfo={teacherInfo} />
          <form className="d-flex mb-2 justify-content-center mt-5">
            <Pagination itemsCount={props.itemsCount4Paginate}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChange={props.onPageChange}
            />
          </form>
        </div>
      </div>
      <Footer footerInfo={props.footerInfo}/>
    </>
  );
};

export default Teachers;
