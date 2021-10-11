import React, {Component} from 'react';
import logoGreen from "../../assets/img/logo green.png";
import group12 from "../../assets/img/Group 12.svg";
import user from "../../assets/img/user.svg";
import "./header.css"
import {BsThreeDots} from "react-icons/all";


class Header extends Component {
    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
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