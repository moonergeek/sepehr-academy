import React from "react";
import "./Pagination.css";

const pagination = () => {
  return (
    <>
      <div className="col-12 d-flex justify-content-center mt-2">
        <nav className="paginate">
          <ul class="pagination">
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item" aria-current="page">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default pagination;
