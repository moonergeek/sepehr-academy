import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import Sort from "../../components/sort-maghalat/sort";
import Card from "../../components/card-maghalat/card";
import Footer from "../../components/footer/footer";
import Pagination from "../../components/common/pagination/pagination"
import Title from "../../components/moshavere-req/Title/Title";
import Loading from "../../components/common/loading/loading";
import {GetAllBlogsData} from "../../core/services/API/blog/getAllBlogs.api";
import {paginate} from "../../core/utils/paginate";


const Maghalat = (props) => {

    const [allBlogData, setAllBlogData] = useState([]);
    const [loadingForBlog, setLoadingForBlog] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(12);

    const getAllBlogs = async () => {
        const result = await GetAllBlogsData();
        setAllBlogData(result);
        setLoadingForBlog(true);


    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    const paginatedMaghalat = paginate(allBlogData, currentPage, 6);

    return (
        <>
            <div>
                <Header menuList={props.menuList} userInfo={props.userInfo}/>
                <Title Title={"مقالات"}/>
                <Sort placeHolder={props.placeHolder}/>
                {loadingForBlog ? <>
                    <Card maghale={allBlogData} fullInfo={paginatedMaghalat}/>
                    <div className="d-flex justify-content-center">
                        <form className="d-flex mb-2">
                            <Pagination itemsCount={allBlogData.length}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
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
