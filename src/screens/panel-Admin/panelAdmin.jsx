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
import PanelHeadNav from "../../components/panel-admin/panel-head-nav/panelHeadNav";
import {Redirect, Route, Switch} from "react-router-dom";
import Accordion from "../../components/acc-question/accordion";
import PanelHomePage from "../../components/panel-admin/panel-homePage/panelHomePage";


const PanelAdmin = () => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-lg-3 display-sm-navbar  mt-3"}>
                            <PanelNavbar/>
                    </div>
                    <div className={"col-lg-8 col-12 pt-3 me-2"}>
                        <div className={"row"}>
                            <div className={"display-sm-header mb-4"}>
                                <PanelHeadNav/>
                            </div>
                        </div>
                        <Switch>

                            <Route path={"/dashboard/panel"} component={() => <PanelHomePage/>}/>
                            <Route path={"/dashboard/edit"} component={() => <EditPanelUser/>}/>
                            <Redirect from={"/dashboard"} to={"/dashboard/panel"}/>
                        </Switch>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PanelAdmin;
