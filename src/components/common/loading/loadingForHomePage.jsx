import { useState } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import './loadingForHomePage.css';




function Loading() {

    let [color, setColor] = useState("#198643");

    return (
        <div className="sweet-loading">


            <FadeLoader  color={color}/>
        </div>
    );
}

export default Loading;