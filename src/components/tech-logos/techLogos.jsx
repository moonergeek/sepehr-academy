import React from 'react';
import "./techlogos.css"
import techLogo from "../../assets/img/svg/technology-logo.svg"

const TechLogos = () => {
    return (
        <>
            <section className="tech-logos">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-12 tech-background">
                            <img className="tech-img" src={techLogo} alt="logos"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechLogos;
