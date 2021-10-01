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
const Card = (props) => {

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = props.maghale.slice(pagesVisited, pagesVisited + usersPerPage)
        .map(blogObj => <div key={blogObj} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-5">
                <img src={props.maghale.imgAddress} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="document-number">{props.maghale.docNumber}</p>
                    <h5 className="doc-title">{props.maghale.title} </h5>
                    <p className="card-text">
                        <div className="mt-2">
                            <p className="document-details">{props.maghale.docDetails}
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

const pageCount = Math.ceil(props.maghale.length / usersPerPage);

 const changePage = ({selected}) => {
     setPageNumber(selected);
 }  ;



    return (
        <>
            <section className="documents">
                <div className="container">

                    <div className="document-body mt-4">
                        <div className="row">
                            {displayUsers}
                        </div>
                    </div>
                </div>

            </section>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}



            />

        </>

    )


}

export default Card;