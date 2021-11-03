import React from 'react';
import delete_icon from "../../../assets/img/cancel.png";
import {BootstrapTooltip } from "../../tooltip/bootstrapTooltip";

const PanelDeleteIcon = () => {
    return (
        <>
            <BootstrapTooltip placeMent={"left"} title="حذف">
            <img width={16} style={{opacity:"90%" , position:"relative" , left:"-15px"}} src={delete_icon} alt="delete_icon"/>
            </BootstrapTooltip>
        </>
    );
};

export default PanelDeleteIcon;
