import React from "react";
import "../../Course.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavComponent = () => {
    return (
        <>
            <div className="fav-background mt-5 rounded-3 p-3 d-flex justify-content-center">
                <span className="fav-link">
                    <FavoriteTwoToneIcon/>
                </span>
                اضافه کردن این دوره به علاقه مندی ها
            </div>

            {/*//
             ruye onclicke <FavoriteTwoToneIcon/> toggle kon ru ba in component <FavoriteIcon/>
             bala vasat imporetsh kardam ... harvaght like shod un neshun dade she dar
             gheyre in surat hamini ke alan hast ...
             baad az inke like shod , ye toastify ham befrest ke in dore be alaqe mandi ha ezafe shod
             baadesham idi doreyi ke like shode ro yeja tu ye arrayei jayi save kon baadan
             betunim namayesh bedim...
             in kararo residi begu behem bakhsh alaqe mandiharo besazam ...
             karetam tamum shod in comment ro pak kon :))
             */}
        </>
    );
};

export default FavComponent;
