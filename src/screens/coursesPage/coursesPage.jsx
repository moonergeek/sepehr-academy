import React, {useEffect, useState} from 'react';
import "./coursesPage.css"
import DropDownBtn from "../../components/dropDownBtn/dropDownBtn";
import CoursesBody from "../../components/courses/coursesBody/coursesBody";
import Pagination from "../../components/common/pagination/pagination";
import Title from "../../components/moshavere-req/Title/Title";
import SearchBoxForCourses from "../../components/searchBox/searchBoxForCourses/searchBoxForCourses";
import Loading from "../../components/common/loading/loading";
import {GetAllCoursesData} from "../../core/services/API/course/getAllCourses.api";
import {paginate} from "../../core/utils/paginate";


const CoursesPage = (props) => {
    const [allCoursesData, setAllCoursesData] = useState([]);
    const [loadingForCourses, setLoadingForCourses] = useState(false);
    const [pageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const getAllCourses = async () => {
        const result = await GetAllCoursesData();
        setAllCoursesData(result);
        setLoadingForCourses(true);
    };
    useEffect(() => {
        getAllCourses();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedCourses = paginate(allCoursesData, currentPage, pageSize);

    return (
        <>
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
                {loadingForCourses ? <>
                    <div>
                        <CoursesBody courseInfo={paginatedCourses}/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <form className="d-flex mb-2">
                            <Pagination itemsCount={Object.keys(allCoursesData).length}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                            />
                        </form>
                    </div>
                </> : <Loading/>}

            </div>
        </>
    );
};

export default CoursesPage;
