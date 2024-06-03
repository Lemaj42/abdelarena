import React from 'react';
import { useDispatch } from 'react-redux';
import { hitback, hitMonster, getMana, getManaMonster } from "../reducers/fightReducer";

const ButtonCapacity = (props) => {

    const dispatch = useDispatch();

    const combat = () => {
        dispatch(
            hitMonster(50)
        );
        (
            getMana({ id: props.player.id, mana: 5 })
        )

        setTimeout(() => {
            dispatch(
                hitback(50)
            )
            dispatch(
                getManaMonster(30)
            )
        }, 1000);
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
