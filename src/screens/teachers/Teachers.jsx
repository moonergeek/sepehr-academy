import React, { useState } from "react";
import "../../components/teachers/Teachers.css";
import Teacher from "../../components/teachers/Teacher/Teacher";
import SearchBox from "../../components/searchBox/serachbox";
import Pagination from "../../components/common/pagination/pagination";
import Title from "../../components/moshavere-req/Title/Title";
import {teachersData} from "../../core/services/jsonFiles/teachersData.json"
import SearchBoxForTeachers from "../../components/searchBox/searchBoxForTeachers/searchBoxForTeachers";

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Title Title={"معرفی مدرسین"}/>
      <div className="container">
        <div className="row mt-4">
          <form className="d-flex  mb-5 col-md-12 col-lg-12 col-sm-12 col-12 justify-content-center">
            <SearchBoxForTeachers placeholder={"جستجو نام استاد"}  teacherInfo={teachersData}/>
          </form>
          <Teacher teacherInfo={teachersData} />
          <form className="d-flex mb-2 justify-content-center mt-5">
            <Pagination itemsCount={8}
                        pageSize={6}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Teachers;
