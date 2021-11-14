import React from "react";
import PanelNavbar from "../../components/panel-admin/panelNavbar/panelNavbar";
import "../../components/panel-admin/panel-title/panelTitle.css";
import EditPanelUser from "../../components/panel-admin/edit-panel-user/editPanelUser";
import PanelHeadNav from "../../components/panel-admin/panel-head-nav/panelHeadNav";
import { Redirect, Route, Switch } from "react-router-dom";
import PanelHomePage from "../../components/panel-admin/panel-homePage/panelHomePage";

const PanelAdmin = () => {
  return (
    <>
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-lg-3 display-sm-navbar mt-3"}>
            <PanelNavbar />
          </div>
          <div className={"col-lg-8 col-md-12 pt-3 me-2"}>
            <div className={"row"}>
              <div className={"display-sm-header mb-4"}>
                <PanelHeadNav />
              </div>
            </div>
            {/*<div className={"container-md"}>*/}
            <Switch>
              <Route
                path={"/dashboard/panel"}
                component={() => <PanelHomePage />}
              />
              <Route
                path={"/dashboard/edit"}
                component={() => <EditPanelUser />}
              />
              <Redirect from={"/dashboard"} to={"/dashboard/panel"} />
            </Switch>
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelAdmin;
