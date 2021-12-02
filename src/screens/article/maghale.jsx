import React, {useEffect, useState} from 'react'
import DetailMaghale from "../../components/detailMaghale/detailMaghale";
import {useParams} from "react-router-dom";
import GetNewsById from "../../core/services/API/blog/getNewsById.api";
import {GetAllBlogsData} from "../../core/services/API/blog/getAllBlogs.api";

function Maghale() {
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
            <DetailMaghale newsById={newsByIdData} maghale={allBlogData} loading={loading}/>
        </div>
    )
}

export default Maghale
