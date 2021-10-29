import React from 'react';
import search from "../../assets/img/search.png";
import "./serachbox.css"
import Input from "./input";

const SearchBox = (props) => {
    return (
        <>
            <Input placeHolder={props.placeHolder}/>
            <button className="btn button-search" type="submit">
                <img className="search-icon" src={search} alt="search"/>
            </button>
        </>
    );
};

export default SearchBox;
