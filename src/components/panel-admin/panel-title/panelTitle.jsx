import React from 'react';
import "./panelTitle.css"

const PanelTitle = (props) => {
    return (
        <>
              <span className="panel-title">
                  {props.title}
              </span>
        </>
    );
};

export default PanelTitle;
