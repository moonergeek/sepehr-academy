import './App.css';
import React, {Component} from 'react';
import HomePage from "../screens/homePage";


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
             <HomePage menuList={menuList}
                       placeholder={placeHolder}
                       bannerTitle={bannerTitle}
                       bannerDetail={bannerDetail}
             />
            </>
        );
    }
}

export default App;
