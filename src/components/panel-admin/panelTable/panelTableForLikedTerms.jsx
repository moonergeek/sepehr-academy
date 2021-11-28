import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import {getItem} from "../../../core/services/storage/storage";
import GetTermById from "../../../core/services/API/terms/getTermById";

const PanelTableForLikedTerms = (props) => {

    const [likedTerms , setLikedTerms] = useState([]);
    const userId = props.userInfo.result._id;
    const [term , setTerm] = useState([]);

    const getLikedTerms = () => {
        setLikedTerms(getItem(userId + "id")) ;

    }

    const getTerms = () => {
        Object.keys(likedTerms).map(termId => {

                setTerm(GetTermById(likedTerms[termId]));
            console.log(GetTermById(likedTerms[termId]))
        }
        )
    }


    useEffect(() => {
        getLikedTerms();
        getTerms();
    } , [])


    return (
        <>


            {/*<img className={"table-course-img"} src={props.userInfo.result.terms[0].course.image} alt="course1"/>*/}
            <table className="table panel-table table-borderless">
                <thead className={"thead-color"}>
                <tr className={"tr-color"}>
                    <th scope="col "><FcNumericalSorting12/></th>
                    <th scope="col ">شماره سفارش</th>
                    <th scope="col ">نام دوره</th>
                    <th scope="col ">مدرس</th>
                    <th scope="col ">تاریخ خرید</th>
                    <th scope="col "> وضعیت</th>
                    <th scope="col "> مجموع سفارش</th>
                    <th scope="col "> تنظیمات</th>
                </tr>
                </thead>
                <tbody>

                {Object.keys(term).map(termObj => <tr key={termObj} className={"green-hover"}>
                    <th scope="row" className={"panel-th-items"}>{termObj}</th>
                    <td className={"panel-td-items"}>4554-01</td>
                    <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={term[termObj].course.image} alt=""/>
                        {term[termObj].course.courseName}
                    </td>
                    <td className={"panel-td-items"}> {term[termObj].course.description}</td>
                    <td className={"panel-td-items"}> 1400/01/20</td>
                    <td className={"panel-td-items"}>
                        <span className="badge bg-success">خرید موفق</span>
                    </td>
                    <td className={"panel-td-items"}>{term[termObj].cost + " تومان"} </td>
                    <td className={"panel-td-items"}>
                        <PanelDeleteIcon userInfo={props.userInfo} termId={term[termObj]._id}/>
                    </td>
                </tr>)}


                </tbody>
            </table>

        </>
    );
};

export default PanelTableForLikedTerms;
