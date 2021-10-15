import React from 'react';
import {FcApproval, IoIosArrowDown} from "react-icons/all";
import "./dropDownBtn.css"

const DropDownBtn = () => {
    return (
        <>
            <div className="dropdown mt-3 pe-4">
                <button className="btn btn-success dropdown-toggle-split" type="button"
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    مرتب سازی کل دوره ها
                    <IoIosArrowDown/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                تخفیف ویژه
                                <FcApproval/>
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                در حال برگذاری
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                دوره های رایگان
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                دوره های محبوب
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                دوره های به اتمام رسیده
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                مرتب سازی بر اساس کم ترین قیمت
                            </label>
                        </div>
                    </a></li>
                    <li><a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                مرتب سازی بر اساس بیش ترین قیمت
                            </label>
                        </div>
                    </a></li>
                </ul>
            </div>
        </>
    );
};

export default DropDownBtn;
