import React, {useCallback, useContext, useEffect, useState} from "react";
import "../../Course.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostLikeData from "../../../../core/services/API/like/postLike.api";
import {toast, ToastContainer} from "react-toastify";
import GetCourseById from "../../../../core/services/API/course/getCourseById.api";
import GetUserDetails from "../../../../core/services/API/auth/GetUserDetail.api";
import {useParams} from "react-router-dom";
import GetCountLikeById from "../../../../core/services/API/like/getCountLike";
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import PostDisLikeData from "../../../../core/services/API/like/postDisLike";
import {setItem} from "../../../../core/services/storage/storage";
import {useStateIfMounted} from "use-state-if-mounted";


const FavComponent = () => {

    const {id} = useParams();
    const [courseByIdData, setCourseByIdData] = useStateIfMounted([]);
    const getCourseById = async () => {
        const result = await GetCourseById(id);
        setCourseByIdData(result);
    };
    const [likeSituation, setLikeSituation] = useStateIfMounted(false);
    const [userInfo, setUserInfo] = useStateIfMounted([]);

    const getUserInfo = async () => {
        const result = await GetUserDetails();
        // console.log(result);
        setUserInfo(result);
    }

    const likeButton = async () => {
        if (userInfo && userInfo.result.role === "student") {
            const termId = courseByIdData._id;
            const userId = userInfo.result._id;
            const apiObject = {
                termId: termId,
                userId: userId,
            };
            console.log(apiObject);
            setItem("termId" , termId);

            const result = await PostLikeData(apiObject);
            setLikeSituation(true);
            if (!result.success) {
                toast.error(result.message[0].message);
            } else {
                toast.success(result.message[0].message);
            }
        } else {
            toast.error("لطفا به حساب کاربری خود وارد شوید.");
        }
        GetCountLikeById(courseByIdData._id)
    };

    const disLikeButton = async () => {
        if (userInfo && userInfo.result.role === "student") {
            const termId = courseByIdData._id;
            const userId = userInfo.result._id;
            const apiObject = {
                termId: termId,
                userId: userId,
            };
            const result = await PostDisLikeData(apiObject);
            setLikeSituation(false);
            if (!result.success) {
                toast.error(result.message[0].message);
            } else {
                toast.success(result.message[0].message);
            }
        } else {
            toast.error("لطفا به حساب کاربری خود وارد شوید.");
        }

    };


    // const [termLikesById, setTermLikesById] = useStateIfMounted([]);
    const getTermLikesById = async () => {

        const result = await GetCountLikeById(courseByIdData._id);
        // setTermLikesById(result.result);
    };

    useEffect(() => {
        getUserInfo();
        getCourseById();
        getTermLikesById();


    }, []);


    return (
        <>
            <ToastContainer
                position="top-center"
                limit={1}
                autoClose={2000}
                rtl={true}
            />
            <div className="fav-background mt-5 rounded-3 p-3 d-flex justify-content-center">

                <span className="fav-link">{"termLikesById.like"}</span>
                <span className="fav-link">

                    {likeSituation ? <FavoriteIcon/> : <FavoriteTwoToneIcon onClick={likeButton}/>}

                </span>
                |
                <div className={"dislike"}>

                    <span className="dislike-count">{"termLikesById.dislike"}</span>

                    <span className={"dislike-icon"}>
                    <ThumbDownAltTwoToneIcon onClick={disLikeButton}/>

                </span>
                </div>

            </div>

            {/*{console.log(getTermLikesById())}*/}
        </>
    );
};

export default FavComponent;
