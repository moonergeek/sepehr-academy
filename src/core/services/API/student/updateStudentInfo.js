import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateStuInfo = async (studentUpdateData , id) => {
    try {
        return  await axios.put(`${MainUrl}api/student/${id}`, studentUpdateData);

    } catch (error) {
        console.log(error);
    }
};

export default UpdateStuInfo;
