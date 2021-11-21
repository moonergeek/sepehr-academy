import React from 'react';
import "./footer.css"
import footerLine from "../../assets/img/Path 1.svg";
import enamad from "../../assets/img/Group 20.svg"
import samandehi from "../../assets/img/Group 19.svg"
import zarrinPal from "../../assets/img/Group 18.svg"
import {Link} from "react-router-dom";

const FooterMenuHeader = (props) => {
    return (
        <>
            {Object.entries(props.footerInfo).map(item => <div className="col-md-3 col-6">
                <div className="title-header">
                    <div className="row">
                        <div className="col-sm-12">
                <span className="footer-title">
                    {item[1].title}
                </span>
                        </div>
                        <div className="row">
                            <img className="col-sm-2 line-image-footer" src={item[1].lineImage}
                                 alt=""/>
                        </div>
                    </div>
                </div>
                <div className="title-body mt-3">
                    <nav className="nav flex-column">
                        {/*{console.log(item[1].it1)}*/}
                        <Link to={item[1].it1.routeAddress} className="nav-link nav-link-footer" aria-current="page">
                            {item[1].it1.title}
                        </Link>
                        <Link className="nav-link nav-link-footer"
                              to={item[1].it2.routeAddress}> {item[1].it2.title} </Link>
                        <Link className="nav-link nav-link-footer"
                              to={item[1].it3.routeAddress}>{item[1].it3.title} </Link>
                    </nav>
                </div>
            </div>)}
            <div className="col-md-3 col-6">
                <div className="title-header">
                    <div className="row">
                        <div className="col-sm-12">
                <span className="footer-title">
                    نماد های اینترنتی
                </span>

                        </div>
                        <div className="row">
                            <img className="col-sm-2 line-image-footer" src={footerLine}
                                 alt=""/>
                        </div>
                    </div>
                </div>
                <div className="title-body mt-3">
                    <div className="row pt-2">
                        <div className="col-sm-4">
                            <img className="namad-footer" src={enamad} alt="enamad"/>
                        </div>
                        <div className="col-sm-4">
                            <img className="namad-footer" src={samandehi} alt="samandehi"/>
                        </div>
                        <div className="col-sm-4">
                            <img className="namad-footer" src={zarrinPal}
                                 alt="zarrinpal"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterMenuHeader;
