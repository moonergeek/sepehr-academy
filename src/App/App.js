import './App.css';
import React, {useState, useEffect} from 'react';
import HomePage from "../screens/homePage/homePage";
import teacherImg1 from "../assets/img/test_1.png"
import teacherImg2 from "../assets/img/test_2.png"
import footerLine from "../assets/img/Path 1.svg";
import CoursesPage from "../screens/coursesPage/coursesPage";
import {paginate} from "../utils/paginate";
import {Route, Switch} from "react-router-dom";
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
import Axios from "axios";
import Cart from "../screens/cart/Cart";


const App = () => {
    const [menuList, setMenuList] = useState([
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
            routeAddress: "/teachers",
        },
        {
            menuItem: "بلاگ",
            routeAddress: "/blog",
        },
        {
            menuItem: "سوالات متداول",
            routeAddress: "/questions",
        },
        {
            menuItem: "درخواست مشاوره",
            routeAddress: "/request",
        },
        {
            menuItem: "درباره ما",
            routeAddress: "/about",
        },
    ],);
    console.log(setMenuList)


    const [placeHolder, setPlaceHolder] = useState(" جستجو دوره های مختلف ...");

    const [bannerTitle, setBannerTitle] = useState("آموزش برنامه نویسی ، خودآموزی ، ورود به بازارکار ");
    const [bannerDetail, setBannerDetail] = useState("حرفه ایی شدن رو از امروز شروع کن ");
    const [coursesInfo, setCoursesInfo] = useState({
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
            title: "آموزش جامع پلتفرم Node js",
            teacher: "رستمی",
            time: "4:29:00",
            price: " 450،000 تومان",
        },
        obj4: {
            imgAddress: image3,
            title: "آموزش جامع فریمورک انگولار",
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
            title: "آموزش جامع زبان جاوا از صفر تا صد",
            teacher: "رستمی",
            time: "6:28:00",
            price: " 250،000 تومان",
        },

    },);

    },

    const [coursesTitle, setCoursesTitle] = useState("اخرین دوره های مجموعه");
    const [coursesBtnTitle, setCoursesBtnTitle] = useState("مشاهده همه دوره ها");

    console.log(setPlaceHolder)
    console.log(setBannerTitle)
    console.log(setBannerDetail)
    console.log(setCoursesTitle)
    console.log(setCoursesBtnTitle)

    const [blogTitle, setBlogTitle] = useState("اخرین مقالات سایت");
    const [blogBtnTitle, setBlogBtnTitle] = useState("مشاهده همه مقالات");
    const [teachersInfo, setTeachersInfo] = useState({
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
    });

    const [teachersTitle, setTeachersTitle] = useState("مدرسین نمونه مجموعه آموزشی ما");
    const [favCoursesTitle, setFavCoursesTitle] = useState("دوره های محبوب سایت");

    const [footerInfo, setFooterInfo] = useState({
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
    });

    const [pageSize, setPageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(setBlogTitle)
    console.log(setBlogBtnTitle)
    console.log(setTeachersInfo)
    console.log(setTeachersTitle)
    console.log(setFavCoursesTitle)
    console.log(setFooterInfo)
    console.log(setPageSize)

    //accordion data
    const [accFullList, setAccFullList] = useState([
        {
            id: "heading1",
            div_id: "collapse1",
            accTitle: " چطور میتونم در سایت ثبت نام کنم؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading2",
            div_id: "collapse2",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading3",
            div_id: "collapse3",
            accTitle: "  چطور میتونم حسابم رو ویرایش کنم؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading4",
            div_id: "collapse4",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },

        {
            id: "heading5",
            div_id: "collapse5",
            accTitle: " چطور میتونم در سایت ثبت نام کنم؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading6",
            div_id: "collapse6",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading7",
            div_id: "collapse7",
            accTitle: " داده ساختار یافته FAQ چیست؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading8",
            div_id: "collapse8",
            accTitle: "  چرا باید از FAQ rich snippet استفاده کنیم؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading9",
            div_id: "collapse9",
            accTitle: "   نمایش پرسش و پاسخ در نتایج گوگل چگونه است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading10",
            div_id: "collapse10",
            accTitle: "  صفحات دارای خطا",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading11",
            div_id: "collapse11",
            accTitle: "بررسی خطاهای سوالات متداول در گوگل سرچ کنسول",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading12",
            div_id: "collapse12",
            accTitle: "  پرسش و پاسخ با افزونه یوست",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading13",
            div_id: "collapse13",
            accTitle: "  آیا نبود درایو نوری دیسک خوان یک ضعف است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading14",
            div_id: "collapse14",
            accTitle: " قدرت سخت افزاری سرفیس در چه حد است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },

        {
            id: "heading15",
            div_id: "collapse15",
            accTitle: " برتری های سرفیس نسبت به لپ‌تاپ چیست؟ ",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        }],
);




    const [accProfileList, setAccProfileList] = useState([
        {
            id: "heading1",
            div_id: "collapse1",
            accTitle: " چطور میتونم در سایت ثبت نام کنم؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading2",
            div_id: "collapse2",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading3",
            div_id: "collapse3",
            accTitle: "  چطور میتونم حسابم رو ویرایش کنم؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading4",
            div_id: "collapse4",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },

        {
            id: "heading5",
            div_id: "collapse5",
            accTitle: " چطور میتونم در سایت ثبت نام کنم؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading6",
            div_id: "collapse6",
            accTitle: "  چطور میتونم از دورهای آموزشی استفاده کنم ؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },

    ]);

    const [accCoursesList, setAccCoursesList] = useState([
        {
            id: "heading7",
            div_id: "collapse7",
            accTitle: " داده ساختار یافته FAQ چیست؟",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading8",
            div_id: "collapse8",
            accTitle: "  چرا باید از FAQ rich snippet استفاده کنیم؟",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading9",
            div_id: "collapse9",
            accTitle: "   نمایش پرسش و پاسخ در نتایج گوگل چگونه است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading10",
            div_id: "collapse10",
            accTitle: "  صفحات دارای خطا",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
    ]);

    const [accConfigList, setAccConfigList] = useState([
        {
            id: "heading11",
            div_id: "collapse11",
            accTitle: "بررسی خطاهای سوالات متداول در گوگل سرچ کنسول",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },
        {
            id: "heading12",
            div_id: "collapse12",
            accTitle: "  پرسش و پاسخ با افزونه یوست",
            accBody: " برای استفاده از دوره های آموزشی ما وارد صفحه ی جزییات هر دوره میشوید و دوره را به سبد خرید\n" +
                "                            خود اضافه میکنید . بعد از ورود به صفحه ی خرید و پرداخت هزینه دور ها برای شما در پنل کاربری\n" +
                "                            شما فعال میشود و میتوانید به راحتی آموزش ها را دانلود و استفاده نمایید"
        },
        {
            id: "heading13",
            div_id: "collapse13",
            accTitle: "  آیا نبود درایو نوری دیسک خوان یک ضعف است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },
        {
            id: "heading14",
            div_id: "collapse14",
            accTitle: " قدرت سخت افزاری سرفیس در چه حد است؟",
            accBody: "برای ویرایش حساب کاربری خود کافیه وارد پنل کاربری خود شوید و میتوانید از قسمت ویرایش حساب\n" +
                "                            کاربری اطلاعات کاربری خود را ویرایش کنید و نکته ی مهم اینه که حتما اطلاعات خود را به صورت\n" +
                "                            درست درج کنید که در پشتیبانی دوره ها دچار مشکل نشوید"
        },

        {
            id: "heading15",
            div_id: "collapse15",
            accTitle: " برتری های سرفیس نسبت به لپ‌تاپ چیست؟ ",
            accBody: "برای ثبت نام در سایت کافیه در قسمت منو سایت روی منوی کاربری کلیک کنید و ثبت نام رو انتخاب\n" +
                "                            کنید . بعد در این صفحه اطلاعات لارم رو پر میکنید و روی ثبت نام کلیک میکنید . بعد از ثبت نام\n" +
                "                            برای تایید حساب کافیه به ایمیل خود مراجعه کنید و روی لینک ارسال شده به شما کلیک کنید . به\n" +
                "                            همین راحتی"
        },

    ]);
    console.log(setAccFullList)
    console.log(setAccProfileList)
    console.log(setAccCoursesList)
    console.log(setAccConfigList)


    //blog

    const [maghalatTitle, setMaghalatTitle] = useState("مقالات");
    const [placeHolderForMaghalat, setPlaceHolderForMaghalat] = useState("جستجو مقاله های مختلف ...");
    console.log(setMaghalatTitle)
    console.log(setPlaceHolderForMaghalat)

    const handlePageChange = page => {
        setCurrentPage(page);
    }


    //backend-api

    // main url of backend
    const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

    const [courseData, setCourseData] = useState([]);
    const [favCourseData, setFavCourseData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [allCoursesData, setAllCoursesData] = useState([]);
    const [allBlogData, setAllBlogData] = useState([]);
    // const [teachersData, setTeachersData] = useState([]);

    const getHomePageCourses = async () => {
        let result = await Axios.get(`${MainUrl}api/term/list?pagenumber=1&pagesize=8`)
        setCourseData(result.data.result.terms)
    }
    const getFavCourses = async () => {
        let result = await Axios.get(`${MainUrl}api/term/list?pagenumber=1&pagesize=4`)
        setFavCourseData(result.data.result.terms);
    }
    const get6BlogData = async () => {
        let result = await Axios.get(`${MainUrl}api/news/list?pagenumber=1&pagesize=6`)
        setBlogData(result.data.result.newsList)
    }
    const getAllCourses = async () => {
        let result = await Axios.get(`${MainUrl}api/term/getall`)
        setAllCoursesData(result.data.result)
    }
    const getAllBlogs = async () => {
        let result = await Axios.get(`${MainUrl}api/news`)
        setAllBlogData(result.data.result)
    }
    // const getAllTeachers = async () => {
    //     let result = await Axios.get(`${MainUrl}api/employee/getallteachers`)
    //     setTeachersData(result.data)
    // }
    useEffect(() => {
        getHomePageCourses();
        getFavCourses();
        get6BlogData();
        getAllCourses();
        getAllBlogs();
        // getAllTeachers();
    },[])


    const paginatedCourses = paginate(allCoursesData, currentPage, pageSize);
    const paginatedMaghalat = paginate(allBlogData, currentPage, 6);

    return (
        <>
            <main className="routing">
                <Switch>
                    <Route path="/" exact component={() => <HomePage menuList={menuList}
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
                    />}/>
                    <Route path="/courses" component={() => <CoursesPage menuList={menuList}
                                                                         placeHolder={placeHolder}
                                                                         fullCourseInfo={paginatedCourses}
                                                                         itemsCount4Paginate={Object.keys(allCoursesData).length}
                                                                         pageSize={pageSize}
                                                                         currentPage={currentPage}
                                                                         onPageChange={handlePageChange}
                                                                         footerInfo={footerInfo}

                    />}/>
                    <Route path={"/questions"} component={() => <FQA
                        menuList={menuList}
                        accFullList={accFullList}
                        accCoursesList={accCoursesList}
                        accProfileList={accProfileList}
                        accConfigList={accConfigList}
                        footerInfo={footerInfo}
                    />}/>
                    <Route path={"/about"} component={() => <About
                        menuList={menuList}
                        footerInfo={footerInfo}
                    />}/>

                    <Route path={"/teachers"} component={() => <Teachers
                        placeHolder={placeHolder}
                        menuList={menuList}
                        footerInfo={footerInfo}
                        itemsCount4Paginate={Object.keys(courseData).length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />}/>
                    <Route path={"/request"} component={() => <DarkhasteMoshavere
                        menuList={menuList}
                        footerInfo={footerInfo}
                    />}/>

                    <Route path={"/login"} component={() => <Login/>}/>
                    <Route path={"/register"} component={() => <Register/>}/>
                    <Route path={"/forgetPassword"} component={() => <ForgetPass/>}/>
                    <Route path={"/course"} component={() => <Course
                        menuList={menuList}
                        footerInfo={footerInfo}
                        loading={loadingCourseData}
                    />}/>
                    <Route path={"/not-found"} component={() => <NotFound/>}/>

                    <Route path="/blog" exact component={() => <Maghalat menuList={menuList}
                                                                         maghalatTitle={maghalatTitle}
                                                                         placeHolder={placeHolderForMaghalat}
                                                                         footerInfo={footerInfo}
                                                                         maghale={allBlogData}
                                                                         fullInfo={paginatedMaghalat}
                                                                         itemsCount4Paginate={allBlogData.length}
                                                                         pageSize={pageSize}
                                                                         currentPage={currentPage}
                                                                         onPageChange={handlePageChange}
                                                                         loading={loadingBlogData}

                    />}/>
                    <Route path={"/blog/maghale"} component={() => <Maghale menuList={menuList}
                                                                            footerInfo={footerInfo}
                                                                            maghale={allBlogData}/>}/>

                    <Route path={"/dashboard"} component={() => <PanelAdmin

                    />}/>

                    <Route path={"/cart"} component={() => <Cart

                    />}/>

                </Switch>
            </main>

        </>
    );

export default App;
