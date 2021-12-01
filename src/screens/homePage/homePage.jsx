import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import TechLogos from "../../components/tech-logos/techLogos";
import Courses from "../../components/courses/courses";
import Blog from "../../components/blog/blog";
import TeachersBanner from "../../components/teachers_banner/teachersBanner";
import FavCourses from "../../components/courses/favCourses/favCourses";
import Footer from "../../components/footer/footer";
import Loading from "../../components/common/loading/loadingForHomePage";
import {GetCoursesData} from "../../core/services/API/course/getHomePageCourses.api";
import {GetFavCoursesData} from "../../core/services/API/course/getFavCourses.api";
import {GetAll6BlogData} from "../../core/services/API/blog/get6BlogData.api";

const HomePage = (props) => {
    const [courseData, setCourseData] = useState([]);
    const [favCourseData, setFavCourseData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [loadingForHomePageCourses, setLoadingForHomePageCourses] = useState(false);
    const getHomePageCourses = async () => {
        const result = await GetCoursesData();
        setCourseData(result);
        setLoadingForHomePageCourses(true);
    };
    const getFavCourses = async () => {
        const result = await GetFavCoursesData();
        setFavCourseData(result);
    };

    const get6BlogData = async () => {
        const result = await GetAll6BlogData();
        setBlogData(result);
    };
    useEffect(() => {
        getHomePageCourses();
        getFavCourses();
        get6BlogData();
    }, []);

    return (

        <>
            {loadingForHomePageCourses ? <>
                <Header menuList={props.menuList} userInfo={props.userInfo}/>
                <Banner
                    placeholder={props.placeholder}
                    title={props.bannerTitle}
                    details={props.bannerDetail}/>
                <TechLogos/>
                <Courses coursesTitle={props.coursesTitle}
                         coursesBtnTitle={props.coursesBtnTitle}
                         courseInfo={courseData}

                />
                <Blog blogTitle={props.blogTitle}
                      blogBtnTitle={props.blogBtnTitle}
                      blogInfo={blogData}
                />
                <TeachersBanner teachersInfo={props.teachersInfo}
                                teachersTitle={props.teachersTitle}
                />
                <FavCourses favCoursesInfo={favCourseData}
                            favCoursesTitle={props.favCoursesTitle}
                            coursesBtnTitle={props.coursesBtnTitle}
                />
                <Footer footerInfo={props.footerInfo}/>
            </> : <Loading/>}

        </>

    );
};

export default HomePage;
