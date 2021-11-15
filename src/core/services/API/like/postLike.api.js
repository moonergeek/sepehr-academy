import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const PostLikeData = async (obj) => {

    try {
        const result = await Axios.post(`${MainUrl}/api/term/like`, obj)
        return result.data;

        // result.data.message ro bayd bad az like kardan tuye taoastify neshun bedi

    } catch (error) {
        console.log(error)
        return {};
    }
};

export default PostLikeData;


