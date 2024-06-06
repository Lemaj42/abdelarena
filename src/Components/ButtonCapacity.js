import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitback, hitMonster, getMana, addIdIsPlayerAttacking, heal, removetour, spellPlayer } from "../reducers/fightReducer";

export const ButtonCapacity = (props) => {
    const state = useSelector(state => state.fight);

    function verifPlayer(idplayer, isPlayerAttacking) {
        let allowed = true;
        let nbPlayersAlive = 0;
        state.players.forEach((player) => {
            if (player.pv > 0) {
                nbPlayersAlive++;
            }
        });
        if (isPlayerAttacking.length >= nbPlayersAlive) {
            dispatch(removetour());
        }
        else {
            isPlayerAttacking.forEach((player) => {
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
            dispatch(hitMonster(50));
            dispatch(getMana({ id: props.player.id, mana: 5 }));
            setTimeout(() => {
                dispatch(hitback(10));
            }, 1000);
            dispatch(addIdIsPlayerAttacking(props.player.id));
        }
    };

    const deffence = () => {
        if (verifPlayer(props.player.id, isPlayerAttacking)) {
            dispatch(heal({ playerId: props.player.id, healthRestored: 50, manacost: 5 }));
            setTimeout(() => {
                dispatch(hitback(10));
            }, 800);
            dispatch(addIdIsPlayerAttacking(props.player.id));
        }
    };

    const magie = () => {
        if (verifPlayer(props.player.id, isPlayerAttacking)) {
            dispatch(spellPlayer({ playerId: props.player.id }));
            setTimeout(() => {
                dispatch(hitback(50));
            }, 800);
            dispatch(addIdIsPlayerAttacking(props.player.id));
        }
    };

    const handleClick = () => {
        if (props.capacityType === "combat") {
            combat();
        } else if (props.capacityType === "deffence") {
            deffence();
        } else if (props.capacityType === "magie") {
            magie();
        }
    };
    return (
        <div className="radio-wrapper">
            <input
                type="radio"
                id={props.capacityType}
                name="btn"
                className="input"
                checked={props.checked}
                onChange={handleClick}
            />
            <div className="btn">
                <span> {props.name}</span>
                <span className="btn__glitch">{props.name}</span>
            </div>
        </div >
    );
};
