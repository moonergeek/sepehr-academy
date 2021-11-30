import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import GetAllTerms from "../../../core/services/API/terms/getAllTerms";
import PanelAddIcon from "../panel-add-icon/panelAddIcon";
import Loading from "../../common/loading/loading";


const PanelTableForHpmePage = (props) => {

    const [allTerms, setAllTerms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userInformation, setUserInformation] = useState([]);

    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
            const res = await GetAllTerms();
            setAllTerms(res);
            setLoading(true);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }


    useEffect(() => {

        getUserInformation()
    }, [])


    return (
        <>
            {loading ? <table className="table panel-table table-borderless">
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

                {Object.keys(allTerms).map(termObj => <tr key={termObj} className={"green-hover"}>

                    {userInformation.terms[termObj] ? <>
                        <th scope="row" className={"panel-th-items"}>{termObj}</th>
                        <td className={"panel-td-items"}>4554-01</td>
                        <td className={"panel-td-items"}>
                            <img className={"table-course-img"} src={userInformation.terms[termObj].course.image}
                                 alt=""/>
                            {userInformation.terms[termObj].course.courseName}
                        </td>
                        <td className={"panel-td-items"}> {userInformation.terms[termObj].course.description}</td>
                        <td className={"panel-td-items"}> 1400/01/20</td>

                        <td className={"panel-td-items"}>
                            {userInformation.terms[termObj] ? <span className="badge bg-success"> خریداری شده</span> :
                                <span className="badge bg-primary">در حال خرید</span>}

                        </td>
                        <td className={"panel-td-items"}>{userInformation.terms[termObj].cost + " تومان"} </td>
                        <td className={"panel-td-items"}>

                            <PanelAddIcon userInfo={props.userInfo} termId={userInformation.terms[termObj]._id}/>
                        </td>
                    </> :        <>             <th scope="row" className={"panel-th-items"}>{termObj}</th>
                        <td className={"panel-td-items"}>4554-01</td>
                        <td className={"panel-td-items"}>
                        <img className={"table-course-img"} src={allTerms[termObj].course.image} alt=""/>
                    {allTerms[termObj].course.courseName}
                        </td>
                        <td className={"panel-td-items"}> {allTerms[termObj].course.description}</td>
                        <td className={"panel-td-items"}> 1400/01/20</td>

                        <td className={"panel-td-items"}>
                    {userInformation.terms[termObj] ? <span className="badge bg-success"> خریداری شده</span> :
                        <span className="badge bg-primary">در حال خرید</span>}

                        </td>
                        <td className={"panel-td-items"}>{allTerms[termObj].cost + " تومان"} </td>
                        <td className={"panel-td-items"}>

                        <PanelAddIcon userInfo={props.userInfo} termId={allTerms[termObj]._id}/>
                        </td> </>}



                </tr>)}


                </tbody>
            </table> : <Loading/>}


        </>
    );
};

export default PanelTableForHpmePage;
