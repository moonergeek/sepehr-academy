import { useState } from "react";
import { css } from "@emotion/react";
import './loading.css';
import FadeLoader from "react-spinners/FadeLoader";




function Loading() {
    // let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#198643");

    return (
        <div className="sweet-loading">


            <FadeLoader color={color}   size={150} />
        </div>
    );
}

export default Loading;