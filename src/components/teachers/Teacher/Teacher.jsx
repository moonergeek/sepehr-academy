import React from "react";
import "./Teacher.css";

const Teacher = ({ teacherInfo }) => {
  return (
    <>
      {teacherInfo.map((teacher) => (
        <div className="col-lg-4 col-md-6 d-flex justify-content-center mb-4">
          <div className="card rounded shadow-sm teacher-card" style={{ width: "18rem" }}>
            <img
              src={teacher.img}
              className="card-img-top p-3 rounded"
              alt="teacher"
            />
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title fw-bold">{teacher.title}</h5>
              <p className="card-text teacher-des">{teacher.des}</p>
              <a href="https://www.google.com/" className="btn btn-success">
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
