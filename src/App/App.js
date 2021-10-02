import './App.css';
import React, {Component} from 'react';
import HomePage from "../screens/homePage";
import image1 from "../assets/img/02.jpg"
import image2 from "../assets/img/09.jpg"
import image3 from "../assets/img/06.jpg"
import image4 from "../assets/img/03.jpg"
import image5 from "../assets/img/01.jpg"
import image6 from "../assets/img/04.jpg"
import blogBanner1 from "../assets/img/006.jpg"
import blogBanner2 from "../assets/img/005.jpg"
import blogBanner3 from "../assets/img/009.jpg"
import blogBanner4 from "../assets/img/007.jpg"
import blogBanner5 from "../assets/img/003.jpg"
import blogBanner6 from "../assets/img/008.jpg"
import teacherImg1 from "../assets/img/test_1.png"
import teacherImg2 from "../assets/img/test_2.png"
import footerLine from "../assets/img/Path 1.svg";
import CoursesPage from "../screens/coursesPage/coursesPage";
import {paginate} from "../utils/paginate";
import {Route, Switch} from "react-router-dom";


class App extends Component {
    state = {
        menuList: [
            {
                menuItem: "خانه",
                routeAddress: "/",
            },
            {
                menuItem: "دوره ها",
                routeAddress: "/courses",
            },
            {
                menuItem: "معرفی مدرسین",
                routeAddress: "/",
            },
            {
                menuItem: "بلاگ",
                routeAddress: "/",
            },
            {
                menuItem: "پرسش و پاسخ",
                routeAddress: "/",
            },
            {
                menuItem: "درخواست مشاوره",
                routeAddress: "/",
            },
            {
                menuItem: "درباره ما",
                routeAddress: "/",
            },
        ],

        placeHolder: " جستجو دوره های مختلف ...",
        bannerTitle: "آموزش برنامه نویسی ، خودآموزی ، ورود به بازارکار ",
        bannerDetail: "حرفه ایی شدن رو از امروز شروع کن ",

        coursesInfo: {
            obj1: {
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                imgAddress: image1,
                teacher: "حسامی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            obj2: {
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
            obj3: {
                imgAddress: image2,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "4:29:00",
                price: " 450،000 تومان",
            },
            obj4: {
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            obj5: {
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            obj6: {
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "7:32:00",
                price: " 200،000 تومان",
            },
            obj7: {
                imgAddress: image5,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            obj8: {
                imgAddress: image6,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "6:28:00",
                price: " 250،000 تومان",
            },


        },
        coursesTitle: "اخرین دوره های مجموعه",
        coursesBtnTitle: "مشاهده همه دوره ها",
        fullCoursesInfo: [
            {
                id: 1,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                imgAddress: image1,
                teacher: "حسامی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 2,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
            {
                id: 3,
                imgAddress: image2,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "4:29:00",
                price: " 450،000 تومان",
            },
            {
                id: 4,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            {
                id: 5,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 6,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "7:32:00",
                price: " 200،000 تومان",
            },
            {
                id: 7,
                imgAddress: image5,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 8,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                imgAddress: image1,
                teacher: "حسامی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 9,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
            {
                id: 10,
                imgAddress: image2,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "4:29:00",
                price: " 450،000 تومان",
            },
            {
                id: 11,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            {
                id: 12,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 13,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "7:32:00",
                price: " 200،000 تومان",
            },
            {
                id: 14,
                imgAddress: image5,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 15,
                imgAddress: image6,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "6:28:00",
                price: " 250،000 تومان",
            },
            {
                id: 16,
                imgAddress: image2,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "4:29:00",
                price: " 450،000 تومان",
            },
            {
                id: 17,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            {
                id: 18,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 19,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "7:32:00",
                price: " 200،000 تومان",
            },
            {
                id: 20,
                imgAddress: image6,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "6:28:00",
                price: " 250،000 تومان",
            },
            {
                id: 21,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
            {
                id: 22,
                imgAddress: image2,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "4:29:00",
                price: " 450،000 تومان",
            },
            {
                id: 23,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            {
                id: 24,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 25,
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "7:32:00",
                price: " 200،000 تومان",
            },
            {
                id: 26,
                imgAddress: image5,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 27,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                imgAddress: image1,
                teacher: "حسامی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
            {
                id: 28,
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
        ],

        blogInfo: {
            bl1: {
                docNumber: "مقاله شماره 17",
                title: "میشه یه شبه برنامه نویس شد؟ ",
                imgAddress: blogBanner1,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
            bl2: {
                docNumber: "مقاله شماره 18",
                title: " نگاهی به نمونه کارهای شما ",
                imgAddress: blogBanner2,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
            bl3: {
                docNumber: "مقاله شماره 19",
                title: "خودآموزی ، ورود به بازارکار ",
                imgAddress: blogBanner3,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
            bl4: {
                docNumber: "مقاله شماره 20",
                title: " نگاهی به نمونه کارهای شما ",
                imgAddress: blogBanner4,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
            bl5: {
                docNumber: "مقاله شماره 21",
                title: "میشه یه شبه برنامه نویس شد؟ ",
                imgAddress: blogBanner5,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
            bl6: {
                docNumber: "مقاله شماره 22",
                title: "حرفه ایی شدن رو از امروز شروع کن ",
                imgAddress: blogBanner6,
                docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                    "                                                    اگر به صورت فریلنسری\n" +
                    "                                                    هم کار می‌کنید مشتری",
            },
        },
        blogTitle: "اخرین مقالات سایت",
        blogBtnTitle: "مشاهده همه مقالات",

        teachersInfo: {
            th1: {
                imgAddress: teacherImg1,
                lastName: "حسامی",
            },
            th2: {
                imgAddress: teacherImg2,
                lastName: "جعفری",
            },
            th3: {
                imgAddress: teacherImg1,
                lastName: "رستمی",
            },
            th4: {
                imgAddress: teacherImg2,
                lastName: "حسامی"
            },
            th5: {
                imgAddress: teacherImg1,
                lastName: "رضایی",
            },
            th6: {
                imgAddress: teacherImg2,
                lastName: "جعفری",
            },
        },
        teachersTitle: "مدرسین نمونه مجموعه آموزشی ما",

        favCoursesTitle: "دوره های محبوب سایت",
        favCoursesInfo: {
            obj1: {
                imgAddress: image3,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "جعفری",
                time: "9:22:00",
                price: " 300،000 تومان",
            },
            obj2: {
                imgAddress: image6,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رستمی",
                time: "6:28:00",
                price: " 250،000 تومان",
            },
            obj3: {
                imgAddress: image4,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "حسامی",
                time: "5:27:00",
                price: " 400،000 تومان",
            },
            obj4: {
                imgAddress: image5,
                title: "آموزش جامع زبان پایتون از صفر تا صد",
                teacher: "رضایی",
                time: "7:28:00",
                price: " 500،000 تومان",
            },
        },

        footerInfo: {
            item1: {
                title: "دسترسی",
                lineImage: footerLine,
                it1: " دوره ها",
                it2: "معرفی مدرسین",
                it3: "بلاگ",
            },
            item2: {
                title: "متداول",
                lineImage: footerLine,
                it1: " پرسش و پاسخ ",
                it2: "درخواست مشاوره",
                it3: "ورود",
            },
            item3: {
                title: "ارتباط با ما",
                lineImage: footerLine,
                it1: "تماس با ما",
                it2: " درباره ما",
                it3: "رزومه",
            },
        },

        pageSize: 12,
        currentPage: 1,


    }
    handlePageChange = page => {
        this.setState({currentPage: page})
    }


    render() {
        const {
            menuList,
            placeHolder,
            bannerDetail,
            bannerTitle,
            coursesTitle,
            coursesBtnTitle,
            coursesInfo,
            blogTitle,
            blogBtnTitle,
            blogInfo,
            teachersInfo,
            teachersTitle,
            favCoursesInfo,
            favCoursesTitle,
            footerInfo,
            fullCoursesInfo,
            pageSize,
            currentPage,
            headerRoutingAddress
        } = this.state;

        const paginatedCourses = paginate(fullCoursesInfo, currentPage, pageSize);

        return (
            <>
                <main className="routing">
                    <Switch>
                        <Route path="/" exact component={() => <HomePage menuList={menuList}
                                                                         headerRouting={headerRoutingAddress}
                                                                         placeholder={placeHolder}
                                                                         bannerTitle={bannerTitle}
                                                                         bannerDetail={bannerDetail}
                                                                         coursesTitle={coursesTitle}
                                                                         coursesBtnTitle={coursesBtnTitle}
                                                                         courseInfo={coursesInfo}
                                                                         blogTitle={blogTitle}
                                                                         blogBtnTitle={blogBtnTitle}
                                                                         blogInfo={blogInfo}
                                                                         teachersInfo={teachersInfo}
                                                                         teachersTitle={teachersTitle}
                                                                         favCoursesInfo={favCoursesInfo}
                                                                         favCoursesTitle={favCoursesTitle}
                                                                         footerInfo={footerInfo}
                        />}/>
                        <Route path="/courses" component={() => <CoursesPage menuList={menuList}
                                                                             headerRouting={headerRoutingAddress}
                                                                             placeHolder={placeHolder}
                                                                             fullCourseInfo={paginatedCourses}
                                                                             itemsCount4Paginate={Object.keys(fullCoursesInfo).length}
                                                                             pageSize={pageSize}
                                                                             currentPage={currentPage}
                                                                             onPageChange={this.handlePageChange}
                                                                             footerInfo={footerInfo}

                        />}/>
                    </Switch>
                </main>

            </>
        );
    }
}

export default App;
