import React, {useEffect, useState} from 'react';
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import {getItem} from "../../../core/services/storage/storage";
import GetTermById from "../../../core/services/API/terms/getTermById";
import PanelTableForLikedTerms from "../panelTable/panelTableForLikedTerms";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";

const PanelLikedTerms = (props) => {

    const [likedTerm, setLikedTerm] = useState([]);
    const [term, setTerm] = useState([]);
    const [userInformation, setUserInformation] = useState([]);


    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
            console.log(userInformation.terms);


        } catch (err) {
            console.log("header api error :" + err)
        }
    }

    const getLikedTerms = () => {
        const res = getItem(userInformation._id + "id");
        setLikedTerm(res);

    }

    const getTerm = () => {
        const result = GetTermById(likedTerm);
        console.log(result);
        setTerm(result);
    }


    useEffect(() => {
        getUserInformation();
        getLikedTerms();
        getTerm();
    }, [])


    return (
        <>
            <div className={"row"}>
                {console.log(term)}
                <PanelTitle title={props.title}/>
                <div className={"d-flex floating-btn-mr justify-content-end"}>
                    <PanelFloatBtn/>
                </div>
            </div>

            <PanelTableForLikedTerms userInfo={props.userInfo}/>

        </>
    );
};

export default PanelLikedTerms;
