import http from "../interceptor/interceptor";
import { setItem } from "../storage/storage";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginUser = async (userLogin) => {
  try {
    const result = await http.post(`${MainUrl}api/auth/login`, userLogin);

    const token = result.data.result.jwtToken;
    setItem("token", token);

    toast.success("شما با موفقیت وارد شدید");

    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};

export default LoginUser;
