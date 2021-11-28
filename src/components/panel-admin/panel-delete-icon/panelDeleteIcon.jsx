import React from 'react';
import delete_icon from "../../../assets/img/cancel.png"
import {BootstrapTooltip } from "../../tooltip/bootstrapTooltip"
import AddStuToTerm from "../../../core/services/API/student/addStudentToTerm";
import RemoveStuToTerm from "../../../core/services/API/student/removeStudentToTerm";

const PanelDeleteIcon = (props) => {

    const removeStudent = async () => {
        const termID = {
            termId : props.termId
        }

        const result = await RemoveStuToTerm(termID , props.userInfo.result._id);
        console.log("hello");
        console.log(props.termId);
        console.log(result);
        console.log(props.userInfo.result._id)
    }

    return (
        <>
            <BootstrapTooltip placeMent={"left"} title="حذف">
            <img width={16} style={{opacity:"90%" , position:"relative" , left:"-15px"}} src={delete_icon} alt="delete_icon" onClick={removeStudent}/>
            </BootstrapTooltip>
        </>
    );
};

export default PanelDeleteIcon;
