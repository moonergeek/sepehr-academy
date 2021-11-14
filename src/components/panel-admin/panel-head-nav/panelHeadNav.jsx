import React from 'react';
import "./panelHeadNav.css"
import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import EvStationTwoToneIcon from "@mui/icons-material/EvStationTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import {Link} from "react-router-dom";

const PanelHeadNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav panel-head-nav">
                            <Link className={"link-link"} to={"dashboard/panel"}>
                                <li className="nav-item panel-list-item header-items">
                                    <AnalyticsTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    داشبرد
                                </li>
                            </Link>
                            <li className="nav-item panel-list-item header-items">
                                <ShoppingCartTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                سبد خرید
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <BookmarkTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دوره های خریداری شده
                            </li>
                            <Link className={"link-link"} to={"/dashboard/edit"}>
                                <li className="nav-item panel-list-item header-items">
                                    <EditTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    ویرایش پروفایل
                                </li>
                            </Link>
                            <li className="nav-item panel-list-item header-items">
                                <EvStationTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                شارژ کردن کیف پول
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <CategoryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دسته بندی دوره ها
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <LocalLibraryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                دوره های رایگان
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <LocalOfferTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                تخفیفات روزانه
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <ModeCommentTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                ثبت نظرات
                            </li>
                            <Link className={"link-link"} to={"/"}>
                                <li className="nav-item panel-list-item header-items">
                                    <HomeTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    بازگشت به خانه
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default PanelHeadNav;
