import React from 'react';
import "./forgetPass.css"
import picture from  "../../assets/img/Mask Group 1.svg"
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import {BsArrowLeftShort} from "react-icons/all";


const initialValues = {
    email: "",
};
const onSubmit = (values) => {
    console.log(values);
};

const validate = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "پرکردن این فیلد الزامی است !";
    }
    return errors;
};

const ForgetPass = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    return (
        <>
            <div className={"container"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"forget-background my-4 pt-3"}>
                        <div className={"row"}>
                            <div className={"d-flex justify-content-center"}>
                                <img className={"forget-pic mt-5"} src={picture} alt={"image"}/>
                            </div>
                            <div className={"d-flex justify-content-center"}>
                            <form onSubmit={formik.handleSubmit} className="mt-5">

                                <div className="col-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="  ایمیل یا شماره همراه خود را وارد کنید"
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        autoComplete="off"
                                    />
                                    <div className="text-danger mt-1">
                                        {formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn text-color register-btn mt-4">
                                        دریافت کد
                                    </button>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link type="submit" className="return-home-link" to={"/"}>
                                        بازگشت به خانه
                                        <BsArrowLeftShort fontSize={22}/>
                                    </Link>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPass;
