import axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const PostStuReq = async (StuInfo) => {
    try {
        return  await axios.post(`${MainUrl}api/contactUs`, StuInfo);

    } catch (error) {
        console.log(error);
    }
};

export default PostStuReq;
