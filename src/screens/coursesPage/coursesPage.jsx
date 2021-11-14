import React from 'react';
import "./coursesPage.css"
import Header from "../../components/header/header";
import SearchBox from "../../components/searchBox/serachbox";
import DropDownBtn from "../../components/dropDownBtn/dropDownBtn";
import CoursesBody from "../../components/courses/coursesBody/coursesBody";
import Pagination from "../../components/common/pagination/pagination";
import Footer from "../../components/footer/footer";
import Title from "../../components/moshavere-req/Title/Title";
import Course from "../Course/Course";
import {Route} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import SearchBoxForCourses from "../../components/searchBox/searchBoxForCourses/searchBoxForCourses";
import Loading from "../../components/common/loading/loading";


const CoursesPage = (props) => {


    return (
        <>
            <Header menuList={props.menuList}/>
            <Title Title={"دوره ها"}/>

            <div className={"container pt-1 mt-4"}>
                <div className={"back-div"}>
                    <div className={"row"}>
                        <form className="d-flex pe-4 py-3 col-md-8 col-lg-9 col-sm-7 col-7">
                            <SearchBoxForCourses placeHolder={props.placeHolder}/>
                        </form>
                        <div className={"col-lg-3 col-md-4 col-sm-5 col-5 pe-2"}>
                            <DropDownBtn/>
                        </div>
                    </div>
                </div>
                {props.loading ? <>
                    <div>
                        <CoursesBody courseInfo={props.fullCourseInfo}/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <form className="d-flex mb-2">
                            <Pagination itemsCount={props.itemsCount4Paginate}
                                        pageSize={props.pageSize}
                                        currentPage={props.currentPage}
                                        onPageChange={props.onPageChange}
                            />
                        </form>
                    </div>
                </> : <Loading/>}

            </div>
            <Footer footerInfo={props.footerInfo}/>

        </>
    );
};

export default CoursesPage;
