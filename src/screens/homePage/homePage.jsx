import React, {useEffect, useState} from 'react';
import Banner from "../../components/banner/banner";
import TechLogos from "../../components/tech-logos/techLogos";
import Courses from "../../components/courses/courses";
import Blog from "../../components/blog/blog";
import TeachersBanner from "../../components/teachers_banner/teachersBanner";
import FavCourses from "../../components/courses/favCourses/favCourses";
import Loading from "../../components/common/loading/loadingForHomePage";
import {GetCoursesData} from "../../core/services/API/course/getHomePageCourses.api";
import {GetFavCoursesData} from "../../core/services/API/course/getFavCourses.api";
import {GetAll6BlogData} from "../../core/services/API/blog/get6BlogData.api";
import {
    bannerDetailJson,
    bannerTitleJson, blogBtnTitleJson, blogTitleJson, coursesBtnTitleJson,
    courseTitleJson,
    searchPlaceHolderJson
} from "../../core/services/jsonFiles/bannerItems.json";
import {teachersInfoJson, teachersTitleJson} from "../../core/services/jsonFiles/teachersInfo.json";
import {
    favCoursesTitleJson,
} from "../../core/services/jsonFiles/titles.json";


const HomePage = () => {
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
                <Banner
                    placeholder={searchPlaceHolderJson}
                    title={bannerTitleJson}
                    details={bannerDetailJson}/>
                <TechLogos/>
                <Courses coursesTitle={courseTitleJson}
                         coursesBtnTitle={coursesBtnTitleJson}
                         courseInfo={courseData}

                />
                <Blog blogTitle={blogTitleJson}
                      blogBtnTitle={blogBtnTitleJson}
                      blogInfo={blogData}
                />
                <TeachersBanner teachersInfo={teachersInfoJson}
                                teachersTitle={teachersTitleJson}
                />
                <FavCourses favCoursesInfo={favCourseData}
                            favCoursesTitle={favCoursesTitleJson}
                            coursesBtnTitle={coursesBtnTitleJson}
                />
            </> : <Loading/>}
        </>
    );
};

export default HomePage;
