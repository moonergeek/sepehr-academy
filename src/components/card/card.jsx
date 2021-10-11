import React, {Component, useState} from "react";
import "./card.css"
import BlogLine from "../common/blogLine/blogLine";
import ReadBtn from "../common/readBtn/readBtn";
import Comment from "../common/comment/comment";
import Like from "../common/like/like";
import blogBanner1 from "../../assets/img/006.jpg";
import blogBanner2 from "../../assets/img/005.jpg";
import blogBanner3 from "../../assets/img/009.jpg";
import blogBanner4 from "../../assets/img/007.jpg";
import blogBanner5 from "../../assets/img/003.jpg";
import blogBanner6 from "../../assets/img/008.jpg";
import ReactPaginate from "react-paginate";
import Pagination from "../pagination/pagination";

const Card = (props) => {

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;


    const displayUsers = Object.keys(props.fullInfo).slice(pagesVisited, pagesVisited + usersPerPage)
        .map(blogObj => <div key={blogObj} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-5">
                <img src={props.fullInfo[blogObj].imgAddress} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="document-number">{props.fullInfo[blogObj].docNumber}</p>
                    <h5 className="doc-title">{props.fullInfo[blogObj].title} </h5>
                    <p className="card-text">
                        <div className="mt-2">
                            <p className="document-details">{props.fullInfo[blogObj].docDetails}
                            </p>
                            <div className="row">
                                <BlogLine/>
                            </div>
                            <div className="card-end">
                                <div className="row">
                                    <ReadBtn/>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="d-flex justify-content-end">
                                            <Comment/>
                                            <Like/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>)

    const pageCount = Math.ceil(props.fullInfo.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };


    return (
        // <>
        //     <section className="documents">
        //         <div className="container">
        //
        //             <div className="document-body mt-4">
        //                 <div className="row">
        //                     {displayUsers}
        //                 </div>
        //             </div>
        //         </div>
        //
        //     </section>
        //
        //     <div className="d-flex justify-content-center">
        //         <form className="d-flex mb-2">
        //             <ReactPaginate
        //                 previousLabel={"Previous"}
        //                 nextLabel={"Next"}
        //                 pageCount={pageCount}
        //                 onPageChange={changePage}
        //                 containerClassName={"paginationBttns"}
        //                 previousLinkClassName={"previousBttn"}
        //                 nextLinkClassName={"nextBttn"}
        //                 disabledClassName={"paginationDisabled"}
        //                 activeClassName={"paginationActive"}
        //
        //
        //
        //             />
        //
        //         </form>
        //     </div>
        //
        //     <Pagination itemsCount={props.itemsCount4Paginate}
        //                 pageSize={props.pageSize}
        //                 currentPage={props.currentPage}
        //                 onPageChange={props.onPageChange}
        //     />
        // </>
        <>
            <div className="course-body mt-4 container">
                <div className="row">

                    {Object.keys(props.fullInfo).map(blogObj => <div key={blogObj} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mb-5">
                        <img src={props.fullInfo[blogObj].imgAddress} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="document-number">{props.fullInfo[blogObj].docNumber}</p>
                            <h5 className="doc-title">{props.fullInfo[blogObj].title} </h5>
                            <p className="card-text">
                                <div className="mt-2">
                                    <p className="document-details">{props.fullInfo[blogObj].docDetails}
                                    </p>
                                    <div className="row">
                                        <BlogLine/>
                                    </div>
                                    <div className="card-end">
                                        <div className="row">
                                            <ReadBtn/>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="d-flex justify-content-end">
                                                    <Comment/>
                                                    <Like/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>)}

                </div>
            </div>
        </>
    )


}

export default Card;