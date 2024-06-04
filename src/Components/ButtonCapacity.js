import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitback, hitMonster, getMana, getManaMonster, addIdIsPlayerAttacking } from "../reducers/fightReducer";

const ButtonCapacity = (props) => {

    const dispatch = useDispatch();
    let isPlayerAttacking = useSelector(state => state.fight.isPlayerAttacking);

    const combat = () => {
        let tour = true
        isPlayerAttacking.map((player) => {
            if (player === props.player.id) {
                tour = false
            }
        })
        console.log(tour);
        if (tour === true) {

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
            dispatch(
                (addIdIsPlayerAttacking(props.player.id))
            )

        }
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
