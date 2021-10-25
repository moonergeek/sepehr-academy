import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";
import React from "react";

export const BootstrapTooltip = styled(({className, ...props}) => (
    <Tooltip placement={props.placeMent} {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));