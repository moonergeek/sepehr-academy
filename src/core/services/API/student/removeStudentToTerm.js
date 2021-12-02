import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const RemoveStuToTerm = async (obj , student_id) => {
    try {
        return  await axios.post(`${MainUrl}api/term/removeStudentFromTerm/${student_id}`, obj);

    } catch (error) {
        console.log(error);
    }
};

export default RemoveStuToTerm;
