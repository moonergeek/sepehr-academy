import React, {useEffect} from 'react';
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
import {Link} from "react-router-dom";
import {useStateIfMounted} from "use-state-if-mounted";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";

const PanelHeadNav = (props) => {
    const [userInformation, setUserInformation] = useStateIfMounted([]);
    const getUserInformation = async () => {
        try {
            const result = await GetUserDetails();
            setUserInformation(result.result);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }
    useEffect(() => {
        getUserInformation()
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav panel-head-nav">
                            <Link className={"link-link"} to={"dashboard/panel"}>
                                <li className="nav-item panel-list-item header-items">
                                    <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                        <AnalyticsTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                        داشبرد
                                    </Link>
                                </li>
                            </Link>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={"/cart"}>
                                    <ShoppingCartTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    سبد خرید
                                </Link>
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}/bought`}>
                                    <BookmarkTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    دوره های خریداری شده
                                </Link>
                            </li>
                            <Link className={"link-link"} to={"/dashboard/edit"}>
                                <li className="nav-item panel-list-item header-items">
                                    <Link className={"link-link"} to={`/dashboard/${userInformation._id}/edit`}>
                                        <EditTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                        ویرایش پروفایل
                                    </Link>
                                </li>
                            </Link>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <EvStationTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    شارژ کردن کیف پول
                                </Link>
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <CategoryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    دسته بندی دوره ها
                                </Link>
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}/liked`}>
                                    <LocalLibraryTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    دوره های مورد علاقه
                                </Link>
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <LocalOfferTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    تخفیفات روزانه
                                </Link>
                            </li>
                            <li className="nav-item panel-list-item header-items">
                                <Link className={"link-link"} to={`/dashboard/${userInformation._id}`}>
                                    <ModeCommentTwoToneIcon className={"panel-navList-icons"} fontSize={"small"}/>
                                    ثبت نظرات
                                </Link>
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
