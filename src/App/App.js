import './App.css';
import React, {Component} from 'react';
import HomePage from "../screens/homePage";
import image1 from "../assets/img/02.jpg"
import image2 from "../assets/img/09.jpg"
import image3 from "../assets/img/06.jpg"
import image4 from "../assets/img/03.jpg"
import image5 from "../assets/img/01.jpg"
import image6 from "../assets/img/04.jpg"


class App extends Component {
    state = {
        menuList: ["خانه", "دوره ها", "معرفی مدرسین", "بلاگ", "پرسش و پاسخ", "درخواست مشاوره", "درباره ما",],

        placeHolder: " جستوجو دوره های مختلف ...",
        bannerTitle: "آموزش برنامه نویسی ، خودآموزی ، ورود به بازارکار ",
        bannerDetail: "حرفه ایی شدن رو از امروز شروع کن ",

        coursesTitle: "اخرین دوره های مجموعه",
        coursesBtnTitle: "مشاهده همه دوره ها",
        coursesInfo : {
            obj1 : {
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                imgAddress:image1,
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj2 : {
                imgAddress:image4,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj3 : {
                imgAddress:image2,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj4 : {
                imgAddress:image3,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj5 : {
                imgAddress:image4,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj6 : {
                imgAddress:image3,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj7 : {
                imgAddress:image5,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },
            obj8 : {
                imgAddress:image6,
                title:"آموزش جامع زبان پایتون از صفر تا صد",
                teacher:"حسامی",
                time:"7:28:00",
                price:" 500،000 تومان",
            },


        }
    }

    render() {
        const {menuList, placeHolder, bannerDetail, bannerTitle, coursesTitle, coursesBtnTitle,coursesInfo} = this.state;
        return (
            <>
                <HomePage menuList={menuList}
                          placeholder={placeHolder}
                          bannerTitle={bannerTitle}
                          bannerDetail={bannerDetail}
                          coursesTitle={coursesTitle}
                          coursesBtnTitle={coursesBtnTitle}
                          courseInfo={coursesInfo}
                />
            </>
        );
    }
}

export default App;
