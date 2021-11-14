import React, {useState} from 'react';
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import TechLogos from "../../components/tech-logos/techLogos";
import Courses from "../../components/courses/courses";
import Blog from "../../components/blog/blog";
import TeachersBanner from "../../components/teachers_banner/teachersBanner";
import FavCourses from "../../components/courses/favCourses/favCourses";
import Footer from "../../components/footer/footer";
import Loading from "../../components/common/loading/loadingForHomePage";

const HomePage = (props) => {


    return (

        <>
            {props.loading ?     <>
                <Header menuList={props.menuList}/>
                <Banner
                    placeholder={props.placeholder}
                    title={props.bannerTitle}
                    details={props.bannerDetail}/>
                <TechLogos/>
                <Courses coursesTitle={props.coursesTitle}
                         coursesBtnTitle={props.coursesBtnTitle}
                         courseInfo={props.courseInfo}

                />
                <Blog blogTitle={props.blogTitle}
                      blogBtnTitle={props.blogBtnTitle}
                      blogInfo={props.blogInfo}
                />
                <TeachersBanner teachersInfo={props.teachersInfo}
                                teachersTitle={props.teachersTitle}
                />
                <FavCourses favCoursesInfo={props.favCoursesInfo}
                            favCoursesTitle={props.favCoursesTitle}
                            coursesBtnTitle={props.coursesBtnTitle}
                />
                <Footer footerInfo={props.footerInfo}/>
            </> : <Loading />}

        </>

    );
};

export default HomePage;
