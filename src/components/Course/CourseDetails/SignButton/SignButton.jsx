import React from "react";
import { Link } from "react-router-dom";
import modalSign from "../../../../assets/img/modalSign.svg";

const SignButton = () => {
  return (
    <>
      <div
        className="sign-btn mt-5 btn text-white rounded-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ثبت نام در این دوره
      </div>

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
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  ورود
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  ثبت نام
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignButton;
