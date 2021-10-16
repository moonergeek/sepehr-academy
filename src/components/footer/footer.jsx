import React from 'react';
import "./footer.css"
import FooterMenuHeader from "./footerMenuHeader";
import CopyRightText from "./copyRightText";
import Social from "./social";
import FooterSubLine from "./footerSubLine";

const Footer = (props) => {
    return (
        <>
            <section className="footer">
                <div className="footer-container mt-5">
                    <div className="container">
                        <div className="footer-header pt-4">
                            <div className="row">
                             <FooterMenuHeader footerInfo={props.footerInfo}/>
                            </div>
                            <div className="row pt-4">
                                <div className="col-sm-12">
                                   <FooterSubLine/>
                                </div>
                            </div>
                            <div className="row pt-1">
                                <div className="col-sm-9">
                                   <CopyRightText/>
                                </div>
                                <div className="col-sm-3 mb-1">
                                    <Social/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
