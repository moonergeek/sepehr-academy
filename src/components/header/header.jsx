import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img src="./../../assets/img/logo%20green.png" className="logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">خانه </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">دوره ها</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">معرفی مدرسین</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">بلاگ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">پرسش و پاسخ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> درخواست مشاوره </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">درباره ما</a>
                                        </li>

                                    </ul>
                                    <div className="d-flex justify-content-start">
                                        <form className="d-flex header-icons">
                                            <a className="nav-link" href="#">
                                                <img src="./../../assets/img/Group%2012.svg" alt="user-icon"
                                                     width="45px"/>
                                                <img src="./../../assets/img/user.png" alt="user-icon" width="45px"/>
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