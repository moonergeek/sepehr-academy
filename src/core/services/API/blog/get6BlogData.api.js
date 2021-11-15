import Axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const GetAll6BlogData = async() => {

    try {
        const result = await Axios.get(`${MainUrl}api/news/list?pagenumber=1&pagesize=6`)
        return result.data.result.newsList;
    } catch {
        return {};
    }
};

export default GetAll6BlogData;


