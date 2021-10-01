import React from 'react';
import "./coursesPage.css"
import Header from "../../components/header/header";
import SearchBox from "../../components/searchBox/serachbox";
import DropDownBtn from "../../components/dropDownBtn/dropDownBtn";
import CoursesBody from "../../components/courses/coursesBody/coursesBody";
import Pagination from "../../components/common/pagination/pagination";
import group12 from "../../assets/img/Group 12.svg";
import user from "../../assets/img/user.svg";

const CoursesPage = (props) => {
    return (
        <>
            <Header menuList={props.menuList}/>

            <div className={"container pt-3 mt-5"}>
                <div className={"back-div"}>
                    <div className={"row"}>
                        <form className="d-flex pe-4 py-3 col-md-8 col-lg-9 col-sm-7 col-7">
                            <SearchBox placeHolder={props.placeHolder}/>
                        </form>
                        <div className={"col-lg-3 col-md-4 col-sm-5 col-5 pe-2"}>
                           <DropDownBtn/>
                        </div>
                    </div>
                </div>
                <CoursesBody courseInfo={props.fullCourseInfo}/>

                <div className="d-flex justify-content-center">
                    <form className="d-flex">
                        <Pagination itemsCount={props.itemsCount4Paginate}
                                    pageSize={props.pageSize}
                                    currentPage={props.currentPage}
                                    onPageChange={props.onPageChange}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;
