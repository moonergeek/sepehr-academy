import http from "../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SendComment = async (userComment) => {
  try {
    const result = await http.post(`${MainUrl}api/comment/send`, userComment);
    toast.success("نظر شما با موفقیت ثبت شد");
    return result.data.result;
  } catch (error) {
    toast.error(error.response.data.message.message[0].message);
  }
};
export default SendComment;
