import React from 'react';
import Input from "../../searchBox/input";
import "./editPanelUser.css"
import PanelTitle from "../panel-title/panelTitle";
import userImage from "../../../assets/img/img4.png";
import cloud from "../../../assets/img/cloud-computing.png"

const EditPanelUser = () => {
    return (
        <>
            <div className={"white-background"}>
                <div className={"container"}>
                    <div className={"row mb-5 mt-3"}><PanelTitle title={" ویرایش اطلاعات شخصی کاربر"}/></div>
                    <div className="row mb-4 pt-4">
                        <div className="col pt-2">
                            <Input placeHolder={" تغییر نام کامل"}/>
                        </div>
                        <div className="col pt-2">
                            <Input placeHolder={" تغییر نام کاربری"}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col pt-2">
                            <Input placeHolder={" تغییر رمز عبور "}/>
                        </div>
                        <div className="col pt-2">
                            <Input placeHolder={" تکرار رمز جدید "}/>
                        </div>
                    </div>
                    <div className={"row mb-4"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"/>
                            <textarea className="form-control text-aria" id="exampleFormControlTextarea1" rows="3"/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-sm-3"}><img src={userImage} className={"panel-user-upload"}/></div>
                        <div className={"col-sm-9"}>
                            <div className="mb-3">
                                <button className={"btn btn-upload"}>
                                    <span className={"upload-avatar-text"}>آپلود آواتار</span>
                                    <img className={"upload-icon"} src={cloud} alt="cloud"/>
                                    <input className="form-control visibility-none" type="file" id="formFile"
                                           aria-label="Search"/>
                                </button>
                                <span className={"upload-text-2"}> تصویر خود را بارگذاری کنید...</span>
                            </div>
                        </div>


                    </div>
                    <div className={"row mt-3 mb-3 me-2"}>
                        <button className={" btn-green btn"}>ثبت</button>
                        <button className={" btn-blue btn me-2 mb-3"}> ریست</button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default EditPanelUser;
