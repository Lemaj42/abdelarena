import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitback, hitMonster, getMana, getManaMonster, addIdIsPlayerAttacking, heal, removetour } from "../reducers/fightReducer";

export const ButtonCapacity = (props) => {
    const state = useSelector(state => state.fight);

    function verifPlayer(idplayer, isPlayerAttacking) {
        let allowed = true;
        let nbPlayersAlive = 0;
        state.players.map((player) => {
            if (player.pv > 0) {
                nbPlayersAlive++;
            }
        });
        if (isPlayerAttacking.length === nbPlayersAlive) {
            dispatch(removetour());
        }
        else {
            isPlayerAttacking.map((player) => {
                if (player === idplayer) {
                    allowed = false;
                }
            });
        }
        return allowed;
    }
    const dispatch = useDispatch();
    let isPlayerAttacking = useSelector(state => state.fight.isPlayerAttacking);
    const combat = () => {

        if (verifPlayer(props.player.id, isPlayerAttacking)) {

            dispatch(
                hitMonster(50)
            );
            dispatch(
                getMana({ id: props.player.id, mana: 5 })
            );
            setTimeout(() => {
                dispatch(
                    hitback(50)
                );
                dispatch(
                    getManaMonster(30)
                );
            }, 1000);
            dispatch(
                addIdIsPlayerAttacking(props.player.id)
            );
        }
    };
    const deffence = () => {
        if (verifPlayer(props.player.id, isPlayerAttacking)) {
            dispatch(
                heal({ playerId: props.player.id, healthRestored: 50, manacost: 5 })
            );
            setTimeout(() => {
                dispatch(
                    hitback(50)
                );
                dispatch(
                    getManaMonster(30)
                );
            }, 1000);
            dispatch(
                addIdIsPlayerAttacking(props.player.id)
            );
        }
    };


    const handleClick = () => {
        if (props.capacityType === "combat") {
            combat();
        } else if (props.capacityType === "deffence") {
            console.log("deffence");
            deffence();
        }
    };


    return (
        <button type="button" onClick={handleClick} className="btn btn-success material-tooltip-main">
            {props.name}
            <i className="fas fa-bomb"></i>
            <i className="fas fa-fire-alt"></i>
        </button>
    );
};
