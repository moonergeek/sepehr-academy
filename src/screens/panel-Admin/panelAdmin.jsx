import React from 'react';
import PanelNavbar from "../../components/panel-admin/panelNavbar/panelNavbar";
import PanelTable from "../../components/panel-admin/panelTable/panelTable";
import PanelFloatBtn from "../../components/panel-admin/panel-float-btn/panelFloatBtn";
import PanelTitle from "../../components/panel-admin/panel-title/panelTitle";


const PanelAdmin = () => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-3 mt-3"}>
                        <PanelNavbar/>
                    </div>
                    <div className={"col-8"}>
                        <div className={"row"}>
                                <PanelTitle/>
                            <div className={"d-flex justify-content-end mb-4"}>
                                <PanelFloatBtn/>
                            </div>
                        </div>
                        <PanelTable/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PanelAdmin;
