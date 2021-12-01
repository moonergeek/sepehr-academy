import React, {useEffect, useState} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {menuItems} from "../../core/services/jsonFiles/menuItems.json";
import {footerInfoJson} from "../../core/services/jsonFiles/footerData.json";
import GetUserDetails from "../../core/services/API/auth/GetUserDetail.api";
import Routing from "../../routing/routing";

const LayoutApp = () => {
    const [userInfo, setUserInfo] = useState([]);

    const getUserInfo = async () => {
        const result = await GetUserDetails();
        setUserInfo(result);
    }
    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <>
            <Header menuList={menuItems} userInfo={userInfo}/>
            <Routing/>
            <Footer footerInfo={footerInfoJson}/>

        </>
    );
};

export default LayoutApp;
