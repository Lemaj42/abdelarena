import React from 'react';
import { useDispatch } from 'react-redux';
import { hitback, hitMonster } from "../reducers/fightReducer";

const ButtonCapacity = () => {
    const dispatch = useDispatch();

    const combat = () => {
        dispatch(
            hitMonster(30)
        );

        setTimeout(() => {
            dispatch(
                hitback(30)
            )
        }, 2000);
    };



    return (
        <button type="button" onClick={combat} className="btn btn-success material-tooltip-main">
            hit
            <i className="fas fa-bomb"></i>
            <i className="fas fa-fire-alt"></i>
        </button>
    );
};

export default ButtonCapacity;