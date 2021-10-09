import React from 'react';
import Header from "../header/header";
import Sort from "../sort/sort";
import Card from "../card/card";
import Footer from "../footer/footer";

function MaghalatCom(props) {

    function showMaghale(id) {

    }


    return (
        <div>

            <Header menuList={props.menuList}/>
            <Sort placeholder={props.placeholder}/>
            <Card onclick={showMaghale(props.id)} maghale={props.maghale}/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    );
}

export default MaghalatCom;