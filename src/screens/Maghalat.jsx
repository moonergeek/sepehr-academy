import React, {Component, useState} from 'react';

import Header from "../components/header/header";
import Sort from "../components/sort/sort";
import Card from "../components/card/card";
import blogBanner1 from "../assets/img/006.jpg";
import blogBanner2 from "../assets/img/005.jpg";
import blogBanner3 from "../assets/img/009.jpg";
import blogBanner4 from "../assets/img/007.jpg";
import blogBanner5 from "../assets/img/003.jpg";
import blogBanner6 from "../assets/img/008.jpg";

const Maghalat = (props) =>{

const [maghale,setMaghale] = useState([
         {
                docNumber: "مقاله شماره 1",
                    title: "میشه یه شبه برنامه نویس شد؟ ",
                    imgAddress: blogBanner1,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
        {
                docNumber: "مقاله شماره 2",
                    title: " نگاهی به نمونه کارهای شما ",
                    imgAddress: blogBanner2,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
        {
                docNumber: "مقاله شماره 3",
                    title: "خودآموزی ، ورود به بازارکار ",
                    imgAddress: blogBanner3,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
        {
                docNumber: "مقاله شماره 4",
                    title: " نگاهی به نمونه کارهای شما ",
                    imgAddress: blogBanner4,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
         {
                docNumber: "مقاله شماره 5",
                    title: "میشه یه شبه برنامه نویس شد؟ ",
                    imgAddress: blogBanner5,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
         {
                docNumber: "مقاله شماره 6",
                    title: "حرفه ایی شدن رو از امروز شروع کن ",
                    imgAddress: blogBanner6,
                    docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
                "                                                    اگر به صورت فریلنسری\n" +
                "                                                    هم کار می‌کنید مشتری",
        },
    {
        docNumber: "مقاله شماره 7",
        title: "میشه یه شبه برنامه نویس شد؟ ",
        imgAddress: blogBanner1,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 8",
        title: " نگاهی به نمونه کارهای شما ",
        imgAddress: blogBanner2,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 9",
        title: "خودآموزی ، ورود به بازارکار ",
        imgAddress: blogBanner3,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 10",
        title: " نگاهی به نمونه کارهای شما ",
        imgAddress: blogBanner4,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 11",
        title: "میشه یه شبه برنامه نویس شد؟ ",
        imgAddress: blogBanner5,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 12",
        title: "حرفه ایی شدن رو از امروز شروع کن ",
        imgAddress: blogBanner6,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 13",
        title: "میشه یه شبه برنامه نویس شد؟ ",
        imgAddress: blogBanner1,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 14",
        title: " نگاهی به نمونه کارهای شما ",
        imgAddress: blogBanner2,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 15",
        title: "خودآموزی ، ورود به بازارکار ",
        imgAddress: blogBanner3,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 16",
        title: " نگاهی به نمونه کارهای شما ",
        imgAddress: blogBanner4,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 17",
        title: "میشه یه شبه برنامه نویس شد؟ ",
        imgAddress: blogBanner5,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    },
    {
        docNumber: "مقاله شماره 18",
        title: "حرفه ایی شدن رو از امروز شروع کن ",
        imgAddress: blogBanner6,
        docDetails: "هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی\n" +
            "                                                    اگر به صورت فریلنسری\n" +
            "                                                    هم کار می‌کنید مشتری",
    }
]);
        return (
            <div>
                <Header menuList={props.menuList}/>
                <Sort placeholder={props.placeholder}/>
                <Card maghale={maghale}/>
            </div>
        );

}



export default Maghalat;