import './App.css';
import React, {Component} from 'react';
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import TechLogos from "../components/tech-logos/techLogos";


class App extends Component {
    state = {
        menuList: ["خانه", "دوره ها", "معرفی مدرسین", "بلاگ", "پرسش و پاسخ", "درخواست مشاوره", "درباره ما",],
        placeHolder: " جستوجو دوره های مختلف ...",
        bannerTitle: "آموزش برنامه نویسی ، خودآموزی ، ورود به بازارکار ",
        bannerDetail: "حرفه ایی شدن رو از امروز شروع کن "
    }

    render() {
        const {menuList, placeHolder, bannerDetail, bannerTitle} = this.state;
        return (
            <>
                <Header menuList={menuList}/>
                <Banner
                    placeholder={placeHolder}
                    title={bannerTitle}
                    details={bannerDetail}/>
                <TechLogos/>
            </>
        );
    }
}

export default App;
