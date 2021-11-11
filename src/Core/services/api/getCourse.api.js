import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCourse = async () => {
    try {
        const result = await Axios.get(`${MainUrl}api/term/list?pagenumber=1&pagesize=8`)
        return result.data.result.terms;
    } catch {
        return {};
    }
};
export default GetCourse;