import React, {useEffect, useState} from 'react'
import Header from "../../components/header/header";
import DetailMaghale from "../../components/detailMaghale/detailMaghale";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import GetNewsById from "../../core/services/API/blog/getNewsById.api";
import {GetAllBlogsData} from "../../core/services/API/blog/getAllBlogs.api";

function Maghale(props) {
    const {id} = useParams();

    const [newsByIdData, setNewsByIdData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [allBlogData, setAllBlogData] = useState([]);

    const newsById = async () => {
        const result = await GetNewsById(id);
        setNewsByIdData(result);
        setLoading(true);
    };
    const getAllBlogs = async () => {
        const result = await GetAllBlogsData();
        setAllBlogData(result);
    };

    useEffect(() => {
        newsById();
        getAllBlogs();
    }, []);

    return (
        <div>
            <Header menuList={props.menuList} userInfo={props.userInfo}/>
            <DetailMaghale newsById={newsByIdData} maghale={allBlogData} loading={loading}/>
            <Footer footerInfo={props.footerInfo}/>
        </div>
    )
}

export default Maghale
