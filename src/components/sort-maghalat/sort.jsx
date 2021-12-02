import React from 'react';
import "./sort.css";
import SearchBox from "../searchBox/serachbox";
import DropDownBtnForMaghalat from "../dropDownBtnForMaghalat/dropDownBtnForMaghalat";
import SearchBoxForBlog from "../searchBox/searchBoxForBlog/searchBoxForBlog";


export default function Sort(props) {


    return (

        <div className={"container pt-3 mt-4"}>
            <div className={"back-div"}>
                <div className={"row"}>
                    <form className="d-flex pe-4 py-3 col-md-8 col-lg-9 col-sm-7 col-7">
                        <SearchBoxForBlog placeholder={props.placeHolder}/>
                    </form>
                    <div className={"col-lg-3 col-md-4 col-sm-5 col-5 pe-2"}>
                        <DropDownBtnForMaghalat/>
                    </div>
                </div>
            </div>
        </div>
    );
}
