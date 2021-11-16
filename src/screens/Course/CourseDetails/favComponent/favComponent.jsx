import React, {useContext, useEffect, useState} from "react";
import "../../Course.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostLikeData from "../../../../core/services/API/like/postLike.api";
import {toast} from "react-toastify";
import GetCourseById from "../../../../core/services/API/course/getCourseById.api";
import GetUserDetails from "../../../../core/services/API/auth/GetUserDetail.api";
import {useParams} from "react-router-dom";
import GetCountLikeById from "../../../../core/services/API/like/getCountLike";
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import PostDisLikeData from "../../../../core/services/API/like/postDisLike";


const FavComponent = () => {
    const {id} = useParams();

    const [courseByIdData, setCourseByIdData] = useState([]);
    const getCourseById = async () => {
        const result = await GetCourseById(id);
        setCourseByIdData(result);
    };
    const [likeSituation, setLikeSituation] = useState([]);
    const [userInfo, setUserInfo] = useState([]);


    const getUserInfo = async () => {
        const result = await GetUserDetails();
        console.log(result);
        setUserInfo(result);
    }

    const likeButton = async () => {
        console.log(userInfo);
        if (userInfo && userInfo.result.role === "student") {
            const termId = courseByIdData._id;
            const userId = userInfo.result._id;
            const apiObject = {
                termId: termId,
                userId: userId,
            };
            console.log(apiObject);
            const result = await PostLikeData(apiObject);
            console.log(result);
            setLikeSituation(result);
            if (!result.success) {
                toast.error(result.message[0].message);
            } else {
                toast.success(result.message[0].message);
            }
        } else {
            toast.error("لطفا به حساب کاربری خود وارد شوید.");
        }

    };

    const disLikeikeButton = async () => {
        console.log(userInfo);
        if (userInfo && userInfo.result.role === "student") {
            const termId = courseByIdData._id;
            const userId = userInfo.result._id;
            const apiObject = {
                termId: termId,
                userId: userId,
            };
            console.log(apiObject);
            const result = await PostDisLikeData(apiObject);
            console.log(result);
            setLikeSituation(result);
            if (!result.success) {
                toast.error(result.message[0].message);
            } else {
                toast.success(result.message[0].message);
            }
        } else {
            toast.error("لطفا به حساب کاربری خود وارد شوید.");
        }

    };


    const [termLikesById, setTermLikesById] = useState([]);
    const getTermLikesById = async () => {

        const result = await GetCountLikeById(courseByIdData._id);
        setTermLikesById(result.result);
        console.log(result.result)
    };

    useEffect(() => {
        getUserInfo();
        getCourseById();
        getTermLikesById();

    }, []);





    return (
        <>

            <div className="fav-background mt-5 rounded-3 p-3 d-flex justify-content-center">
                <span className="fav-link">{termLikesById.like}</span>
                <span className="fav-link">
                    {likeSituation.success ? <FavoriteIcon/> : <FavoriteTwoToneIcon onClick={likeButton}/>}
                </span>
                |
                <div className={"dislike"}>
                    <span className="dislike-count">{termLikesById.dislike}</span>
                    <span className={"dislike-icon"}>
                    <ThumbDownAltTwoToneIcon onClick={disLikeikeButton}/>
                </span>
                </div>

            </div>


        </>
    );
};

export default FavComponent;
