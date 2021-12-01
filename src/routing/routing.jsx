import React, {useState} from 'react';
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

const Routing = () => {
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


    //blog
    const [maghalatTitle] = useState(maghalatTitleJson);
    const [placeHolderForMaghalat] = useState(placeHolderForMaghalatJson);
    //footer

    return (
        <>
            <main className="routing">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <HomePage
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
                            />
                        )}
                    />
                    <Route
                        path="/courses"
                        render={() => (
                            <CoursesPage
                                placeHolder={placeHolder}
                            />
                        )}
                    />
                    <Route
                        path={"/questions"}
                        render={() => (
                            <FAQ/>
                        )}
                    />
                    <Route
                        path={"/about"}
                        render={() => (
                            <About/>
                        )}
                    />

                    <Route
                        path={"/teachers"}
                        render={() => (
                            <Teachers
                                placeHolder={placeHolder}/>
                        )}
                    />
                    <Route
                        path={"/request"}
                        render={() => (
                            <DarkhasteMoshavere/>
                        )}
                    />

                    <Route path={"/login"} component={() => <Login/>}/>
                    <Route path={"/register"} component={() => <Register/>}/>
                    <Route path={"/forgetPassword"} component={() => <ForgetPass/>}/>
                    <Route
                        path={"/course/:id"}
                        render={() => (
                            <Course/>
                        )}
                    />
                    <Route path={"/not-found"} component={() => <NotFound/>}/>

                    <Route
                        path="/blog"
                        exact
                        render={() => (
                            <Maghalat
                                maghalatTitle={maghalatTitle}
                                placeHolder={placeHolderForMaghalat}
                            />
                        )}
                    />
                    <Route
                        path={"/blog/maghale/:id"}
                        render={() => (
                            <Maghale/>
                        )}
                    />

                    <Route path={"/dashboard/:id"} component={() => <PanelAdmin/>}/>

                    <Route path={"/cart"} component={() => <Cart/>}/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </>
    );
};

export default Routing;
