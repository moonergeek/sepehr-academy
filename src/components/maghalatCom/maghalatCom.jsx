import React from 'react';
import Header from "../header/header";
import Sort from "../sort/sort";
import Card from "../card/card";
import Footer from "../footer/footer";

function MaghalatCom(props) {




    return (
        <div>

            <Header menuList={props.menuList}/>
            <Sort placeholder={props.placeholder}/>
            <Card maghale={props.maghale}/>

        </div>
    );
}

export default MaghalatCom;