import Axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const GetAllBlogsData = async() => {

    try {
        const result = await Axios.get(`${MainUrl}api/news`)
        return result.data.result;
    } catch {
        return {};
    }
};

export default GetAllBlogsData;


