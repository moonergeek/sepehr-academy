import React from 'react';
import add_icon from "../../../assets/img/add.png"
import {BootstrapTooltip } from "../../tooltip/bootstrapTooltip"
import AddStuToTerm from "../../../core/services/API/student/addStudentToTerm";

const PanelAddIcon = (props) => {

    const addStudent = async () => {
        const termID = {
            termId : props.termId
        }

        const result = await AddStuToTerm(termID , props.userInfo.result._id);
        console.log("hello");
        console.log(props.termId);
        console.log(result);
        console.log(props.userInfo.result._id)
    }


    return (
        <>
            <BootstrapTooltip placeMent={"left"} title="ثبت نام">
                <img width={16} style={{opacity:"90%" , position:"relative" , left:"-15px"}} src={add_icon} alt="add_icon" onClick={addStudent}/>
            </BootstrapTooltip>
        </>
    );
};

export default PanelAddIcon;
