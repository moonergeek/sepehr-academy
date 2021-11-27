import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import "./postStuReqForm.css"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {toast, ToastContainer} from "react-toastify";
import PostStuReq from "../../../core/services/API/studentRequest/postStuReq.api";

const PostStuReqForm = () => {
    useEffect(() => {

    }, [])

    const initialValues = {
        email: "",
        name: "",
        text: "",
    };
    const onSubmit = async (values) => {
        const StudentReq = {
            email: values.email,
            name: values.name,
            text: values.text,
        };
        const result = await PostStuReq(StudentReq);
        console.log(StudentReq)
        console.log(result);
        toast.success(result.data.message[0].message);
    }

    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = "ایمیل را وارد کنید";
        }

        if (!values.name) {
            errors.name = " نام خود را وارد کنید ";
        }

        if (!values.text) {
            errors.text = "توضیحات را وارد کنید";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <>
            <div className={"white-background"}>
                <div className={"container"}>
                    <ToastContainer
                        position="top-center"
                        limit={1}
                        autoClose={3000}
                        rtl={true}
                    />
                    <form onSubmit={formik.handleSubmit}>
                        <div className={"row mb-5 mt-3"}>
               <span className="panel-title">
                  {" ثبت درخواست مشاوره"}
              </span>
                        </div>
                        <div className="row mb-4 pt-4">
                            <div className="col pt-2">
                                <input className="form-control me-2 Search-box" type="text"
                                       placeholder={"ایمیل"}
                                       aria-label="email"
                                       id={"email"}
                                       name="email"
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                       onBlur={formik.handleBlur}
                                       autoComplete="off"
                                />
                                <div className="text-danger mt-1 pe-2">
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col pt-2">
                                <input className="form-control me-2 Search-box" type="text"
                                       placeholder={" نام"}
                                       aria-label="name"
                                       id={"nameUser"}
                                       name="name"
                                       onChange={formik.handleChange}
                                       value={formik.values.name}
                                       onBlur={formik.handleBlur}
                                       autoComplete="off"
                                />
                                <div className="text-danger mt-1 pe-2">
                                    {formik.touched.name && formik.errors.name ? (
                                        <div>{formik.errors.name}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"/>
                                <textarea className="form-control text-aria" id="exampleFormControlTextarea1" rows="3"
                                          placeholder={"توضیحات"}
                                          aria-label="text"
                                          name="text"
                                          onChange={formik.handleChange}
                                          value={formik.values.text}
                                          onBlur={formik.handleBlur}
                                          autoComplete="off"
                                />
                                <div className="text-danger mt-1 pe-2">
                                    {formik.touched.text && formik.errors.text ? (
                                        <div>{formik.errors.text}</div>
                                    ) : null}
                                </div>
                            </div>

                        </div>
                        <div className={"row mt-4 mb-3 me-2"}>
                            <div className={"d-flex justify-content-center"}>
                                <div>
                                    <button className={" btn-green btn btn-hover"}
                                            type={"submit"}>ثبت
                                    </button>
                                </div>
                                <button className={" btn-blue btn me-2 mb-3 btn-hover"}> ریست</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PostStuReqForm;
