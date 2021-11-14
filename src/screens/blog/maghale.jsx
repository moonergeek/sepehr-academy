import React, {useEffect, useState} from 'react'
import Header from "../../components/header/header";
import DetailMaghale from "../../components/detailMaghale/detailMaghale";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import GetNewsById from "../../core/services/API/getNewsById.api";

function Maghale(props) {
    const { id } = useParams();

    const [newsByIdData, setNewsByIdData] = useState([]);
    const newsById = async () => {
        const result = await GetNewsById(id);
        setNewsByIdData(result);
    };
    useEffect(() => {
        newsById();
    }, []);

    return (
        <div>
            <Header menuList={props.menuList}/>
            <DetailMaghale newsById={newsByIdData} maghale={props.maghale}/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    )
}

export default Maghale
