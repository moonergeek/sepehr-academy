import Axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const GetAllCoursesData = async() => {

    try {
        const result = await Axios.get(`${MainUrl}api/term/getall`)
        return result.data.result;
    } catch {
        return {};
    }
};

export default GetAllCoursesData;


