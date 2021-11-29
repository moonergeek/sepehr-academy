import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import {getItem} from "../../../core/services/storage/storage";
import GetTermById from "../../../core/services/API/terms/getTermById";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import Loading from "../../common/loading/loadingForHomePage";

const PanelTableForLikedTerms = (props) => {

    const [likedTerms , setLikedTerms] = useState([]);

    const [term , setTerm] = useState([]);

    const [userInformation, setUserInformation] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);


            setLoading(true);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }



    const getLikedTerms = () => {
       const result = getItem(userInformation._id + "id") ;
        setLikedTerms(result)
    }

    const getTerms = () => {
     console.log(userInformation._id);
       console.log(likedTerms);
       const result = GetTermById(likedTerms);
       console.log(result);
    }


    useEffect(() => {
        getUserInformation();
        getLikedTerms();
        getTerms();
    } , [])


    return (
        <>

            {loading ?             <table className="table panel-table table-borderless">
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
            </table> : <Loading />}


        </>
    );
};

export default PanelTableForLikedTerms;
