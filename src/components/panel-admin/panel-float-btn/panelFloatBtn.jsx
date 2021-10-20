import React from 'react';
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const PanelFloatBtn = () => {
    return (
        <>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <Fab size="small" color="secondary" aria-label="edit">
                    <NotificationsNoneTwoToneIcon/>
                </Fab>
                <Fab size="small" color="primary" aria-label="edit">
                    <HomeTwoToneIcon  />
                </Fab>
            </Box>
        </>
    );
};

export default PanelFloatBtn;
