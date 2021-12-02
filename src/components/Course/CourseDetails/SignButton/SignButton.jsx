import React from "react";
import { Link, useHistory } from "react-router-dom";
import modalSign from "../../../../assets/img/svg/modalSign.svg";
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
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <h5 className="modal-body d-flex justify-content-center text-color">
                                آیا میخواهید در دوره عضو شوید؟
                            </h5>

                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn panel-no"
                                    data-bs-dismiss="modal"
                                >
                                    خیر
                                </button>
                                <Link to="/cart">
                                    <button
                                        type="button"
                                        className="btn sign-btn"
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
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <h5 className="modal-body d-flex justify-content-center text-color">
                                شما هنوز وارد سایت ما نشدید
                            </h5>

                            <img className="img-padding" src={modalSign} alt={"..."}/>
                            <div className="modal-footer d-flex justify-content-center">
                                <Link to="/login">
                                    <button
                                        type="button"
                                        className="btn sign-btn"
                                        data-bs-dismiss="modal"
                                    >
                                        ورود
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button
                                        type="button"
                                        className="btn panel-no"
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
