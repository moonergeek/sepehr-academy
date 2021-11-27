import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Title from "../../components/moshavere-req/Title/Title";
import PostStuReqForm from "../../components/moshavere-req/postStuReqForm/postStuReqForm";

function DarkhasteMoshavere(props) {
    return (
        <div>
            <Header menuList={props.menuList}/>
            <Title Title={"مشاوره"}/>
            <PostStuReqForm/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    );
}

export default DarkhasteMoshavere;