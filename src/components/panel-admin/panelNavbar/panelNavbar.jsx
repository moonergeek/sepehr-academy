import React from 'react';
import "./panelNavbar.css"
import background from "../../../assets/img/background.png"
import userImage from "../../../assets/img/img4.png"
import logOut from "../../../assets/img/logout(2).png"
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import {BootstrapTooltip} from "../../tooltip/bootstrapTooltip"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {Link} from "react-router-dom";


const PanelNavbar = (props) => {
    return (
        <>

            <div className={"navbar-panel-width position-fixed"}>
                <div className="card">
                    <img height={135} src={background} className="card-img-top panel-background" alt="..."/>

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
                            <Link className={"link-link"} to={"/dashboard/panel"}>
                                <li className="list-group-item panel-list-item">
                                    <AnalyticsTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    داشبرد
                                </li>
                            </Link>
                            <li className="list-group-item panel-list-item">
                                <ShoppingCartTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                سبد خرید
                            </li>
                            <li className="list-group-item panel-list-item">
                                <BookmarkTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دوره های خریداری شده
                            </li>
                            <Link className={"link-link"} to={"/dashboard/edit"}>
                                <li className="list-group-item panel-list-item">
                                    <EditTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    ویرایش پروفایل
                                </li>
                            </Link>
                            <li className="list-group-item panel-list-item">
                                <EvStationTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                شارژ کردن کیف پول
                            </li>
                            <li className="list-group-item panel-list-item">
                                <CategoryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دسته بندی دوره ها
                            </li>
                            <li className="list-group-item panel-list-item">
                                <LocalLibraryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دوره های رایگان
                            </li>
                            <li className="list-group-item panel-list-item">
                                <LocalOfferTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                تخفیفات روزانه
                            </li>
                            <li className="list-group-item panel-list-item">
                                <ModeCommentTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                ثبت نظرات
                            </li>
                            <Link className={"link-link"} to={"/"}>
                                <li className="list-group-item panel-list-item">
                                    <HomeTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    بازگشت به خانه
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelNavbar;
