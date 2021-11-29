import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import Loading from "../../common/loading/loadingForHomePage";
import PanelTitle from "../panel-title/panelTitle";
import PanelChart1 from "../panel-charts/panelChart1";
import PanelChart2 from "../panel-charts/panelChart2";
import PanelChart3 from "../panel-charts/panelChart3";


const PanelTableForBoughtTerms = (props) => {

    const [userInformation, setUserInformation] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
            console.log(userInformation.terms);

            setLoading(true);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }


    useEffect(() => {

        getUserInformation()
    }, [])


    // const update = () => {
    //     console.log(props.userInfo.result.terms);
    // }
    //
    // useEffect(() => {
    //     update();
    // }, [])

    return (
        <>

            {loading ? <> <table className="table panel-table table-borderless">
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
                    {console.log(userInformation)}
                    {Object.keys(userInformation.terms).map(termObj => <tr key={termObj} className={"green-hover"}>
                        <th scope="row" className={"panel-th-items"}>{termObj}</th>
                        <td className={"panel-td-items"}>4554-01</td>
                        <td className={"panel-td-items"}>
                            <img className={"table-course-img"} src={userInformation.terms[termObj].course.image} alt=""/>
                            {userInformation.terms[termObj].course.courseName}
                        </td>
                        <td className={"panel-td-items"}> {userInformation.terms[termObj].course.description}</td>
                        <td className={"panel-td-items"}> 1400/01/20</td>
                        <td className={"panel-td-items"}>
                            <span className="badge bg-success">خرید موفق</span>
                        </td>
                        <td className={"panel-td-items"}>{userInformation.terms[termObj].cost + " تومان"} </td>
                        <td className={"panel-td-items"}>
                            <PanelDeleteIcon userInfo={props.userInfo} termId={userInformation.terms[termObj]._id}/>
                        </td>
                    </tr>)}


                    </tbody>
                </table>
                <div className={"row mb-4 mt-4"}><PanelTitle title={"آمار خرید های شما از سایت"}/></div>
                <div className={"row mb-4"}>
                <div className={"col-4"}>
                <PanelChart1/>
                </div>
                <div className={"col-4"}>
                <PanelChart2/>
                </div>
                <div className={"col-4"}>
                <PanelChart3/>
                </div>
                </div> </> : <Loading/>}


        </>
    );
};

export default PanelTableForBoughtTerms;
