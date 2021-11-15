import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import cm from "../../assets/img/cm.png";
import "../common/comment/comment.css"
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';

import axios from "axios";

const CommentShow = () => {
    const params = useParams().id;
    const [state, setState] = useState([]);
    const GetAllComments = async () => {
        const result = await axios.get(
            "https://academy-reaction.herokuapp.com/api/comment/"
        );

        setState(result.data.filter((cam) => cam.postId === params));
    };
    useEffect(() => {
        GetAllComments();
    }, [state]);

    return (
        <>
            <div className={"comment-background mt-5"}>
                <h5 className={"pt-4 me-2 comments-title "}><ModeCommentTwoToneIcon className={"ms-2"}/>
                    نظرات کاربران :
                </h5>
                {state.map((comm) => (
                    <div>
                        <div className="container mt-5 d-flex comment-border">
                            <div>
                                <img width="40%" className="responsive-img" src={cm}/>
                            </div>
                            <div style={{marginRight: "-75px", marginTop: "4px"}}>
                                <h5 className="fw-bold text-color">{comm.username}</h5>
                                <p>{comm.comment}</p>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-end response-to-comment"}>
                            پاسخ به کامنت
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default CommentShow;
