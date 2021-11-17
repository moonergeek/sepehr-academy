import React from "react";
import "../../Course.css"
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';

const SeeSavedFavs = () => {
    return (
        <>
            <div className="seeSavedFavs-background mt-3 rounded-3 p-3 d-flex justify-content-center">
                <span className="seeSavedFavs-link">
                    <BookmarkTwoToneIcon/>
                </span>
                مشاهده ی کل لیست
                <span className="seeSavedFavs-link">
                    علاقه مندی ها
                </span>

            </div>
        </>
    );
};

export default SeeSavedFavs;
