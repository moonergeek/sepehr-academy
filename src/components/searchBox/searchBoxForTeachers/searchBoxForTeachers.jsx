import React, {useEffect, useState} from 'react';
import "../searchBoxForCourses/searchBoxForCourses.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

const SearchBoxForTeachers = (props) => {

    const [searchData, setSearchData] = useState([]);


const getTeachersData = () => {
    setSearchData(props.teacherInfo);
    console.log(props.teacherInfo)
}

    useEffect(() => getTeachersData(), []);


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = searchData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };








    return (

        <div className="search  me-2">
            <div className="searchInputs ">
                <input
                    className={"inputTag"}
                    type="text"
                    placeholder={props.placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon ">
                    {filteredData.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className={"controllerForCourses"}>
                    <div className="dataResultForCourses">
                        {filteredData.slice(0, 15).map((value, key) => {

                            return (
                                <div key={value.title} className={"holderForCourses"}>
                                    <Link to={"/teachers"}>
                                        <img className={"itemsImgForCourses"} src={value.img} alt={""}/>
                                        <span className="dataItemForCourses" >
                                            <p>{value.title} </p>
                                        </span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBoxForTeachers;
