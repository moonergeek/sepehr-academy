import React, {Component} from 'react';
import logoGreen from "../../assets/img/logo green.png";
<<<<<<< HEAD
import "./header.css"
import {BsThreeDots, FaCircle, FaUserPlus, MdShoppingCart,} from "react-icons/all";
import {NavLink, Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import {BootstrapTooltip } from "../tooltip/bootstrapTooltip"
=======
import group12 from "../../assets/img/Group 12.svg";
import user from "../../assets/img/user.svg";
import "./header.css"
import {BsThreeDots} from "react-icons/all";
>>>>>>> main


class Header extends Component {

    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
<<<<<<< HEAD
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
                                        {Object.keys(this.props.menuList).map(item => <NavLink
                                            key={item} className={"nav-item nav-link nav-header"}
                                            to={this.props.menuList[item].routeAddress}>
                                            {this.props.menuList[item].menuItem}
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
                                                            <MdShoppingCart fontSize={24}
                                                                            className={"shopping-card-icon"}/>
                                                        </Badge>
                                                    </div>
                                                </BootstrapTooltip>
                                                <FaCircle className={"circle"} fontSize={42}/>
                                                <BootstrapTooltip placeMent={"left"} title="ثبت نام">
                                                    <div className={"inline-block-2"}>
                                                        <div className="dropdown">
                                                            <FaUserPlus fontSize={24}
                                                                        className={"user-icon dropdown-toggle"}
                                                                        id="dropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                            />
                                                            <ul className="dropdown-menu headerDrop-menu"
                                                                aria-labelledby="dropdownMenuButton1">
                                                                <div className={"d-flex justify-content-center"}>
                                                                    <li>
                                                                        <Link className="dropdown-item headerDrop-item " to={"/login"} >ورود</Link>
                                                                    </li>
                                                                </div>
                                                                <div className={"d-flex justify-content-center"}>
                                                                    <li><Link className="dropdown-item headerDrop-item" to={"/register"} >ثبت
                                                                        نام</Link></li>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </BootstrapTooltip>
                                            </Link>
=======
                                <a className="navbar-brand" href="#">
                                    <img src={logoGreen} className="logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <BsThreeDots/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
                                        {this.props.menuList.map(item => <li key={item} className={"nav-item"}>
                                            <a className="nav-link" aria-current="page" href="#">{item} </a>
                                        </li>)}
                                    </ul>
                                    <div className="d-flex justify-content-start">
                                        <form className="d-flex header-icons">
                                            <a className="nav-link" href="#">
                                                <img src={group12} alt="user-icon"
                                                     width="45px"/>
                                                <img src={user} alt="user-icon" width="45px" className={"me-1"}/>
                                            </a>
>>>>>>> main
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
}

export default Header;