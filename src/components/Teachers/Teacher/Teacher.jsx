import React from "react";
import "./Teacher.css";
import Sn from "../../../assets/img/sn.jpg";
import Mb from "../../../assets/img/mb.jpg";
import Hn from "../../../assets/img/hn.jpg";
import Masoud from '../../../assets/img/masoud.jpg'
import Mahan from '../../../assets/img/mahan.jpg'
import Sina from '../../../assets/img/sina.png'

const Teacher = ({ teacherInfo }) => {
  return (
    <>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Mb} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">محمد بحرالعلومی</h5>
            <p className="card-text">مدرس دوره های اصلی آموزشگاه</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Hn} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">حامد نظری</h5>
            <p className="card-text">مدرس دوره های طراحی رابط کاربری</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Sn} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">سالار نیلی</h5>
            <p className="card-text">مدرس دوره ریکت</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Masoud} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">مسعود حسامی</h5>
            <p className="card-text">مدرس دوره تایپ اسکریپت</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Mahan} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">ماهان جعفری</h5>
            <p className="card-text">مدرس دوره بوتسترپ</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-4">
        <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
          <img src={Sina} className="card-img-top p-3 rounded" alt="teacher" />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-color fw-bold">سینا رضایی</h5>
            <p className="card-text">مدرس دوره سی شارپ</p>
            <a href="#" className="btn btn-color">
              مشاهده دوره ها
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
