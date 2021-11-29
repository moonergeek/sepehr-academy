import React from 'react';
import PanelTitle from "../panel-title/panelTitle";
import PanelFloatBtn from "../panel-float-btn/panelFloatBtn";
import PanelTableForBoughtTerms from "../panelTable/panelTableForBoughtTerms";


const PanelBoughtTerms = (props) => {
    return (
        <>
            <div className={"row"}>
                <PanelTitle title={props.title}/>
                <div className={"d-flex floating-btn-mr justify-content-end"}>
                    <PanelFloatBtn/>

                </div>
            </div>
            <PanelTableForBoughtTerms userInfo={props.userInfo}/>

        </>
    );
};

export default PanelBoughtTerms;
