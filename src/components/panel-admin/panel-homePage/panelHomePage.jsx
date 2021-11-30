import React, {useEffect, useState} from 'react';
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import PanelTable from "../panelTable/panelTable";
import PanelChart1 from "../panel-charts/panelChart1";
import PanelChart2 from "../panel-charts/panelChart2";
import PanelChart3 from "../panel-charts/panelChart3";
import PanelTableForHpmePage from "../panelTable/panelTableForHomePage";
import GetUserDetails from "../../../core/services/API/auth/GetUserDetail.api";

const PanelHomePage = (props) => {

    const [userInformation, setUserInformation] = useState([]);



    const getUserInformation = async () => {
        try {

            const result = await GetUserDetails();
            setUserInformation(result.result);
        } catch (err) {
            console.log("header api error :" + err)
        }
    }

    useEffect(() => {

        getUserInformation();

    }, [])



    return (
        <>
            <div className={"row"}>
                <PanelTitle title={props.title}/>
                <div className={"d-flex floating-btn-mr justify-content-end"}>
                    <PanelFloatBtn/>
                </div>
            </div>
            <PanelTableForHpmePage userInfo={props.userInfo}/>

        </>
    );
};

export default PanelHomePage;
