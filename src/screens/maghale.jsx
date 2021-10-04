import React from 'react'
import Header from "../components/header/header";
import Detail from "../components/detail/detail";
import Footer from "../components/footer/footer";


function Maghale(props) {
  
    return (
        <div>
            <Header menuList={props.menuList}/>
            <Detail />
            <Footer footerInfo={props.footerInfo}/>
        </div>
    )
}

export default Maghale
