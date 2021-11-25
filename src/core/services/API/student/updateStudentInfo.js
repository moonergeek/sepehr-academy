import jwt_decode from "jwt-decode";
import http from "../../interceptor/interceptor";
import { getItem } from "../../storage/storage";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateStudentInfo = async (obj) => {
    if (getItem("token")) {
        const token = getItem("token");
        const decoded = jwt_decode(token);

        const result = await http.get(`${MainUrl}api/student/${decoded._id}` , obj);
        return result.data;
        console.log(result.data)
    }
};

export default UpdateStudentInfo;
