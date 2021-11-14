import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../screens/homePage/homePage";
import CoursesPage from "../screens/coursesPage/coursesPage";
import FQA from "../screens/fQA/fQA";
import About from "../screens/about/About";
import Teachers from "../screens/teachers/Teachers";
import DarkhasteMoshavere from "../screens/moshavere/darkhasteMoshavere";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ForgetPass from "../screens/forgetPass/forgetPass";
import Course from "../screens/Course/Course";
import NotFound from "../screens/NotFound/NotFound";
import Maghalat from "../screens/blog/Maghalat";
import Maghale from "../screens/blog/maghale";
import PanelAdmin from "../screens/panel-Admin/panelAdmin";
import Cart from "../screens/cart/Cart";
import {menuItems} from "../core/services/jsonFiles/menuItems.json";
import {
    bannerDetailJson,
    bannerTitleJson, blogBtnTitleJson, blogTitleJson, coursesBtnTitleJson,
    courseTitleJson,
    searchPlaceHolderJson
} from "../core/services/jsonFiles/bannerItems.json";
import {teachersInfoJson, teachersTitleJson} from "../core/services/jsonFiles/teachersInfo.json";
import {
    favCoursesTitleJson,
    maghalatTitleJson,
    placeHolderForMaghalatJson
} from "../core/services/jsonFiles/titles.json";
import {
    accConfigListJson,
    accCoursesListJson,
    accFullListJson,
    accProfileListJson
} from "../core/services/jsonFiles/accordionData.json";
import {footerInfoJson} from "../core/services/jsonFiles/footerData.json";
import {GetCoursesData} from "../core/services/API/getHomePageCourses.api";
import {GetFavCoursesData} from "../core/services/API/getFavCourses.api";
import {GetAll6BlogData} from "../core/services/API/get6BlogData.api";
import {GetAllCoursesData} from "../core/services/API/getAllCourses.api";
import {GetAllBlogsData} from "../core/services/API/getAllBlogs.api";
import {paginate} from "../utils/paginate";

const AuthUser = () => {
    const [menuList] = useState(menuItems);
    const [placeHolder] = useState(searchPlaceHolderJson);
    const [bannerTitle] = useState(bannerTitleJson);
    const [bannerDetail] = useState(bannerDetailJson);
    const [coursesTitle] = useState(courseTitleJson);
    const [coursesBtnTitle] = useState(coursesBtnTitleJson);
    const [blogTitle] = useState(blogTitleJson);
    const [blogBtnTitle] = useState(blogBtnTitleJson);
    const [teachersInfo] = useState(teachersInfoJson);
    const [teachersTitle] = useState(teachersTitleJson);
    const [favCoursesTitle] = useState(favCoursesTitleJson);
    const [pageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    //accordion data
    const [accFullList] = useState(accFullListJson);
    const [accProfileList] = useState(accProfileListJson);
    const [accCoursesList] = useState(accCoursesListJson);
    const [accConfigList] = useState(accConfigListJson);
    //blog
    const [maghalatTitle] = useState(maghalatTitleJson);
    const [placeHolderForMaghalat] = useState(placeHolderForMaghalatJson);
    //footer
    const [footerInfo] = useState(footerInfoJson);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    //backend-api
    const [courseData, setCourseData] = useState([]);
    const [favCourseData, setFavCourseData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [allCoursesData, setAllCoursesData] = useState([]);
    const [allBlogData, setAllBlogData] = useState([]);

    const getHomePageCourses = async () => {
        const result = await GetCoursesData();
        setCourseData(result);
    };
    const getFavCourses = async () => {
        const result = await GetFavCoursesData();
        setFavCourseData(result);
    };
    const get6BlogData = async () => {
        const result = await GetAll6BlogData();
        setBlogData(result);
    };

    const getAllCourses = async () => {
        const result = await GetAllCoursesData();
        setAllCoursesData(result);
    };
    const getAllBlogs = async () => {
        const result = await GetAllBlogsData();
        setAllBlogData(result);
    };
    useEffect(() => {
        getHomePageCourses();
        getFavCourses();
        get6BlogData();
        getAllCourses();
        getAllBlogs();
    }, []);
    const paginatedCourses = paginate(allCoursesData, currentPage, pageSize);
    const paginatedMaghalat = paginate(allBlogData, currentPage, 6);


    return (
        <>
            <main className="routing">
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={() => (
                            <HomePage
                                menuList={menuList}
                                placeholder={placeHolder}
                                bannerTitle={bannerTitle}
                                bannerDetail={bannerDetail}
                                coursesTitle={coursesTitle}
                                coursesBtnTitle={coursesBtnTitle}
                                courseInfo={courseData}
                                blogTitle={blogTitle}
                                blogBtnTitle={blogBtnTitle}
                                blogInfo={blogData}
                                teachersInfo={teachersInfo}
                                teachersTitle={teachersTitle}
                                favCoursesInfo={favCourseData}
                                favCoursesTitle={favCoursesTitle}
                                footerInfo={footerInfo}
                                testapi={courseData}
                            />
                        )}
                    />
                    <Route
                        path="/courses"
                        component={() => (
                            <CoursesPage
                                menuList={menuList}
                                placeHolder={placeHolder}
                                fullCourseInfo={paginatedCourses}
                                itemsCount4Paginate={Object.keys(allCoursesData).length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                footerInfo={footerInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/questions"}
                        component={() => (
                            <FQA
                                menuList={menuList}
                                accFullList={accFullList}
                                accCoursesList={accCoursesList}
                                accProfileList={accProfileList}
                                accConfigList={accConfigList}
                                footerInfo={footerInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/about"}
                        component={() => (
                            <About menuList={menuList} footerInfo={footerInfo}/>
                        )}
                    />

                    <Route
                        path={"/teachers"}
                        component={() => (
                            <Teachers
                                placeHolder={placeHolder}
                                menuList={menuList}
                                footerInfo={footerInfo}
                                itemsCount4Paginate={Object.keys(courseData).length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        )}
                    />
                    <Route
                        path={"/request"}
                        component={() => (
                            <DarkhasteMoshavere menuList={menuList} footerInfo={footerInfo}/>
                        )}
                    />

                    <Route path={"/login"} component={() => <Login/>}/>
                    <Route path={"/register"} component={() => <Register/>}/>
                    <Route path={"/forgetPassword"} component={() => <ForgetPass/>}/>
                    <Route
                        path={"/course/:id"}
                        component={() => (
                            <Course
                                menuList={menuList}
                                footerInfo={footerInfo}
                                loading={null}
                            />
                        )}
                    />
                    <Route path={"/not-found"} component={() => <NotFound/>}/>

                    <Route
                        path="/blog"
                        exact
                        component={() => (
                            <Maghalat
                                menuList={menuList}
                                maghalatTitle={maghalatTitle}
                                placeHolder={placeHolderForMaghalat}
                                footerInfo={footerInfo}
                                maghale={allBlogData}
                                fullInfo={paginatedMaghalat}
                                itemsCount4Paginate={allBlogData.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                loading={null}
                            />
                        )}
                    />
                    <Route
                        path={"/blog/maghale/:id"}
                        component={() => (
                            <Maghale
                                menuList={menuList}
                                footerInfo={footerInfo}
                                maghale={allBlogData}
                            />
                        )}
                    />

                    <Route path={"/dashboard"} component={() => <PanelAdmin/>}/>

                    <Route path={"/cart"} component={() => <Cart/>}/>
                </Switch>
            </main>
        </>
    );
};

export default AuthUser;
