import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {menuItems} from "../../core/services/jsonFiles/menuItems.json";
import {footerInfoJson} from "../../core/services/jsonFiles/footerData.json";
import Routing from "../../routing/routing";

const LayoutApp = () => {


    return (
        <>
            <Header menuList={menuItems}/>
            <Routing/>
            <Footer footerInfo={footerInfoJson}/>
        </>
    );
};

export default LayoutApp;
