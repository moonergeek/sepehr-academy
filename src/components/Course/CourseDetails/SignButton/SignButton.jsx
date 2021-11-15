import React from "react";
import { Link, useHistory } from "react-router-dom";
import modalSign from "../../../../assets/img/modalSign.svg";
import { getItem } from "../../../../core/services/storage/storage";

const SignButton = () => {
  const history = useHistory();
  return (
    <>
      <div
        className="sign-btn mt-5 btn text-white rounded-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ثبت نام در این دوره
      </div>

      {getItem("token") ? (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h5 class="modal-body d-flex justify-content-center text-color">
                آیا میخواهید در دوره عضو شوید؟
              </h5>

              <div class="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  class="btn panel-no"
                  data-bs-dismiss="modal"
                >
                  خیر
                </button>
                <Link to="/cart">
                  <button
                    type="button"
                    class="btn sign-btn"
                    data-bs-dismiss="modal"
                  >
                    بله
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h5 class="modal-body d-flex justify-content-center text-color">
                شما هنوز وارد سایت ما نشدید
              </h5>

              <img className="img-padding" src={modalSign} />
              <div class="modal-footer d-flex justify-content-center">
                <Link to="/login">
                  <button
                    type="button"
                    class="btn sign-btn"
                    data-bs-dismiss="modal"
                  >
                    ورود
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    class="btn panel-no"
                    data-bs-dismiss="modal"
                  >
                    ثبت نام
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignButton;
