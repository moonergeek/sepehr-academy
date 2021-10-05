import React, {Component} from 'react';
import logoGreen from "../../assets/img/logo green.png";
import "./header.css"
import {BsThreeDots, FaCircle, FaUserCog, MdShoppingCart,} from "react-icons/all";
import {NavLink, Link} from "react-router-dom";
import Badge from '@mui/material/Badge';


class Header extends Component {

    render() {
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
                                    <BsThreeDots/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        {Object.keys(this.props.menuList).map(item => <NavLink
                                            key={item} className={"nav-item nav-link"}
                                            to={this.props.menuList[item].routeAddress}>
                                            {this.props.menuList[item].menuItem}
                                        </NavLink>)}
                                    </div>
                                    <div className="d-flex justify-content-start ">
                                        <form className="d-flex header-icons">
                                            <Link className="nav-link ">
                                                <FaCircle className={"circle margin"} fontSize={42}/>
                                                <Badge className={"shopping-badge"} badgeContent={4} color="secondary">
                                                    <MdShoppingCart fontSize={24} className={"shopping-card-icon"}/>
                                                </Badge>
                                                <FaCircle className={"circle"} fontSize={42}/>
                                                <FaUserCog fontSize={24} className={"user-icon "}/>
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
}

export default Header;