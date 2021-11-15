import React, {useEffect, useState} from 'react'
import Header from "../../components/header/header";
import DetailMaghale from "../../components/detailMaghale/detailMaghale";
import Footer from "../../components/footer/footer";


function Maghale(props) {


    return (
        <>
            <div>
                <Header menuList={props.menuList}/>

                <DetailMaghale maghale={props.maghale} loading={props.loading}/>

                <Footer footerInfo={props.footerInfo}/>
            </div>
        </>
    )
}

export default Maghale
