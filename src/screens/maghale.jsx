import React from 'react'
import Header from "../components/header/header";
import DetailMaghale from "../components/detailMaghale/detailMaghale";
import Footer from "../components/footer/footer";
import {withRouter} from 'react-router-dom'

function Maghale(props) {

    return (
        <div>
            <Header menuList={props.menuList}/>
            <DetailMaghale maghale={props.maghale}/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    )
}

export default withRouter(Maghale)
