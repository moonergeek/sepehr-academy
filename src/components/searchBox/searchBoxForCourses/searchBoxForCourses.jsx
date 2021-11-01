import React, {useEffect, useState} from 'react';
import "./searchBoxForCourses.css";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBoxForCourses = (props) => {

    const [searchData, setSearchData] = useState([]);


    const getCourses = () => {
        axios.get('https://academy-visual.herokuapp.com/api/course')
            .then((response) => {
                console.log(response.data.result);
                const myBlog = response.data.result;
                setSearchData(myBlog);
            });
    }

    useEffect(() => getCourses(), []);


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = searchData.filter((value) => {
            return value.courseName.toLowerCase().includes(searchWord.toLowerCase());
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
                    {filteredData.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={""} target="_blank">
                                <p>{value.courseName} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchBoxForCourses;
