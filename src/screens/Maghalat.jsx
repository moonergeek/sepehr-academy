import React, {Component, useState} from 'react';
import Header from "../components/header/header";
import Sort from "../components/sort/sort";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";
import {paginate} from "../utils/paginate";
import Pagination from "../components/pagination/pagination";
import Title from "../components/Title/Title";

const Maghalat = (props) => {


    return (
        <div>


            <Header menuList={props.menuList}/>
            <Sort placeholder={props.placeholder}/>
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
            <Footer footerInfo={props.footerInfo}/>
        </div>
    );

}


export default Maghalat;