import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCountLikeById = async (id,obj) => {
    try {
        const result = await Axios.get(`${MainUrl}api/term/likeCount/${id}`)
        return result.data;
    } catch {
        return {};
    }
};
export default GetCountLikeById;
