import React, {useEffect, useState} from 'react';
import "./serachbox.css"
<<<<<<< HEAD
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
=======
import Input from "./input";
>>>>>>> dc43e27e837d798af68fdc04a2c2045ec7756012

const SearchBox = (props) => {

    const [searchData, setSearchData] = useState([]);
    const [searchBlog,setSearchBlog] = useState([]);

    const getCourses = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/course')
            .then((response) => {
                // console.log(response.data.result);
                const myCourses = response.data.result;
                setSearchData(myCourses);
            });
    }
    const getBlog = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/news')
            .then((res) => {
                const myBlog = res.data.result;
                setSearchBlog(myBlog);
            });

    }


    useEffect(() => getCourses(), []);
    useEffect(() => getBlog(), []);


    const [filteredDataForBlog, setFilteredDataForBlog] = useState([]);
    const [filteredDataForCourses, setFilteredDataForCourses] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;


        setWordEntered(searchWord);
        const Filter1 = searchData.filter((value) => {
            return value.courseName.toLowerCase().includes(searchWord.toLowerCase())

        });

        const filter2 = searchBlog.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        });

        // const newFilter = [...Filter1,...filter2];

        if (searchWord === "") {
            setFilteredDataForBlog([]);
            setFilteredDataForCourses([]);

        } else {
            setFilteredDataForBlog(filter2);
            setFilteredDataForCourses(Filter1);
        }
    };

    const clearInput = () => {
        setFilteredDataForBlog([]);
        setFilteredDataForCourses([]);
        setWordEntered("");
    };


    return (
<<<<<<< HEAD

        <div className="search  me-2">
            {/*{console.log(searchData)}*/}
            <div className="searchInputs ">
                <input
                    className={"inputTag"}
                    type="text"
                    placeholder={props.placeHolder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon ">
                    {filteredDataForBlog.length === 0 && filteredDataForCourses.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            {filteredDataForBlog.length != 0 || filteredDataForCourses.length != 0 ? (
                <div className="dataResult">
                    {filteredDataForBlog.slice(0, 5).map((value, key) => {
                        return (
                            <>
                                <Link to={"/blog/maghale/" + value._id}>
                            <a className="dataItem"  target="_blank">
                                <p>{value.title} </p>
                            </a>
                                </Link>

                                {filteredDataForCourses.map((value, ) => {
                                    return(
                                        <Link to={"/course"}>
                                        <a  className="dataItem" target="_blank">
                                            <p>{value.courseName}</p>
                                        </a>
                                        </Link>
                                    )
                                })}

                            </>
                        );
                    })}
                </div>
            ) : <></>}
        </div>
=======
        <>
            <Input placeHolder={props.placeHolder}/>
            <button className="btn button-search" type="submit">
                <img className="search-icon" src={search} alt="search"/>
            </button>
        </>
>>>>>>> dc43e27e837d798af68fdc04a2c2045ec7756012
    );
};

export default SearchBox;
