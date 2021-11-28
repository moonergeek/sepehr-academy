import React from 'react';
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import PanelTable from "../panelTable/panelTable";
import PanelChart1 from "../panel-charts/panelChart1";
import PanelChart2 from "../panel-charts/panelChart2";
import PanelChart3 from "../panel-charts/panelChart3";


const PanelBoughtTerms = (props) => {
    return (
        <>
            <div className={"row"}>
                <PanelTitle title={props.title}/>
                <div className={"d-flex floating-btn-mr justify-content-end"}>
                    <PanelFloatBtn/>

                </div>
            </div>
            <PanelTable userInfo={props.userInfo}/>
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
            </div>
        </>
    );
};

export default PanelBoughtTerms;
