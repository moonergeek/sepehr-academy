import React from 'react';
import "./accordion.css"

const Accordion = (props) => {
    return (
        <>
            <div className="accordion mb-4" id="accordionExample">
                {Object.keys(props.accList).map(item =>  <div key={props.accList[item].id} className="accordion-item">
                    <h2 className="accordion-header" id={props.accList[item].id}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target={"#" + props.accList[item].div_id} aria-expanded="true" aria-controls={props.accList[item].div_id}>
                            {props.accList[item].accTitle}
                        </button>
                    </h2>
                    <div id={props.accList[item].div_id} className="accordion-collapse collapse" aria-labelledby={props.accList[item].id}
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {props.accList[item].accBody}
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    );
};

export default Accordion;
