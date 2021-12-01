import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../screens/homePage/homePage";
import CoursesPage from "../screens/coursesPage/coursesPage";
import FAQ from "../screens/fAQ/fAQ";
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

import {footerInfoJson} from "../core/services/jsonFiles/footerData.json";
import GetUserDetails from "../core/services/API/auth/GetUserDetail.api";

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
    const [currentPage, setCurrentPage] = useState(1);

    //blog
    const [maghalatTitle] = useState(maghalatTitleJson);
    const [placeHolderForMaghalat] = useState(placeHolderForMaghalatJson);
    //footer
    const [footerInfo] = useState(footerInfoJson);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [userInfo, setUserInfo] = useState([]);

    const getUserInfo = async () => {
        const result = await GetUserDetails();
        setUserInfo(result);
    }
    useEffect(() => {
        getUserInfo();
    }, []);


    return (
        <>
            <main className="routing">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <HomePage
                                userInfo={userInfo}
                                menuList={menuList}
                                placeholder={placeHolder}
                                bannerTitle={bannerTitle}
                                bannerDetail={bannerDetail}
                                coursesTitle={coursesTitle}
                                coursesBtnTitle={coursesBtnTitle}
                                blogTitle={blogTitle}
                                blogBtnTitle={blogBtnTitle}
                                teachersInfo={teachersInfo}
                                teachersTitle={teachersTitle}
                                favCoursesTitle={favCoursesTitle}
                                footerInfo={footerInfo}
                            />
                        )}
                    />
                    <Route
                        path="/courses"
                        render={() => (
                            <CoursesPage
                                menuList={menuList}
                                placeHolder={placeHolder}
                                footerInfo={footerInfo}
                                userInfo={userInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/questions"}
                        render={() => (
                            <FAQ
                                menuList={menuList}
                                footerInfo={footerInfo}
                                userInfo={userInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/about"}
                        render={() => (
                            <About menuList={menuList} footerInfo={footerInfo} userInfo={userInfo}/>
                        )}
                    />

                    <Route
                        path={"/teachers"}
                        render={() => (
                            <Teachers
                                placeHolder={placeHolder}
                                menuList={menuList}
                                footerInfo={footerInfo}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                userInfo={userInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/request"}
                        render={() => (
                            <DarkhasteMoshavere menuList={menuList} footerInfo={footerInfo} userInfo={userInfo}/>
                        )}
                    />

                    <Route path={"/login"} component={() => <Login/>}/>
                    <Route path={"/register"} component={() => <Register/>}/>
                    <Route path={"/forgetPassword"} component={() => <ForgetPass/>}/>
                    <Route
                        path={"/course/:id"}
                        render={() => (
                            <Course
                                menuList={menuList}
                                footerInfo={footerInfo}
                                userInfo={userInfo}
                            />
                        )}
                    />
                    <Route path={"/not-found"} component={() => <NotFound/>}/>

                    <Route
                        path="/blog"
                        exact
                        render={() => (
                            <Maghalat
                                menuList={menuList}
                                maghalatTitle={maghalatTitle}
                                placeHolder={placeHolderForMaghalat}
                                footerInfo={footerInfo}
                                userInfo={userInfo}
                            />
                        )}
                    />
                    <Route
                        path={"/blog/maghale/:id"}
                        render={() => (
                            <Maghale
                                menuList={menuList}
                                footerInfo={footerInfo}
                                userInfo={userInfo}
                            />
                        )}
                    />

                    <Route path={"/dashboard/:id"} component={() => <PanelAdmin userInfo={userInfo}/>}/>

                    <Route path={"/cart"} component={() => <Cart/>}/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </>
    );
};

export default AuthUser;
