import React, { useEffect } from "react";
import cm from "../../assets/img/cm.png";

const CommentShow = (values) => {
  useEffect(() => {}, [values]);

  console.log(values.initialValues.postId);
  return (
    <>
      <div className="container mt-5 d-flex">
        <div>
          <img width="40%" className="responsive-img" src={cm} />
        </div>
        <div style={{ marginRight: "-75px", marginTop: "4px" }}>
          <h5 className="fw-bold text-color">ماهان</h5>
          <p>دوره بسیار عالی ای بود.ممنون از شما</p>
        </div>
      </div>

      <div className="container mt-5 d-flex">
        <div>
          <img width="40%" className="responsive-img" src={cm} />
        </div>
        <div style={{ marginRight: "-75px", marginTop: "4px" }}>
          <h5 className="fw-bold text-color">مسعود</h5>
          <p>دوره بسیار عالی ای بود.ممنون از شما</p>
        </div>
      </div>
      <div className="container mt-5 d-flex">
        <div>
          <img width="40%" className="responsive-img" src={cm} />
        </div>
        <div style={{ marginRight: "-75px", marginTop: "4px" }}>
          <h5 className="fw-bold text-color">سینا</h5>
          <p>دوره بسیار عالی ای بود.ممنون از شما</p>
        </div>
      </div>
    </>
  );
};

export default CommentShow;
