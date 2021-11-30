import React, {useEffect, useState} from 'react';
import logoGreen from "../../assets/img/logo green.png";
import "./header.css"
import {BsThreeDots, FaCircle, FaUserPlus, MdShoppingCart,} from "react-icons/all";
import userImage from "../../assets/img/userAvatar.svg";
import {NavLink, Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import {BootstrapTooltip} from "../tooltip/bootstrapTooltip"


import {getItem} from "../../core/services/storage/storage";
import GetUserDetails from "../../core/services/API/auth/GetUserDetail.api";

const Header = (props) => {
    const [userInformation, setUserInformation] = useState([]);
    const [image, setImage] = useState("");
    const getUserInformation = async () => {
        try {
            setImage(getItem(props.userInfo.result._id + "image"));
            const result = await GetUserDetails();
            setUserInformation(result.result);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }
    useEffect(() => {
        getUserInformation()
    }, []);

    console.log(userInformation._id)

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                <img src={logoGreen} className="logo"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <BsThreeDots className={"rotation"}/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    {Object.keys(props.menuList).map(item => <NavLink
                                        key={item} className={"nav-item nav-link nav-header"}
                                        to={props.menuList[item].routeAddress}>
                                        {props.menuList[item].menuItem}
                                    </NavLink>)}
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <form className="d-flex header-icons">
                                        <Link className="nav-link ">
                                            <FaCircle className={"circle margin"} fontSize={42}/>
                                            <BootstrapTooltip placeMent={"right"} title="سبد خرید">
                                                <div className={"inline-block"}>
                                                    <Badge className={"shopping-badge"} badgeContent={4}
                                                           color="secondary">
                                                        <Link to="/cart">

                                                            <MdShoppingCart fontSize={24}
                                                                            className={"shopping-card-icon"}/>

                                                        </Link>
                                                    </Badge>
                                                </div>
                                            </BootstrapTooltip>

                                            {getItem("token") ? <><FaCircle className={"circle opacity-none"}
                                                                            fontSize={42}/>
                                                <BootstrapTooltip placeMent={"left"} title="داشبرد">
                                                    <div className={"inline-block-2"}>
                                                        <div className="dropdown">
                                                            <Link to={`/dashboard/${userInformation._id}`}>
                                                                <div className={"border-violet"}>
                                                                    {image ? <img src={image} width={50}
                                                                                  className={"user-icon dropdown-toggle image-user-class"}
                                                                                  id="dropdownMenuButton1"
                                                                                  aria-expanded="false"
                                                                                  alt={"user-image"}/> :
                                                                        <img src={userImage} width={50}
                                                                             className={"user-icon dropdown-toggle image-user-class"}
                                                                             id="dropdownMenuButton1"
                                                                             aria-expanded="false"
                                                                             alt={"user-image"}/>}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </BootstrapTooltip></> : <><FaCircle className={"circle"}
                                                                                     fontSize={42}/>
                                                <BootstrapTooltip placeMent={"left"} title="ثبت نام">
                                                    <div className={"inline-block-2"}>
                                                        <div className="dropdown">
                                                            <FaUserPlus fontSize={24}
                                                                        className={"user-icon dropdown-toggle"}
                                                                        id="dropdownMenuButton1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                            />
                                                            <ul className="dropdown-menu headerDrop-menu"
                                                                aria-labelledby="dropdownMenuButton1">
                                                                <div className={"d-flex justify-content-center"}>
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item headerDrop-item "
                                                                            to={"/login"}>ورود</Link>
                                                                    </li>
                                                                </div>
                                                                <div className={"d-flex justify-content-center"}>
                                                                    <li><Link
                                                                        className="dropdown-item headerDrop-item"
                                                                        to={"/register"}>ثبت
                                                                        نام</Link></li>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </BootstrapTooltip></>}

                                        </Link>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}


export default Header;
