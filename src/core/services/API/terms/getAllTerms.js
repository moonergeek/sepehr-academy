import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetAllTerms = async () => {
    try {
        const result = await Axios.get(`${MainUrl}api/term/getall`)
        return result.data.result;

    } catch(err) {
        console.log(err);
    }
};
export default GetAllTerms;
