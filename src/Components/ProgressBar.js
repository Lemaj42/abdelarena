import React from 'react';

const ProgressBar = (props) => {
    const pvPercentage = Math.round((props.pv * 100) / props.pvMax);
    const manaPercentage = props.mana !== undefined ? Math.round((props.mana * 100) / props.manaMax) : 0;

    return (
        <div>
            <div className="progress md-progress">
                <div className="progress-bar"
                    style={{ width: pvPercentage + "%" }}
                    aria-valuenow={props.pv}
                    aria-valuemin="0"
                    aria-valuemax={props.pvMax}
                    role="progressbar">
                    <i className={`fas ${props.faType} ${props.bgType} icon-text`}> {Math.round(props.pv)} {props.barName} </i>
                </div>
            </div>
            {props.mana !== undefined && props.manaMax !== undefined && (
                <div className="progress md-progress mt-2">
                    <div className="progress-bar bg-info"
                        style={{ width: manaPercentage + "%" }}
                        aria-valuenow={props.mana}
                        aria-valuemin="0"
                        aria-valuemax={props.manaMax}
                        role="progressbar">
                        <i className="fas fa-tint icon-text"> {Math.round(props.mana)} Mana</i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgressBar;

