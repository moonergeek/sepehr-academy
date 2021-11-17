import React from "react";
import PanelNavbar from "../../components/panel-admin/panelNavbar/panelNavbar";
import "../../components/panel-admin/panel-title/panelTitle.css";
import EditPanelUser from "../../components/panel-admin/edit-panel-user/editPanelUser";
import PanelHeadNav from "../../components/panel-admin/panel-head-nav/panelHeadNav";
import {Redirect, Route, Switch} from "react-router-dom";
import PanelHomePage from "../../components/panel-admin/panel-homePage/panelHomePage";
import {clearStorage} from "../../core/services/storage/storage";
import {useHistory} from "react-router-dom";
import "./panelAdmin.css";

const PanelAdmin = () => {
    const history = useHistory();

    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            آیا میخواهید از حساب خود خارج شوید؟
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn panel-no"
                                data-bs-dismiss="modal"
                            >
                                خیر
                            </button>
                            <button
                                type="button"
                                className="btn panel-out"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    clearStorage();
                                    history.push("/");
                                }}
                            >
                                بله
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-lg-3 display-sm-navbar mt-3"}>
                        <PanelNavbar/>
                    </div>
                    <div className={"col-lg-8 col-md-12 pt-3 me-2"}>
                        <div className={"row"}>
                            <div className={"display-sm-header mb-4"}>
                                <PanelHeadNav/>
                            </div>
                        </div>
                        {/*<div className={"container-md"}>*/}
                        <Switch>
                            <Route
                                path={"/dashboard/:id/panel"}
                                component={() => <PanelHomePage/>}
                            />
                            <Route
                                path={"/dashboard/edit"}
                                component={() => <EditPanelUser/>}
                            />
                            <Redirect from={"/dashboard/:id"} to={"/dashboard/:id/panel"}/>
                        </Switch>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelAdmin;
