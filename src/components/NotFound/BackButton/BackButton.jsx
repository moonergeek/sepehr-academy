import React from "react";
import "./BackButton.css";
import {useHistory} from 'react-router-dom'

const BackButton = () => {
    const history = useHistory()
    const GotoHomePage = () => {
        history.push('/')
    }
    return (
        <button onClick={GotoHomePage} className="back-button btn mr-right text-white mt-3">بازگشت به صفحه قبلی</button>
    );
};


export default BackButton;
