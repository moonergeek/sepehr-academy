import React, {useEffect, useState} from 'react';
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import {getItem} from "../../../core/services/storage/storage";
import GetTermById from "../../../core/services/API/terms/getTermById";

const PanelLikedTerms = (props) => {

    const [likedTerm, setLikedTerm] = useState([]);
    const [term, setTerm] = useState([]);


    const getLikedTerms = () => {
        const res = getItem(props.userInfo.result._id + "id");
        setLikedTerm(res);

        const result = GetTermById(likedTerm);
        console.log(result);
        setTerm(result);

    }


    useEffect(() => {
        getLikedTerms();

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

            <table className="table panel-table table-borderless">
                <thead className={"thead-color"}>
                <tr className={"tr-color"}>
                    <th scope="col "><FcNumericalSorting12/></th>

                    <th scope="col ">نام دوره</th>
                    <th scope="col ">مدرس</th>

                    <th scope="col "> وضعیت</th>

                    <th scope="col "> تنظیمات</th>
                </tr>
                </thead>
                <tbody>



                </tbody>
            </table>

        </>
    );
};

export default PanelLikedTerms;
