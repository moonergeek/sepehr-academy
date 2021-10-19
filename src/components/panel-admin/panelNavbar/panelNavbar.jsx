import React from 'react';
import "./panelNavbar.css"
import background from "../../../assets/img/panel-background.png"
import userImage from "../../../assets/img/img4.png"
import dashboard_icon from "../../../assets/img/dashboard.png"
import edu_icon from "../../../assets/img/panel-edu.png"
import home_icon from "../../../assets/img/panel-home.png"
import comment_icon from "../../../assets/img/panel-comment.png"
import edit_icon from "../../../assets/img/editing.png"
import logOut from "../../../assets/img/logout(2).png"
import shopping_cart from "../../../assets/img/panel-shopping-cart.png"
import wallet from "../../../assets/img/panel-wallet.png"
import categories from "../../../assets/img/panel-categories.png"
import free_course from "../../../assets/img/panel-online-education.png"
import offer from "../../../assets/img/panel-percentage.png"
import {BootstrapTooltip } from "../../tooltip/bootstrapTooltip"




const PanelNavbar = (props) => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"navbar-panel-width mt-3"}>
                    <div className="card">
                        <img src={background} className="card-img-top panel-background" alt="..."/>

                        <section className={"top-data"}>
                            <div className={"d-flex justify-content-center"}>
                                <img src={userImage} className={"panel-user-image"}/>
                            </div>
                            <BootstrapTooltip placeMent={"left"} title="خروج">
                                <img src={logOut} className={"logOut-img"}/>
                            </BootstrapTooltip>
                            <div className={"d-flex justify-content-center"}>
                            <span className={"panel-user-name"}>
                                مسعود حسامی
                            </span>
                            </div>
                        </section>

                        <div className="card-body panel-navbar-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item panel-list-item">
                                    <img src={dashboard_icon} className={"panel-navList-icons"}/>
                                    داشبرد
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={shopping_cart} className={"panel-navList-icons"}/>
                                    سبد خرید
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={edu_icon} className={"panel-navList-icons"}/>
                                    دوره های خریداری شده
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={edit_icon} className={"panel-navList-icons"}/>
                                    ویرایش پروفایل
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={wallet} className={"panel-navList-icons"}/>
                                    شارژ کردن کیف پول
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={categories} className={"panel-navList-icons"}/>
                                    دسته بندی دوره ها
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={free_course} className={"panel-navList-icons"}/>
                                    دوره های رایگان
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={offer} className={"panel-navList-icons"}/>
                                    تخفیفات روزانه
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={comment_icon} className={"panel-navList-icons"}/>
                                    ثبت نظرات
                                </li>
                                <li className="list-group-item panel-list-item">
                                    <img src={home_icon} className={"panel-navList-icons"}/>
                                    بازگشت به خانه
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelNavbar;
