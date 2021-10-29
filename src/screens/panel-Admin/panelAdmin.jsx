import React from 'react';
import PanelNavbar from "../../components/panel-admin/panelNavbar/panelNavbar";
import PanelTable from "../../components/panel-admin/panelTable/panelTable";
import PanelFloatBtn from "../../components/panel-admin/panel-float-btn/panelFloatBtn";
import PanelTitle from "../../components/panel-admin/panel-title/panelTitle";
import "../../components/panel-admin/panel-title/panelTitle.css"
import PanelChart1 from "../../components/panel-admin/panel-charts/panelChart1";
import PanelChart2 from "../../components/panel-admin/panel-charts/panelChart2";
import PanelChart3 from "../../components/panel-admin/panel-charts/panelChart3";
import EditPanelUser from "../../components/panel-admin/edit-panel-user/editPanelUser";
import Header from "../../components/header/header";


const PanelAdmin = () => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"display-sm-on"}>

                </div>
                <div className={"row"}>
                    <div className={"col-lg-3 display-sm-none  mt-3"}>
                            <PanelNavbar/>
                    </div>
                    <div className={"col-lg-8 col-12 pt-3 me-2"}>
                        <div className={"row"}>
                            <PanelTitle title={" گزارش دوره های در حال خرید"}/>
                            <div className={"d-flex floating-btn-mr justify-content-end"}>
                                <PanelFloatBtn/>
                            </div>
                        </div>
                        <PanelTable/>
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
                        <EditPanelUser/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PanelAdmin;
