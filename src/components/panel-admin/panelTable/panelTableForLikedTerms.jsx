import React, {useEffect, useState} from 'react';
import "./panelTable.css"
import {FcNumericalSorting12} from "react-icons/all";
import PanelDeleteIcon from "../panel-delete-icon/panelDeleteIcon";
import {getItem} from "../../../core/services/storage/storage";
import GetTermById from "../../../core/services/API/terms/getTermById";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";
import Loading from "../../common/loading/loadingForHomePage";

const PanelTableForLikedTerms = (props) => {

    const [selectedFile, setSelectedFile] = useState();
    const [likedTerms , setLikedTerms] = useState([]);
    const [preview, setPreview] = useState();
    const [term , setTerm] = useState([]);

    const [userInformation, setUserInformation] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }



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
       const result = getItem("termId") ;
        setLikedTerms(result);
        console.log(userInformation);
        console.log(result);
    }

    const getTerms = () => {
     // console.log(userInformation._id);
     //   console.log(likedTerms);
       const result = GetTermById(likedTerms);
       setTerm(result);
       // console.log(result);
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
