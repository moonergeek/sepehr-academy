import http from "../interceptor/interceptor";
import { setItem } from "../storage/storage";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginUser = async (userLogin) => {
  try {
    const result = await http.post(`${MainUrl}api/auth/login`, userLogin);

    const token = result.data.result.jwtToken;
    setItem("token", token);

    const decode = jwt_decode(token);
    setItem("role", decode.role);

    toast.success("شما با موفقیت وارد شدید");

    setTimeout(() => {
      <Redirect to="/" />;
    }, 3000);

    return result.data.result;
  } catch (error) {
    console.log(error.response.data.message[0].message);
    toast.error(error.response.data.message[0].message);
  }
};

export default LoginUser;
