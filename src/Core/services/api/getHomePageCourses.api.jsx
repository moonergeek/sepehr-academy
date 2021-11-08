import Axios from "axios";
import {useEffect, useState} from "react";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const GetAllCoursesData = () => {
    const [courseData, setCourseData] = useState([]);
     const getHomePageCourses = async () => {
        let result = await Axios.get(`${MainUrl}api/term/list?pagenumber=1&pagesize=8`)
        setCourseData(result.data.result.terms)
    }
    useEffect(() => {
        getHomePageCourses();
    },[])

    return (
        <>
            {courseData}
        </>
    );
};

export default GetAllCoursesData;


