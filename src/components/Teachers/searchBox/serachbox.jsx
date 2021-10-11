import React from "react";
import search from "../../../assets/img/search.png";
import "./serachbox.css";

const SearchBox = () => {
  return (
    <>
      <div className="col-12 d-flex justify-content-center mb-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="جستجو استاد مورد نظر"
          aria-label="Search"
        />
        <button className="btn button-search" type="submit">
          <img className="search-icon" src={search} alt="search" />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
