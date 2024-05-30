import React from 'react';
import ProgressBar from './ProgressBar';
import ButtonCapacity from "./ButtonCapacity";

const PlayerCard = ({ player }) => {
    return (
        <div key={player.id} className="col-sm-3 card center" id={`joueur${player.id}`}>
            {player.pv > 0 ? (
                <div className="card-body text-center">
                    <h5 className="card-title">{player.name}</h5>
                    <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div>
                            <ButtonCapacity player={player} />
                            <ButtonCapacity player={player} />
                            <ButtonCapacity player={player} />
                            <ButtonCapacity player={player} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card-body text-center">
                    <h5 className="card-title">{player.name} est mort</h5>
                </div>
            )}
        </div>
    );
}

export default PlayerCard;
