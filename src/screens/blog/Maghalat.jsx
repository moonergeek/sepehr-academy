import React, {useState} from 'react';
import Header from "../../components/header/header";
import Sort from "../../components/sort-maghalat/sort";
import Card from "../../components/card-maghalat/card";
import Footer from "../../components/footer/footer";
import Pagination from "../../components/common/pagination/pagination"
import Title from "../../components/moshavere-req/Title/Title";
import Loading from "../../components/common/loading/loading";


const Maghalat = (props) => {

    return (
        <>
            <div>
                <Header menuList={props.menuList} userInfo={props.userInfo}/>
                <Title Title={"مقالات"}/>
                <Sort placeHolder={props.placeHolder}/>
                {props.loading ? <>
                    <Card maghale={props.maghale} fullInfo={props.fullInfo}/>
                    <div className="d-flex justify-content-center">
                        <form className="d-flex mb-2">
                            <Pagination itemsCount={props.itemsCount4Paginate}
                                        pageSize={props.pageSize}
                                        currentPage={props.currentPage}
                                        onPageChange={props.onPageChange}
                            />
                        </form>
                    </div>
                </> : <Loading />}
                <Footer footerInfo={props.footerInfo}/>
            </div>

        </>
    );

}


export default Maghalat;
