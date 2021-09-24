import React from 'react';
import search from "../../assets/img/search.png";
import "./serachbox.css"

const SearchBox = (props) => {
    return (
        <>
            <input className="form-control me-2" type="search"
                   placeholder={props.placeHolder}
                   aria-label="Search"/>
            <button className="btn button-search" type="submit">
                <img className="search-icon" src={search} alt="search"/>
            </button>
        </>
    );
};

export default SearchBox;
