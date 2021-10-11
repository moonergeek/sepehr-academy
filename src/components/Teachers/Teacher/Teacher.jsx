import React from "react";
import "./Teacher.css";
import Sn from "../../../assets/img/sn.jpg";
import Mb from "../../../assets/img/mb.jpg";
import Hn from "../../../assets/img/hn.jpg";

const Teacher = ({ teacherInfo }) => {
  return (
    <>
      {teacherInfo.map((teacher) => (
        <div className="col-4 mb-4">
          <div className="card rounded" style={{ width: "18rem" }}>
            <img
              src={Mb}
              className="card-img-top p-3 rounded"
              alt="teacher"
            />
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title text-color fw-bold">{teacher.title}</h5>
              <p className="card-text">{teacher.des}</p>
              <a href="#" className="btn btn-color">
                مشاهده دوره ها
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Teacher;
