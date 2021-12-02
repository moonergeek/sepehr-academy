import React from 'react';
import "./banner.css"
import services from "../../assets/img/svg/banner-services.svg"
import manImage from "../../assets/img/svg/part_1.svg"
import SearchBox from "../searchBox/serachbox";


const Banner = (props) => {
    return (
        <>
            <section className="banner-div">
                <div className="container mt-4 banner">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 col-lg-7 col-md-8">
                                    <div className="row ms-1">
                                        <div className="col-sm-12 me-4 pt-4">
                                            <span className="banner-text">{props.title}</span>
                                        </div>
                                    </div>
                                    <div className="row ms-1">
                                        <div className="col-sm-9 me-5 pe-5 pt-3">
                                            <span className="banner-detail">{props.details} </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <form className="d-flex pe-4 pt-4 col-md-9 col-lg-10 col-sm-10 ">
                                            <SearchBox placeholder={props.placeholder}/>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10 col-md-6 pe-5 mt-5">
                                            <img className="services-img" src={services} alt="services"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-10 col-lg-5 col-md-4">
                                    <div className="d-flex justify-content-end mt-4">
                                        <div className="circle-background ms-2 mb-3">
                                            <form className="d-flex">
                                                <img className="banner-img ms-4" src={manImage} width="200px"
                                                     alt=""/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Banner;
