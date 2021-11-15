import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cm from "../../assets/img/cm.png";
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
      {state.map((comm) => (
        <div className="container mt-5 d-flex">
          <div>
            <img width="40%" className="responsive-img" src={cm} />
          </div>
          <div style={{ marginRight: "-75px", marginTop: "4px" }}>
            <h5 className="fw-bold text-color">{comm.username}</h5>
            <p>{comm.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentShow;
