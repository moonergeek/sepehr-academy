import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Field from "../../components/moshavere-req/fields/field";
import Title from "../../components/moshavere-req/Title/Title";

function DarkhasteMoshavere(props) {
    return (
        <div>
            <Header menuList={props.menuList}/>
            <Title Title={"مشاوره"}/>
            <Field/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    );
}

export default DarkhasteMoshavere;