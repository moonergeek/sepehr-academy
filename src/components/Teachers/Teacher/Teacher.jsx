import React from "react";
import "./Teacher.css";

const Teacher = ({ teacherInfo }) => {
  return (
    <>
      {teacherInfo.map((teacher) => (
        <div className="col-4 mb-4">
          <div className="card rounded shadow-sm" style={{ width: "18rem" }}>
            <img
              src={teacher.img}
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
