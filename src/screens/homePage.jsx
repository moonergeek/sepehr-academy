import React from 'react';
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import TechLogos from "../components/tech-logos/techLogos";
import Courses from "../components/courses/courses";

const HomePage = (props) => {
    return (
        <>
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
        </>
    );
};

export default HomePage;
