import React, {useEffect, useState} from "react";
import PanelNavbar from "../../components/panel-admin/panelNavbar/panelNavbar";
import "../../components/panel-admin/panel-title/panelTitle.css";
import EditPanelUser from "../../components/panel-admin/edit-panel-user/editPanelUser";
import PanelHeadNav from "../../components/panel-admin/panel-head-nav/panelHeadNav";
import {Redirect, Route, Switch, useParams} from "react-router-dom";
import PanelHomePage from "../../components/panel-admin/panel-homePage/panelHomePage";
import {clearStorage} from "../../core/services/storage/storage";
import {useHistory} from "react-router-dom";
import "./panelAdmin.css";
import GetUserDetails from "../../core/services/API/auth/GetUserDetail.api";
import PanelLikedTerms from "../../components/panel-admin/panel-likedTerms/panelLikedTerms";
import PanelBoughtTerms from "../../components/panel-admin/panel-bought-terms/panelBoughtTerms";

const PanelAdmin = (props) => {
    const history = useHistory();

    const { id } = useParams();







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
                        <PanelNavbar userInfo={props.userInfo}/>
                    </div>
                    <div className={"col-lg-8 col-md-12 pt-3 me-2"}>
                        <div className={"row"}>
                            <div className={"display-sm-header mb-4"}>
                                <PanelHeadNav/>
                            </div>
                        </div>
                        <Switch>
                            <Route
                                path={"/dashboard/:id/panel"}
                                component={() => <PanelHomePage title={" گزارش دوره های در حال خرید"} userInfo={props.userInfo}/>}
                            />
                            {console.log(id)}
                            <Route
                                path={"/dashboard/" + id + "/edit"}
                                component={() => <EditPanelUser userInfo={props.userInfo}/>}
                            />
                            <Route
                                path={"/dashboard/" + id + "/liked"}
                                component={() => <PanelLikedTerms userInfo={props.userInfo} title={" گزارش دوره های مورد علاقه"}/>}
                            />

                            <Route
                                path={"/dashboard/" + id + "/bought"}
                                component={() => <PanelBoughtTerms userInfo={props.userInfo} title={" گزارش دوره های خریداری شده"}/>}
                            />


                            <Redirect from={"/dashboard/:id"} to={"/dashboard/:id/panel"}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelAdmin;
