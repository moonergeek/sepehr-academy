import React, {useEffect, useState} from 'react';
import "./serachbox.css"
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBox = (props) => {

    const [blog, setBlog] = useState([]);

    const getBlog = () => {
        axios.get('https://academy-visual.herokuapp.com/api/news')
            .then((response) => {
                console.log(response.data.result);
                const myBlog = response.data.result;
                setBlog(myBlog);
            });
    }
    useEffect(() => getBlog(), []);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = blog.filter((value) => {
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
        // <div className={"all"}>
        //     <input className="form-control me-2" type="search"
        //            placeholder={props.placeHolder}
        //            aria-label="Search" value={wordEntered}
        //            onChange={handleFilter}/>
        //     <div className="searchIcon">
        //         {filteredData.length === 0 ? (
        //             <SearchIcon />
        //         ) : (
        //             <CloseIcon id="clearBtn" onClick={clearInput} />
        //         )}
        //     </div>
        //     {filteredData.length != 0 && (
        //         <div className="dataResult">
        //             {filteredData.slice(0, 5).map((value, key) => {
        //                 return (
        //                     <a className="dataItem" href={value.link} target="_blank">
        //                         <p>{value.title} </p>
        //                     </a>
        //                 );
        //             })}
        //         </div>
        //     )}
        // </div>
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={props.placeHolder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchBox;
