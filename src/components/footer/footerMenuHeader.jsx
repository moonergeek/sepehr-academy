import React from 'react';
import "./footer.css"
import footerLine from "../../assets/img/Path 1.svg";
import enamad from "../../assets/img/Group 20.svg"
import samandehi from "../../assets/img/Group 19.svg"
import zarrinPal from "../../assets/img/Group 18.svg"

const FooterMenuHeader = (props) => {
    return (
        <>
            {Object.keys(props.footerInfo).map(item => <div className="col-md-3 col-6">
                <div className="title-header">
                    <div className="row">
                        <div className="col-sm-12">
                <span className="footer-title">
                    {props.footerInfo[item].title}
                </span>

                        </div>
                        <div className="row">
                            <img className="col-sm-2 line-image-footer" src={props.footerInfo[item].lineImage}
                                 alt=""/>
                        </div>
                    </div>
                </div>
                <div className="title-body mt-3">
                    <nav className="nav flex-column">
                        <a className="nav-link nav-link-footer" aria-current="page" href="#">{props.footerInfo[item].it1}</a>
                        <a className="nav-link nav-link-footer" href="#"> {props.footerInfo[item].it2} </a>
                        <a className="nav-link nav-link-footer" href="#">{props.footerInfo[item].it3} </a>
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
