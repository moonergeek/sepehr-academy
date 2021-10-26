import React, {useState, useEffect} from 'react';
import Axios from "axios";


const TestApiCourses = () => {
    const [data, setData] = useState([]);

    const getAllUsers = async () => {
        let result = await Axios.get('https://academy-visual.herokuapp.com/api/course')
        setData(result.data.result)
    }
    useEffect(() => {
        getAllUsers()
    },[1])


    return (
        <>
            {Object.keys(data).map(x => (
                <>
                    <p>{data[x]._id}</p>
                </>
            ))}
        </>
    );
};

export default TestApiCourses;
